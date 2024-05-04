<script>
	function ordinal(n) {
		let s = ["th", "st", "nd", "rd"], v = n % 100;
		return n + (s[(v - 20) % 10] || s[v] || s[0]);
	};
	let dateOptions = { 
		weekday: 'long', year: 'numeric', month: 'long', 
		day: 'numeric', hour: 'numeric', minute: 'numeric', 
		hour12: true 
	};

	let formattedDate = new Intl.DateTimeFormat('en-US', dateOptions).format(new Date()).replace(/\d+/, (match) => ordinal(match));
</script>

<footer>
	<p>&copy;2016-{new Date().getFullYear()} AmazinAxel (Alec)</p>
	<p>Last generated on {formattedDate}</p>
</footer>