<script>
	import Tooltip from '$lib/components/tooltip.svelte';

    var inputText = '';
    var convertedText = '';
    let textType = false;
    let selected = 0;

    const normalAlphabet = 'abcdefghijklmnopqrstuvwxyz';
    const smallTextChars = 'ᴀʙᴄᴅᴇꜰɢʜɪᴊᴋʟᴍɴᴏᴘꞯʀsᴛᴜᴠᴡxʏᴢ';
    const altTextChars = 'ᴀʙᴄᴅᴇғɢʜɪᴊᴋʟᴍɴᴏᴘǫʀsᴛᴜᴠᴡxʏᴢ';

    const scriptChars = '0123456789*+-=()';
    const superChars = '⁰¹²³⁴⁵⁶⁷⁸⁹*⁺⁻⁼⁽⁾';
    const subChars = '₁₂₃₄₅₆₇₈₉₊₋₌₍₎';

    function convertToSmallText() {
        var text = inputText.toLowerCase(); // Convert text to lowercase
        let preConvertedText = '';

        // Get character type
        const chars = textType ? smallTextChars : altTextChars;

        /* todo add script type support */
        for (let i = 0; i < text.length; i++) {
            const char = text[i];
            const index = normalAlphabet.indexOf(char);

            // Set character and fall back if char is not found in list
            preConvertedText += (index !== -1) ? chars[index] : char;
        }
        convertedText = preConvertedText;
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
</style>

<h1>Small Text Converter</h1>

<div class="selector">
    <h3>Text Options</h3>
    <label class="container">
        <input type="checkbox" id="useDifferentText" bind:checked={textType} on:change={convertToSmallText}>
        <span class="checkmark"></span>
        <Tooltip inlineText="Use alternate text style">
            Use a different text style where some characters look
            slightly different. <b>Example:</b>
            <img src="/media/tools/textconvert/texttypepreview.png" alt="Shows difference between the text type function" class="noImgStyle" style="border-radius: 5px">
        </Tooltip>
    </label>

    <br>
    <Tooltip isIcon style="top: 7px;">Subscript/superscript chars apply to numbers and some basic math</Tooltip>
    <h4 style="display: inline-block">Script character type</h4>
    <br>
    <div style="display: flex; gap: 5px">
        <Tooltip inlineText="Subscript">Appears below the text <b>Example:</b></Tooltip>
        <input type="range" min="1" value="2" max="3" id="scriptType">
        <Tooltip inlineText="Superscript">Appears above the text <b>Example:</b></Tooltip>
    </div>
</div>
<div class="inputs">
    <textarea id="normaltext" bind:value={inputText} on:input={convertToSmallText} placeholder="Normal text"/>
    <!-- TODO add reversability, disabled for now  -->
    
    <p>-></p>
    <textarea placeholder="Small text">{convertedText}</textarea>
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