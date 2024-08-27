<script>
	import Admonition from '$lib/components/admonition.svelte';
	import Title from '$lib/components/title.svelte';
	import { enhance } from '$app/forms';

	let buttonText = 'Send Message';
	let showError = true;
	let errorMessage = '';
	async function handleSubmit({ result }) {
		showError = false
		errorMessage = '';
		if (result.type !== 'success') {
			errormessage = "hi"
			//errorMessage = '<p><strong>Error ' + result.status + ':</strong> ' + result.type + '</p>'; // Create message
			showError = true // Insert error message
		}
		/*
		console.log("Sending message....")
		buttonText = 'Sending Message...'; // Show confirmation text

		if (error != "") { // Hide error on submit
			showError = false;
			setTimeout(function() { error = ""; }, 400); // Completely remove the error element
		}

		form = document.getElementById('contactform'); // Get form element
		const data = new FormData(form); // Create formData to send
		const xhr = new XMLHttpRequest(); // Create HTTP request
		xhr.open('POST', 'contact'); // Open the HTTP request
		
		xhr.onload = function() { // Get the response
			if (xhr.status == 200) { button.innerHTML = 'Message Submitted!'; window.turnstile.reset(); } // Success!
			else { // There was an error, show a helpful error message
				buttonText = 'Resubmit'; // Show error confirmation on button
				errorMessage = '<p><strong>Error ' + xhr.status + ':</strong> ' + xhr.responseText + '</p>'; // Create message
				showError = true // Insert error message
				window.turnstile.reset(); // Reset Turnstile captcha
			};
		};
		xhr.send(data); // Send off the form data*/
	}
</script>

<Title name="Contact"/>

<h1>Contact</h1>
<Admonition info size=20>
	<p><strong>I prefer to communicate over <a href="https://discord.com/">Discord,</a> when possible.</strong> Reach out to me using my Discord handle: <code>@amazinaxel</code></p>
	<br>
	<p>If you cannot use Discord for any reason, use the below contact form.</p>
</Admonition>

<Admonition error>spotdl --download-ffmpeg --format mp3 download
	<p><strong>This contact form is not finished.</strong> Please check back later.</p>
</Admonition>

<!-- https://kit.svelte.dev/docs/form-actions -->
<div class="innerCard coverCard" style="--bg: url(/media/icons/contact.svg); --size: 20rem;">
	<h2>Get in touch</h2>
    <form method="POST" action="https://journal.amazinaxel.com/contact-form" use:enhance>
        <div class="input">
        	<label for="subject">Subject:</label> <input id="text" name="title" type="text" placeholder="Message Subject"/>
        </div>
        <div class="input">
        	<label for="name">Name:</label> <input id="name" name="name" type="text" placeholder="Your Name (optional)"/>
        </div>
        <div class="input">
        	<label for="email">Email:</label> <input id="email" name="email" type="email" placeholder="Your Email (optional)    "/>
        </div>
        <div class="input">
        	<label for="message" class="heavy">Message:</label> <textarea id="message" name="message" style="width: 300px; height: 150px;" type="text" placeholder="Enter your message here"></textarea>
        </div>
        <div class="cf-turnstile" data-sitekey="TODO add site key" data-theme="auto" id="turnstileWidget"></div>
        <button class="button">{ buttonText }</button>
		{#if showError}
		<button class="nostyle">
			<img src="/media/icons/xmark.svg" class="noImgStyle" alt="Show error info">
		</button>        
		{/if}
    </form>
	<br>
	<sub>This form uses <a href="https://www.cloudflare.com/products/turnstile/">Cloudflare Turnstile</a> - read <a href="https://www.cloudflare.com/privacypolicy/">Cloudflare's privacy policy</a></sub>
	<p>{errorMessage}</p>

</div>