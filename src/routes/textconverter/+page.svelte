<script lang="ts">
    import BackToHomepage from '$lib/components/backToHomepage.svelte';
	import MoreInfo from '$lib/components/moreInfo.svelte';
	import Options from '$lib/components/options.svelte';

    var inputText = $state('');
    var outputText = $state('');
    let textType = $state(false);
    let scriptType = $state(2);
    let autoCopy = $state(true);

    const normalAlphabet = 'abcdefghijklmnopqrstuvwxyz*';
    const smallTextChars = 'ᴀʙᴄᴅᴇғɢʜɪᴊᴋʟᴍɴoᴘǫʀsᴛᴜᴠᴡxʏᴢ⋆';
    const altTextChars = 'ᴀʙᴄᴅᴇꜰɢʜɪᴊᴋʟᴍɴoᴘꞯʀsᴛᴜᴠᴡxʏᴢ⋆';

    const scriptChars = '0123456789+-=()';
    const superChars = '⁰¹²³⁴⁵⁶⁷⁸⁹⁺⁻⁼⁽⁾';
    const subChars = '₀₁₂₃₄₅₆₇₈₉₊₋₌₍₎';

    function convertText(toSmallText = true) {
        if (inputText == '') return;
        
        let preConvertedText = '';
        let apostrapheMatch, quotationMatch = false;

        const text = (toSmallText) ? inputText.toLowerCase() : outputText;
        
        // Get character type
        const chars = textType ? smallTextChars : altTextChars;
        const scriptTypeChars = (scriptType == 1) ? subChars : superChars;

        for (let i = 0; i < text.length; i++) {
            const char = text[i];

            // Convert to better apostraphes & quotes
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
<svelte:head>
	<title>Minecraft Small Text Converter - AmazinAxel's MC Tools</title>
</svelte:head>

<BackToHomepage/>
<h1>Minecraft Small Text Converter</h1>

<Options>
    <div style="height: 0.5rem;"></div>
    <label class="container">
        <input type="checkbox" bind:checked={textType} onchange={() => convertText()}>
        <span class="checkmark"></span>
        Use alternate text style
        <MoreInfo imgInfo>
            <img src="/media/tools/textconverter/texttypepreview.png" alt="Shows difference between the text type function" class="noImgStyle">
        </MoreInfo>
    </label>

    <br><br>
    <div style="display: flex; gap: 5px">
        <p>Subscript</p>
        <MoreInfo imgInfo>
            <img src="/media/tools/textconverter/subtext-demo.png" alt="Subscript text demo" class="noImgStyle">
        </MoreInfo>

        <!-- Slider -->
        <div class="slider_container">
            <input type="range" min="1" bind:value={scriptType} max="3" oninput={() => convertText()} id="scriptType">
        </div>

        <p>Superscript</p>
        <MoreInfo imgInfo>
            <img src="/media/tools/textconverter/supertext-demo.png" alt="Superscript text demo" class="noImgStyle">
        </MoreInfo>
    </div>
    <br>
    <label class="container">
        <input type="checkbox" bind:checked={autoCopy}>
        <span class="checkmark"></span>
        Auto copy small text on change
        <MoreInfo>This may spam your clipboard history</MoreInfo>
    </label>
</Options>

<br>

<div class="inputs">
    <textarea bind:value={inputText} oninput={() => convertText()} placeholder="Normal text"></textarea>
    <p>➡️</p>
    <textarea bind:value={outputText} oninput={() => convertText(false)} placeholder="Small text"></textarea>
</div>
