<script>
	import Tooltip from '$lib/components/tooltip.svelte';

    var inputText = '';
    var outputText = '';
    let textType = false;
    let selected = 0;

    const normalAlphabet = 'abcdefghijklmnopqrstuvwxyz';
    const smallTextChars = 'ᴀʙᴄᴅᴇꜰɢʜɪᴊᴋʟᴍɴᴏᴘꞯʀsᴛᴜᴠᴡxʏᴢ';
    const altTextChars = 'ᴀʙᴄᴅᴇғɢʜɪᴊᴋʟᴍɴᴏᴘǫʀsᴛᴜᴠᴡxʏᴢ';

    const scriptChars = '0123456789*+-=()';
    const superChars = '⁰¹²³⁴⁵⁶⁷⁸⁹*⁺⁻⁼⁽⁾';
    const subChars = '₁₂₃₄₅₆₇₈₉₊₋₌₍₎';

    function convertText(toSmallText) {
        console.log('aee');
        let preConvertedText = '';

        if (toSmallText) {
            var text = inputText.toLowerCase(); // Convert text to lowercase
        } else {
            var text = outputText; // Convert text to lowercase
        }

        // Get character type
        const chars = textType ? smallTextChars : altTextChars;
        const scriptTypeChars = scriptType ? superChars : subChars;

        for (let i = 0; i < text.length; i++) {
            const char = text[i];
            const index = normalAlphabet.indexOf(char);
            const scriptIndex = scriptChars.indexOf(char);

            // Set character and fall back if char is not found in list
            if (toSmallText) {
                preConvertedText += (index !== -1) ? chars[index] : char;
                preConvertedText += (scriptIndex !== -1) ? scriptTypeChars[index] : char;
            } else {
                preConvertedText += (index !== -1) ? scriptChars[index] : char;
                preConvertedText += (scriptIndex !== -1) ? normalAlphabet[index] : char;
            }
        }

        //(toSmallText) ? outputText = preConvertedText : inputText = preConvertedText;
        outputText = preConvertedText;
        inputText = preConvertedText;
    }

    function openFuncPopup(event) {
        selected = parseInt(event.target.value);
        console.log(selected) // ai made this idek man
    }
    // todo maybe include ‘’“” somehow
</script>

<style>
    .selector {
        border-left: 5px solid white;
        padding-left: 20px;
        padding-bottom: 20px;
        border-radius: 5px;
        margin-bottom: 10px;
    } /* todo consider using & and combining this into selector */

    .selector::before {
        content: "";
        border-top: 5px solid var(--lightest3);
        width: 23px;
        right: 20px;
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

    .selector h3 {
        position: relative;
        top: -34px;
        left: 10px;
        margin-bottom: 15px;
        height: 0;
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
    <h3>Text Options</h3>
    <label class="container">
        <input type="checkbox" id="useDifferentText" bind:checked={textType} on:change={convertText(true)}>
        <span class="checkmark"></span>
        <Tooltip inlineText="Use alternate text style">
            Use a different text style where some characters look
            slightly different. <b>Example:</b>
            <img src="/media/tools/textconvert/texttypepreview.png" alt="Shows difference between the text type function" class="noImgStyle" style="border-radius: 5px">
        </Tooltip>
    </label>

    <br><br>
    <div style="display: flex; gap: 5px">
        <Tooltip inlineText="Subscript">Appears below the text <b>Example:</b></Tooltip>
        <!-- TODO turn this into a component -->
        <div class="slider_container">
            <input type="range" class="seek_slider" min="1" value="2" max="3" id="scriptType">
        </div>

        <Tooltip inlineText="Superscript">Appears above the text <b>Example:</b></Tooltip>
    </div>
</div>
<!-- todo convert to just value instead of having extra closing tags-->
<div class="inputs">
    <textarea bind:value={inputText} on:input={convertText(true)} placeholder="Normal text"/>
    <p>➡️</p>
    <textarea bind:value={outputText} on:input={convertText(false)} placeholder="Small text"/>
</div>

<div class="info card">
    <p><b>NOTE:</b> This tool is not finished. Please report any bugs to <code>@amazinaxel</code> on Discord. Additionally, some features such as text reversability do not currently work.</p>
</div>


<div class="info card">
    <p><b>TIP:</b> Use Skript functions or reflect expressions to create small text in-game, without the need for this converter!</p>
    <button>Learn more</button>

    <input type="radio" name="noscript" value="1" bind:group={selected} on:change={openFuncPopup}>
    <label for="noscript">No text script types</label><br>
    <input type="radio" name="scripttypes" value="2" bind:group={selected} on:change={openFuncPopup}>
    <label for="scripttypes">Text script included</label><br>
    <input type="radio" name="expression" value="3" bind:group={selected} on:change={openFuncPopup}>
    <label for="expression">Custom reflect expression</label>

</div>

<div class="popup">
    Paste one of the following functions in any Skript file to use:
    
    {#if selected == 1}
        
        Example usage: `stxt("Hello")`
        send image of using it as a skript chat effect
    {:else if selected == 2}
        
        Example usage: `stxt("Hello (123+5) Test")`
        send image here of chat effect
    {:else if selected == 3} 

        <div class="warning card">
        You need the <a href="TODO">skript-reflect</a> plugin to use this method.
        </div>

        Example usage: `stxt "Hello (123-5) Test"
        send imagage of chat
    {:else}
        <p>Unknown function type, please close this popup and try again</p>
    {/if}

</div>