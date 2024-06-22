<script>
    let inputText = '';
    let textType = false;
    let selected = 0;

    const normalAlphabet = 'abcdefghijklmnopqrstuvwxyz';
    const smallTextChars = 'ᴀʙᴄᴅᴇꜰɢʜɪᴊᴋʟᴍɴᴏᴘꞯʀsᴛᴜᴠᴡxʏᴢ';
    const altTextChars = 'ᴀʙᴄᴅᴇғɢʜɪᴊᴋʟᴍɴᴏᴘǫʀsᴛᴜᴠᴡxʏᴢ';

    const scriptChars = '0123456789*+-=()';
    const superChars = '⁰¹²³⁴⁵⁶⁷⁸⁹*⁺⁻⁼⁽⁾';
    const subChars = '₁₂₃₄₅₆₇₈₉₊₋₌₍₎';

    $: convertedText = convertToSmallText(inputText);

    function convertToSmallText(text) {
        var text = text.toLowerCase(); // Convert text to lowercase
        let convertedText = '';

        // Get character type
        const chars = textType ? smallTextChars : altTextChars;

        /* todo add script type support */
        for (let i = 0; i < text.length; i++) {
            const char = text[i];
            const index = normalAlphabet.indexOf(char);

            // Set character and fall back if char is not found in list
            convertedText += (index !== -1) ? chars[index] : char;
        }
        return convertedText;
    }

    function openFuncPopup(event) {
        selected = parseInt(event.target.value);
        console.log(selected) // ai made this idek man
    }
    // todo maybe include ‘’“” somehow
</script>

<h1>Small Text Generator</h1>
<!-- use checked="checked" on the input tag to autocheck it (is name even needed)-->
<label class="container">
    <input type="checkbox" id="useDifferentText" name="useDifferentText" bind:checked={textType}>
    <span class="checkmark"></span>
    <div class="tooltip">Use alternate text style<span class="tooltiptext">Use a different text style where some characters look slightly different</span></div>
</label>

<input type="range" min="1" value="2" max="3" id="scriptType">
TOOLTIP: Subscript and superscript characters apply to numbers and basic math characters
<textarea id="normaltext" bind:value={inputText} on:input/>
<!-- TODO add reversability, disabled for now 
     TODO 2 turn tooltip into a component for reusability -->
<textarea disabled>{convertedText}</textarea>

<br>

<div class="info card">
    <p><b>NOTE:</b> This tool is not finished. Please report any bugs to @amazinaxel on Discord. Additionally, some features such as text reversability do not currently work.</p>
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