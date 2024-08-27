<script>
	import Tooltip from '$lib/components/tooltip.svelte';
	import Admonition from '$lib/components/admonition.svelte';
    
    import { fly } from 'svelte/transition';
    import { cubicOut } from 'svelte/easing';
	const transition = { y: 10, duration: 150, easing: cubicOut };

    const snippet1 = `on load:
    set {_lower} to "abcdefghijklmnopqrstuvwxyz"
    set {-tiny::*} to "ᴀʙᴄᴅᴇꜰɢʜɪᴊᴋʟᴍɴᴏᴘǫʀѕᴛᴜᴠᴡxʏᴢ" split at ""
    set {-lower::*} to {_lower} split at ""
    set {-upper::*} to (uppercase {_lower}) split at ""	

function stxt(text: text) :: text:    
    loop {-tiny::*}:
        replace {-lower::%loop-index%} and {-upper::%loop-index%} with loop-value in {_text}
        replace "§%loop-value%" with "§%{-lower::%loop-index%}%" in {_text} # put back color codes

    return {_text}`

    const snippet2 = `on load:
	set {_lower} to "abcdefghijklmnopqrstuvwxyz"
	set {-tiny::*} to "ᴀʙᴄᴅᴇꜰɢʜɪᴊᴋʟᴍɴᴏᴘǫʀѕᴛᴜᴠᴡxʏᴢ" split at ""
	set {-lower::*} to {_lower} split at ""
	set {-upper::*} to (uppercase {_lower}) split at ""	
	set {-nums::*} to "1234567890+-=()" split at ""
	set {-super::*} to "¹²³⁴⁵⁶⁷⁸⁹⁰⁺⁻⁼⁽⁾" split at ""
	set {-sub::*} to "₁₂₃₄₅₆₇₈₉₀₊₋₌₍₎" split at ""

function stxt(text: text, scripttype: integer = 0) :: text:
	# Script-type Values:
	# 0 = no superscript or subscript numbers
	# 1 = superscript numbers
	# 2 = subscript numbers
	
	# Replace the text
	loop {-tiny::*}:
		replace {-lower::%loop-index%} and {-upper::%loop-index%} with loop-value in {_text}
		replace "§%loop-value%" with "§%{-lower::%loop-index%}%" in {_text} # put back color codes

	# Numbers can only be super or subscript, not both (anything other than 1 or 2 will ignore this)
	if {_scripttype} is 1:
		loop {-super::*}:
			replace {-nums::%loop-index%} with loop-value in {_text}
			replace "§%loop-value%" with "§%{-lower::%loop-index%}%" in {_text} # put back color codes
	else if {_scripttype} is 2:
		loop {-sub::*}:
			replace {-nums::%loop-index%} with loop-value in {_text}
			replace "§%loop-value%" with "§%{-lower::%loop-index%}%" in {_text} # put back color codes

	return {_text}`

    const snippet3 = `
        
    `

    const snippet4 = `function ntxt(text: text) :: text:
	loop {-lower::*}: # Lowercase
		replace {-tiny::%loop-index%} with loop-value in {_text}

	# Upper/lower scripts
	loop {-nums::*}:
		replace {-super::%loop-index%} with loop-value in {_text}
		replace {-sub::%loop-index%} with loop-value in {_text}
	
	return {_text}`

    var inputText;
    var outputText;
    let textType, isOpen = false;
    let scriptType = 2;
    let selected = 0;

    const normalAlphabet = 'abcdefghijklmnopqrstuvwxyz*';
    const smallTextChars = 'ᴀʙᴄᴅᴇꜰɢʜɪᴊᴋʟᴍɴoᴘꞯʀsᴛᴜᴠᴡxʏᴢ⋆';
    const altTextChars = 'ᴀʙᴄᴅᴇғɢʜɪᴊᴋʟᴍɴoᴘǫʀsᴛᴜᴠᴡxʏᴢ';

    const scriptChars = '0123456789+-=()';
    const superChars = '⁰¹²³⁴⁵⁶⁷⁸⁹⁺⁻⁼⁽⁾';
    const subChars = '₀₁₂₃₄₅₆₇₈₉₊₋₌₍₎';

    function convertText(toSmallText = true) {
        let preConvertedText = '';

        var text = (toSmallText) ? inputText.toLowerCase() : outputText;
        
        // Get character type
        const chars = textType ? smallTextChars : altTextChars;
        const scriptTypeChars = (scriptType == 1) ? subChars : superChars;

        for (let i = 0; i < text.length; i++) {
            const char = text[i];

            // Set character and fall back if char is not found in list
            if (toSmallText) {
                const index = normalAlphabet.indexOf(char);
                const scriptIndex = scriptChars.indexOf(char);

                if (scriptIndex !== -1) {
                    preConvertedText += (scriptType != 2) ?
                        scriptTypeChars[scriptIndex] : char;
                } else {
                    preConvertedText += (index !== -1) ?
                        chars[index] : char;
                }
            } else { // Convert small to normal large text
                const index = chars.indexOf(char);
                const scriptIndex = scriptTypeChars.indexOf(char);

                if (scriptIndex !== -1) {
                    preConvertedText += scriptChars[scriptIndex];
                } else {
                    preConvertedText += (index !== -1) ? 
                        normalAlphabet[index] : char;
                }
            }
        }

        (toSmallText) ? outputText = preConvertedText : inputText = preConvertedText;
    }

    // TODO add popup visibility
    function toggleFuncPopup(sel) {
        selected = sel;
        isOpen = !isOpen;
    }
    // todo maybe include ‘’“” somehow
</script>

<style>
    .selector {
        border-left: 5px solid white;
        padding: 20px;
        border-radius: 5px;
        margin-bottom: 10px;
    } /* todo consider using & and combining this into selector */

    .selector::before {
        content: "";
        border-top: 5px solid var(--lightest3);
        width: 23px;
        right: 20px;
        bottom: 20px;
        display: block;
        position: relative;
    }

    .selector::after {
        content: "";
        border-bottom: 5px solid var(--lightest3);
        width: 23px;
        right: 20px;
        display: block;
        position: relative;
        top: 20px;
    }

    textarea {
        width: 50%;
        height: 300px;
        margin: 0;
    }

    .inputs {
        display: flex;
        justify-content: center;
        gap: 10px;
        align-items: center;
    }


    input#scriptType {
        width: 100%;
        height: 0.6rem;
    }
        
    /* Modify the appearance of the slider */
    .seek_slider {
        appearance: none;
        height: 5px;
        opacity: 0.7;
        border-radius: 5px;
    }

    .slider_container { width: 60px; }
    
    /* Modify the appearance of the slider thumb */
    .seek_slider::-webkit-slider-thumb {
        appearance: none;
        width: 15px;
        height: 15px;
        background: var(--blue2);
        cursor: pointer;
        border-radius: 50%;
    }
    
    .seek_slider:hover { opacity: 1.0; }
    .seek_slider { width: 20%; }

    input::-webkit-slider-thumb, .seek_slider {
	    transform: scale(1);
	    transition: transform .3s cubic-bezier(0, 0.6, 0, 1), box-shadow .3s cubic-bezier(0, 0.6, 0, 1);
        box-shadow: var(--darkest1) 0px 0px 20px 10px;
    }

    input:hover::-webkit-slider-thumb {
        transform: scale(1.5);
        box-shadow: var(--darkest1) 0px 0px 20px 10px;
    }
</style>

<h1>Small Text Converter</h1>

<div class="selector">
    <label class="container">
        <input type="checkbox" id="useDifferentText" bind:checked={textType} on:change={convertText}>
        <span class="checkmark"></span>
        <Tooltip inlineText="Use alternate text style">
            Use a different text style where some characters look
            slightly different. <b>Example:</b>
            <img src="/media/tools/textconverter/texttypepreview.png" alt="Shows difference between the text type function" class="noImgStyle" style="border-radius: 5px">
        </Tooltip>
    </label>

    <br><br>
    <div style="display: flex; gap: 5px">
        <Tooltip inlineText="Subscript">Appears below the text <b>Example:</b></Tooltip>

        <!-- Slider -->
        <div class="slider_container">
            <input type="range" class="seek_slider" min="1" bind:value={scriptType} max="3" on:input={convertText} id="scriptType">
        </div>

        <Tooltip inlineText="Superscript">Appears above the text <b>Example:</b></Tooltip>
    </div>
</div>

<br>

<div class="inputs">
    <textarea bind:value={inputText} on:input={convertText} placeholder="Normal text"/>
    <p>➡️</p>
    <textarea bind:value={outputText} on:input={() => convertText(false)} placeholder="Small text"/>
</div>

<div class="info card">
    <p><b>NOTE:</b> This tool is not finished. Please report any bugs to <code>@amazinaxel</code> on Discord. Please disregard unfinished features such as the converter code generator below.</p>
</div>


<div class="info card">
    <p><b>TIP:</b> Use these Skript functions/reflect expressions to create small text without leaving your code!</p>

    <button type="button" on:click={() => toggleFuncPopup(1)}>Minimal</button>
    
    <button type="button" on:click={() => toggleFuncPopup(2)}>Full</button>

    <button type="button" on:click={() => toggleFuncPopup(3)}>Reflect Expression</button>

    <button type="button" on:click={() => toggleFuncPopup(4)}>Normalized</button>
</div>
{#if isOpen}
<!-- 
    Warning can be ignored safely since this is a alias button
    svelte-ignore a11y-click-events-have-key-events 
-->
<div class="popupBg" tabindex="0" role="button" on:click={toggleFuncPopup} in:fly|local={transition} out:fly|local={transition}></div>
<div class="popup card" in:fly|local={transition} out:fly|local={transition}>
    <button on:click={toggleFuncPopup}>Close</button>
    {#if selected == 1}
        (adapted from <a href="https://github.com/ShaneBeee/SkriptSnippets/blob/master/snippets/Tiny-Text.sk">Shanebee/SkriptSnippets</a>)
        <pre><code>{snippet2}</code></pre>
        Example usage: <code>stxt("Hello")</code>
        <img src="/media/tools/textconverter/minimaldemo.png" alt="Example code usage">
    {:else if selected == 2}
        (adapted from <a href="https://github.com/ShaneBeee/SkriptSnippets/blob/master/snippets/Tiny-Text.sk">Shanebee/SkriptSnippets</a>)
        <pre><code>{snippet2}</code></pre>
        Example usage: <code>stxt("Hello (123+5) Test")</code>
        <img src="/media/tools/textconverter/fulldemo.png" alt="Example code usage">
    {:else if selected == 3}
        TODO
        <Admonition builderror>This method requires the <a href="https://github.com/SkriptLang/skript-reflect">skript-reflect</a> addon.</Admonition>
        Example usage: `stxt "Hello (123-5) Test"
        send image of chat
    {:else if selected == 4}
    TODO
        Example usage: `ntxt("ѕᴍᴀʟʟ ᴛᴇxᴛ ᴅᴇᴍᴏ")`
        <img src="/media/tools/textconverter/normalizeddemo.png" alt="Example code usage">


    {:else}
        <p>Unknown function type, please close this popup and try again</p>
    {/if}

</div>
{/if}