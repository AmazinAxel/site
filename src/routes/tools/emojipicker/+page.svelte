<svelte:head>
	<title>Tools - Emoji Picker</title>
</svelte:head>

Use the buttons below to copy the character you want.

<script>
    // TODO: Switch to client side rendering (CSR) on this page to fix page speed bandwidth issues
    const icons = "¡‰­·₴≠¿×ØÞһðøþΑΒΓΔΕΖΗΘΙΚΛΜΝΞΟΠΡΣΤΥΦΧΨΩαβγδεζηθικλμνξοπρςστυφχψωЂЅІЈЉЊЋАБВГДЕЖЗИКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯабвгдежзиклмнопрстуфхцчшщъыьэюяєѕіјљњ–—‘’“”„…⁊←↑→↓⇄＋ƏəɛɪҮүӨөʻˌ;ĸẞß₽€ѢѣѴѵӀѲѳ⁰¹³⁴⁵⁶⁷⁸⁹⁺⁻⁼⁽⁾ⁱ™ʔʕ⧈⚔☠ҚқҒғҰұӘәҖҗҢңҺאבגדהוזחטיכלמםנןסעפףצץקר¢¤¥©®µ¶¼½¾·‐‚†‡•‱′″‴‵‶";

    const iconList = icons.split('');
</script>

<p>
    Use the buttons below to copy the character you want.

    NOTE: This is not a comprehensive list of every character in Minecraft. This list 
    only includes characters with offical mappings, but any Unicode character works.
    This list only provides emojis with custom textures.
</p>

{#each iconList as icon}
    <button onclick="navigator.clipboard.writeText(this.innerText);">{icon}</button>
{/each}

<div class="card">
    <p><b>Disclaimer:</b> I am not affiliated with Mojang or Microsoft. Previews of each character are copyrighted by their respective owner(s).</p>
</div>

<div class="card">
    <b>Want a full list of every character?</b>
    <button>Copy plaintext list of all characters</button>
    All characters are copied from the font mappings of the Minecraft 1.20 jar. 
</div>
