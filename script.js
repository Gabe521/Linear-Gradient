const colorOutput = document.getElementById('color-output');
let color1 = document.getElementById('color1');
let color2 = document.getElementById('color2');
const body = document.getElementById('gradient');
const randomColor = document.getElementById('random-color');
const copyButton = document.getElementById('copy-button');

// Copy linear gradient output text
let selectText = (colorOutput) => {
    var node = document.getElementById( colorOutput );
    if ( document.selection ) {
        var range = document.body.createTextRange();
        range.moveToElementText( node  );
        range.select();
    } else if ( window.getSelection ) {
        var range = document.createRange();
        range.selectNodeContents( node );
        window.getSelection().removeAllRanges();
        window.getSelection().addRange( range );
    }
}

// Generate a random 6-digit color hex code
let generateColor = () => {
    // Set the avalaible characters for the hex code
    let hexString = "0123456789abcdef";
    let hexCode = '#';
    for (i = 0; i < 6; i++) {
        hexCode += hexString[Math.floor(Math.random() * hexString.length)];
    }
    return hexCode;
}

// Generate and apply a random color gradient
const generateRandomGradient = () => {
    color1.value = generateColor();
    color2.value = generateColor();
    setGradient();
}

// Set the background gradient and display RGB output
let setGradient = () => {
    body.style.background = 'linear-gradient(to right, ' + color1.value + ',' + color2.value + ')';
    colorOutput.textContent = body.style.background + ';';
}

setGradient();

// Event Listeners
color1.addEventListener('input', setGradient);
color2.addEventListener('input', setGradient);
randomColor.addEventListener('click', generateRandomGradient);
copyButton.addEventListener('click', selectText);