<script>
	import Tooltip from '../tooltip.svelte';
	import Options from '../options.svelte';

    var inputText = $state();
    var outputText = $state();
    let textType = $state(false);
    let scriptType = $state(2);
    let autoCopy = $state(true);

    const normalAlphabet = 'abcdefghijklmnopqrstuvwxyz*';
    const smallTextChars = 'ᴀʙᴄᴅᴇꜰɢʜɪᴊᴋʟᴍɴoᴘꞯʀsᴛᴜᴠᴡxʏᴢ⋆';
    const altTextChars = 'ᴀʙᴄᴅᴇғɢʜɪᴊᴋʟᴍɴoᴘǫʀsᴛᴜᴠᴡxʏᴢ⋆';

    const scriptChars = '0123456789+-=()';
    const superChars = '⁰¹²³⁴⁵⁶⁷⁸⁹⁺⁻⁼⁽⁾';
    const subChars = '₀₁₂₃₄₅₆₇₈₉₊₋₌₍₎';

    function convertText(toSmallText = true) {
        if (typeof inputText == 'undefined') return;
        
        let preConvertedText = '';
        let apostrapheMatch, quotationMatch = false;

        const text = (toSmallText) ? inputText.toLowerCase() : outputText;
        
        // Get character type
        const chars = textType ? smallTextChars : altTextChars;
        const scriptTypeChars = (scriptType == 1) ? subChars : superChars;

        for (let i = 0; i < text.length; i++) {
            const char = text[i];

            // Convert to twirly apostraphes & quotes
            if (char == "'") {
                preConvertedText += (apostrapheMatch) ? '’' : '‘';
                apostrapheMatch = !apostrapheMatch;
            } else if (char == '"') {
                preConvertedText += (quotationMatch) ? '”' : '“';
                quotationMatch = !quotationMatch;
            } else {
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
                    };
                } else { // Convert small to normal large text
                    const index = chars.indexOf(char);
                    const scriptIndex = scriptTypeChars.indexOf(char);

                    if (scriptIndex !== -1) {
                        preConvertedText += scriptChars[scriptIndex];
                    } else {
                        preConvertedText += (index !== -1) ? 
                            normalAlphabet[index] : char;
                    };
                };
            };
        };

        (toSmallText) ? outputText = preConvertedText : inputText = preConvertedText;

        if (autoCopy) navigator.clipboard.writeText(outputText);
    }
</script>

<h1>Small Text Converter</h1>

<Options>
    <label class="container">
        <input type="checkbox" bind:checked={textType} onchange={convertText}>
        <span class="checkmark"></span>
        <Tooltip inlineText="Use alternate text style">
            Use a slightly different text charset
            <div class="seperator"></div>
            <img src="/media/tools/textconverter/texttypepreview.png" alt="Shows difference between the text type function" class="noImgStyle">
        </Tooltip>
    </label>

    <br><br>
    <div style="display: flex; gap: 5px">
        <Tooltip inlineText="Subscript" click={() => scriptType = 1}>
            Shown below the text
            <div style="height: 0.5rem;"></div>
            <img src="/media/tools/textconverter/subtext-demo.png" alt="Subscript text demo" class="noImgStyle">
        </Tooltip>

        <!-- Slider -->
        <div class="slider_container" style="margin-left: 8px">
            <input type="range" min="1" bind:value={scriptType} max="3" oninput={convertText} id="scriptType">
        </div>

        <Tooltip inlineText="Superscript" click={() => scriptType = 3}>
            Shown above the text
            <div style="height: 0.5rem;"></div>
            <img src="/media/tools/textconverter/supertext-demo.png" alt="Superscript text demo" class="noImgStyle">
        </Tooltip>
    </div>
    <br>
    <label class="container">
        <input type="checkbox" bind:checked={autoCopy}>
        <span class="checkmark"></span>
        <Tooltip inlineText="Auto copy text on change">
            Whether to automatically copy small text when new text is entered - this may spam your clipboard!
        </Tooltip>
    </label>
</Options>

<br>

<div class="inputs">
    <textarea bind:value={inputText} oninput={convertText} placeholder="Normal text"></textarea>
    <p>➡️</p>
    <textarea bind:value={outputText} oninput={() => convertText(false)} placeholder="Small text"></textarea>
</div>