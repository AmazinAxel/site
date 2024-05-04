<script>
	import Callout from '$lib/components/card.svelte'
</script>


<svelte:head>
	<title>Contact</title>
</svelte:head>


<h1>Contact</h1>

<p>This page is broken and doesn't do anything yet!!</p>
<p>Stuff is still being worked on so things will be broken.</p>

<Callout>Hi!</Callout>

<form on:submit|preventDefault>
	<div class="form-section">
		<label for="name">Name</label>
		<input type="text" id="name" placeholder="First name" />
	</div>
	
	<div class="form-section">
		<label for="email">Email</label>
		<input type="email" id="email" placeholder="Email address" />
	</div>

	<fieldset>
		<legend>
			Which option?
		</legend>

		<div>
			<input type="radio" name="s" id="s1" value="s1">
			<label for="s1">Option 1</label>
		</div>
		<div>
			<input type="radio" name="s" id="s2" value="s2">
			<label for="s2">Option 2</label>
		</div>
		<div>
			<input type="radio" name="s" id="s3" value="s3">
			<label for="s3">Option 3</label>
		</div>
	</fieldset>

	<div class="form-section">
		<input type="checkbox" id="c1" >
		<label for="c1">Sign me up</label>
	</div>

	<input type="submit" value="Submit (broken)!">
</form>