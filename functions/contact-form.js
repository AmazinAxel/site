/*
 * Environment vars:
 *   `TURNSTILE_SECRET` (encrypt)
 *   `WEBHOOK_URL` - Discord channel webhook URL
 * 
 * Bind `last_sent` KV key to the Pages instance under any namespace
 */

export async function onRequest({ request, env }) {
	try {
		try { var data = await request.formData(); }
    	catch { return new Response('Invalid request: no form data sent', { status: 500 }); }
		
		const token = data.get("cf-turnstile-response");
		const ip = request.headers.get("CF-Connecting-IP");
	
		// Verify Turnstile token
		let formData = new FormData();
		formData.append("secret", env.TURNSTILE_SECRET);
		formData.append("response", token);
		formData.append("remoteip", ip);
	
		// Check if Turnstile captcha was valid
	    fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify/', { body: formData, method: "POST"})
		.then(response => {
			if (!response.success) return new Response('Captcha verification failed. Please try again', { status: 511 })
		});
		
		let output = [];
		for (let [key, value] of data) { 
			if (!value)
				return new Response('A title, message, and name are required to send the message', { status: 412 });
			output[key] = value;
		};

		const diffInMinutes = (Number(new Date()) - new Date(await env.last_sent.get('last_sent'))) / 60000;
		
		if (diffInMinutes < 15) return new Response('A message was already sent through this contact form recently. Please wait before sending your message', { status: 409 });

		if (output.message.length > 1000)
			return new Response('Please shorten your message', { status: 412 });

		// Send the message
		await fetch(env.WEBHOOK_URL, {
			method: "POST",
			headers: {"Content-Type": "application/json"},
			body: JSON.stringify({
				"username": 'Website Contact Form',
				"embeds": [{
					"author": {
						"name": 'Name: ' + output.name
					},
					"title": output.title,
					"description": output.message,
					"color": 6193580,
				}]
			})
		});

		// Update last message sent var
		const lastSent = new Date(new Date().getTime() + 15 * 60000);
		await env.last_sent.put('last_sent', lastSent.toISOString());

		return new Response('Your message was sent successfully', { status: 200 });

	} catch(err) { return new Response('Error received while processing your message. Please try again', { status: 500 }); };
};
