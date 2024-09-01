<script>
	import Admonition from '$lib/components/admonition.svelte';
	import Title from '$lib/components/title.svelte';
	import Tooltip from '$lib/components/tooltip.svelte';
	import { fly } from 'svelte/transition';
    import { cubicOut } from 'svelte/easing';
	const transition = { y: -5, duration: 500, easing: cubicOut };

	let buttonText = 'Send Message';
	let showError = false;
	let errorMessage = '';
	async function handleSubmit( event ) {
		event.preventDefault();
		buttonText = 'Sending Message...'; // Show confirmation text

		if (showError == true) { // Hide error on submit
			showError = false;
			setTimeout(function() { error = ""; }, 400); // Completely remove the error element
		}

		const data = new FormData(event.target); // Create formData to send
		const xhr = new XMLHttpRequest(); // Create HTTP request
		xhr.open('POST', 'https://journal.amazinaxel.com/contact-form'); // Open the HTTP request
		console.log("Sending message....");
		
		xhr.onload = function() { // Get the response
			if (xhr.status == 200) { buttonText = 'Message Sent!'; window.turnstile.reset(); } // Success!
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

<svelte:head>
	<script src="https://challenges.cloudflare.com/turnstile/v0/api.js" async defer></script>
</svelte:head>

<Title name="Contact"/>

<h1>Contact</h1>
<Admonition info size=20>
	<p><strong>I prefer to communicate over <a href="https://discord.com/">Discord,</a> when possible.</strong> Reach out to me using my Discord handle: <code>@amazinaxel</code></p>
	<p><strong>NOTE:</strong> I do not provide support over DMs.</p>
	<br>
	<p>If you cannot use Discord for any reason, use the below contact form. Include a contact method if you expect a response.</p>
</Admonition>

{#if showError}
	<div in:fly|local={transition} out:fly|local={transition}>
		<Admonition>{@html errorMessage}</Admonition>
	</div>
{/if}

<!-- https://kit.svelte.dev/docs/form-actions -->
<div class="innerCard coverCard" style="--bg: url(/media/icons/contact.svg); --size: 20rem;">
	<h2>Get in touch</h2>
    <form method="POST" on:submit={handleSubmit}>
        <div class="input">
        	<label for="subject">Subject:</label> <input id="text" name="title" type="text" placeholder="Message Subject"/>
        </div>
        <div class="input">
        	<label for="name">Name:</label> <input id="name" name="name" type="text" placeholder="Your Name"/>
        </div>
        <div class="input">
        	<label for="message" class="heavy">Message:</label> <textarea id="message" name="message" style="width: 300px; height: 150px;" type="text" placeholder="Enter your message here"></textarea>
        </div>
		<div style="padding-bottom: 1rem;">
			<label class="container">
				<input type="checkbox" id="useDifferentText">
				<span class="checkmark"></span>
				<Tooltip inlineText="Urgent">
					Only select this option if this
					message is urgent and time-sensitive 
				</Tooltip>
			</label>
		</div>
        <div class="cf-turnstile" data-sitekey="0x4AAAAAAAEGFTl2ESubJ-n9" data-theme="auto"></div>
        <button type="submit" class="button">{ buttonText }</button>
    </form>
	<br>
	<sub>This form uses <a href="https://www.cloudflare.com/products/turnstile/">Cloudflare Turnstile</a> - read <a href="https://www.cloudflare.com/privacypolicy/">Cloudflare's privacy policy</a></sub>
</div>