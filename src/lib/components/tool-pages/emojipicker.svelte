<script>
    import Admonition from '$lib/components/admonition.svelte';

    // CONSIDER: Switch to CLIENT side rendering (CSR) on this page to fix page speed bandwidth issues
    const icons = "¡‰­·₴≠¿×ØÞһðøþΑΒΓΔΕΖΗΘΙΚΛΜΝΞΟΠΡΣΤΥΦΧΨΩαβγδεζηθικλμνξοπρςστυφχψωЂЅІЈЉЊЋАБВГДЕЖЗИКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯабвгдежзиклмнопрстуфхцчшщъыьэюяєѕіјљњ–—‘’“”„…⁊←↑→↓⇄＋ƏəɛɪҮүӨөʻˌ;ĸẞß₽€ѢѣѴѵӀѲѳ⁰¹³⁴⁵⁶⁷⁸⁹⁺⁻⁼⁽⁾ⁱ™ʔʕ⧈⚔☠ҚқҒғҰұӘәҖҗҢңҺאבגדהוזחטיכלמםנןסעפףצץקר¢¤¥©®µ¶¼½¾·‐‚†‡•‱′″‴‵‶";

    const iconList = icons.split('');
</script>

<Admonition error>This tool is not finished, please check back later</Admonition>
<br><br>

<p>
    Use the buttons below to copy the character you want.

    This list only includes characters in the font mappings
    but any Unicode character will work (with an odd texture).
</p>


<div class="card">
    <h3>More characters</h3>
    Taking screenshots of each character is time-consuming, 
    so only commonly-used characters are shown. Characters
    shown below do not have an in-game preview.
</div>

{#each iconList as icon}
    <button onclick="navigator.clipboard.writeText(this.innerText);">{icon}</button>
{/each}

<div class="card">
    <p><b>Disclaimer:</b> I am not affiliated with Mojang or Microsoft. Preview images are from the offical Minecraft font and are copyrighted by their respective owner(s).</p>
</div>

<div class="card">
    <h3>Character list</h3>
    Want a full list of all characters?
    <button>Copy plaintext list of all characters</button>
    All characters are copied from the font mappings of the Minecraft 1.20 jar.
</div>
