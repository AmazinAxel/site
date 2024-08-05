<script>
	import Tooltip from '$lib/components/tooltip.svelte';
	import Admonition from '$lib/components/admonition.svelte';

    var inputText;
    var outputText;
    let textType = false;
    let scriptType = 2;
    let selected = 0;

    const normalAlphabet = 'abcdefghijklmnopqrstuvwxyz';
    const smallTextChars = 'ᴀʙᴄᴅᴇꜰɢʜɪᴊᴋʟᴍɴᴏᴘꞯʀsᴛᴜᴠᴡxʏᴢ';
    const altTextChars = 'ᴀʙᴄᴅᴇғɢʜɪᴊᴋʟᴍɴᴏᴘǫʀsᴛᴜᴠᴡxʏᴢ';

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
    function openFuncPopup(event) {
        selected = parseInt(event.target.value);

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
        width: 45%;
        height: 300px;
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

<div class="inputs">
    <textarea bind:value={inputText} on:input={convertText} placeholder="Normal text"/>
    <p>➡️</p>
    <textarea bind:value={outputText} on:input={() => convertText(false)} placeholder="Small text"/>
</div>

<div class="info card">
    <p><b>NOTE:</b> This tool is not finished. Please report any bugs to <code>@amazinaxel</code> on Discord. Please disregard unfinished features such as the converter code generator below.</p>
</div>


<div class="info card">
    <p><b>TIP:</b> Use Skript functions or reflect expressions to create small text in-game, without the need for an online converter!</p>
    <button>Learn more</button>

    <input type="radio" name="noscript" value="1" bind:group={selected} on:change={openFuncPopup}>
    <label for="noscript">No text script types</label><br>
    <input type="radio" name="scripttypes" value="2" bind:group={selected} on:change={openFuncPopup}>
    <label for="scripttypes">Text script included</label><br>
    <input type="radio" name="expression" value="3" bind:group={selected} on:change={openFuncPopup}>
    <label for="expression">Custom reflect expression</label>

</div>

<div class="popup">
    Paste and reload one of the following Skript functions to use:
    
    {#if selected == 1}
        <pre><code>
            code goes here
        </code></pre>
        Example usage: <code>stxt("Hello")</code>
        send image of using it as a skript chat effect
    {:else if selected == 2}
        
        Example usage: <code>stxt("Hello (123+5) Test")</code>
        send image here of chat effect
    {:else if selected == 3} 

    <Admonition builderror>This method requires the <a href="https://github.com/SkriptLang/skript-reflect">skript-reflect</a> addon.</Admonition>

        Example usage: `stxt "Hello (123-5) Test"
        send image of chat
    {:else}
        <p>Unknown function type, please close this popup and try again</p>
    {/if}

</div>