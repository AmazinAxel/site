<script>
	import { fly } from 'svelte/transition';
    import { cubicOut } from 'svelte/easing';
	import { Turnstile } from 'svelte-turnstile';
	import Admonition from '$lib/components/admonition.svelte';
	import Title from '$lib/components/title.svelte';

	const transition = { y: -5, duration: 500, easing: cubicOut };

	let buttonText = $state('Send Message');
	let showError = $state(false);
	let errorMessage = $state('');
	function handleSubmit( event ) {
		event.preventDefault();
		buttonText = 'Sending Message...';

		if (showError == true) { // Hide error on submit
			showError = false;
			setTimeout(() => { error = ""; }, 400);
		};

		let turnstileReset = $state();

		const data = new FormData(event.target);
		const xhr = new XMLHttpRequest();
		xhr.open('POST', 'https://contact.amazinaxel.workers.dev');

		xhr.onload = () => {
			if (xhr.status == 200) { 
				buttonText = 'Message sent';
				turnstileReset?.();
			} else {
				buttonText = 'Resubmit';
				errorMessage = `<p>${xhr.responseText}</p>`;
				showError = true;
				turnstileReset?.();
			};
		};
		xhr.send(data);
	};
</script>

<a class="showMoreBtn otherWay" href="/">Go to homepage</a>

<Title name="Contact"/>

<Admonition info>
	<strong>Reach out to <code>@amazinaxel</code> on Discord for a faster response.</strong>
	<p>Include a contact method if you would like a reply.</p>
</Admonition>

<div class="innerCard coverCard" style="--bg: url(/media/icons/contact.svg); --size: 20rem;">
	<h2>Get in touch</h2>
    <form method="POST" onsubmit={handleSubmit}>
        <label for="subject">Subject:</label> <input type="text" name="title" placeholder="Message topic"/>
		<div></div>
		<label for="message" class="heavy">Message:</label> <textarea name="message" style="width: 300px; height: 150px;" type="text" placeholder="Your message here"></textarea>

		<div style="padding: 0.5rem"></div>
		<Turnstile siteKey="0x4AAAAAAAEGFTl2ESubJ-n9" theme="dark"/>

		{#if showError}
			<div in:fly|local={transition} out:fly|local={transition}>
				<Admonition error>{@html errorMessage}</Admonition>
			</div>
			<br>
		{/if}
		
        <button type="submit" class="button">{ buttonText }</button>
    </form>
	<br>
	<sub>This form is protected by <a href="https://www.cloudflare.com/products/turnstile/">Cloudflare Turnstile</a> - read <a href="https://www.cloudflare.com/privacypolicy/">Cloudflare's privacy policy</a></sub>
</div>