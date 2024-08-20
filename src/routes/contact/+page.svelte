<script>
	import Card from '$lib/components/card.svelte';
	import Title from '$lib/components/title.svelte';
</script>

<Title name="Contact"/>

<h1>Contact</h1>

<Card>
	<p>I prefer to communicate over <a href="https://discord.com/">Discord,</a> when possible. Reach out to me using my Discord handle: <code>@amazinaxel</code></p>
	<br>
	<p>If you cannot use Discord for any reason, you may use the contact form below.</p>
</Card>

<h4>Contact form in development -- check back later.</h4>

<Card>
    <form onSubmit="submitContactForm(event)" id="contactform">
        <div class="input">
        	<label for="subject">* Subject:</label> <input id="text" name="title" type="text" placeholder="Message Subject"/>
        </div>
        <div class="input">
        	<label for="name">Name</label> <input id="name" name="name" type="text" placeholder="Your Name (optional)"/>
        </div>
        <div class="input">
        	<label for="email">Email:</label> <input id="email" name="email" type="email" placeholder="Your Email (optional)    "/>
        </div>
        <div class="input">
        	<label for="message" class="heavy">* Message:</label> <textarea id="message" name="message" style="width: 300px; height: 150px;" type="text" placeholder="Enter your message here"></textarea>
        </div>
        <div class="cf-turnstile" data-sitekey="TODO add site key" data-theme="auto" id="turnstileWidget"></div>
    	<br>
        <button type="submit" class="button" id="submitFormBtn">Submit</button>
    </form>
	<p>This form uses <a href="https://www.cloudflare.com/products/turnstile/">Cloudflare Turnstile</a> -- read <a href="https://www.cloudflare.com/privacypolicy/">Cloudflare's privacy policy</a></p>
</Card>
TODO: use Workers script and css from old site and reimplement this

<Card>
	<h1>Social Profiles</h1>
	<p>
		Typically, you'll find me online under the name 'AmazinAxel'.
		Below are some of my common social profiles.
	</p>
	<div class="innerCard">
		<ul>
			<li><a href="https://github.com/amazinaxel">GitHub</a></li>
			<li><a href="https://youtube.com/@amazinaxel">YouTube</a></li>
			<li><a href="https://www.roblox.com/users/1362593157/profile">Roblox</a></li>
			<li><a href="https://replit.com/@AmazinAxel">Repl.it</a></li>
		</ul>
	</div>
</Card>
