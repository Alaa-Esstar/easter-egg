var egg = new Egg("up,up,down,down,left,right,left,right,b,a", function () {
    alert("hello there");
}).listen();
$(function () {
    console.log("welcome")
    var today = new Date();
    // Regular days just use these emoji
    var possibleEmoji = [
        '🐹',
        '🐢',
        '🌼',
        '🍉'
    ];

    // Special emoji if close to Halloween
    if (today.getMonth() === 9 && [31, 30, 29, 28].indexOf(today.getDate()) !== -1) {
        possibleEmoji = [
            '👻',
            '🎃',
            '🧟‍♀️'
        ];
    }

    // Special emoji if close to Christmas
    if (today.getMonth() === 11 && [21, 22, 23, 24, 25, 26].indexOf(today.getDate()) !== -1) {
        possibleEmoji = [
            '❄️',
            '🎅',
            '🎁'
        ];
    }

    document.body.addEventListener('click', function (event) {
        /* 
         * generate random number that falls between 0 and the total number 
         * of emoji possibilities
         */
        var randomNumber = Math.round(Math.random() * possibleEmoji.length);

        var span = document.createElement('span');
        span.textContent = possibleEmoji[randomNumber];
        span.className = 'emoji click-emoji';
        /* 
         * event.clientX is where the mouse was horizontally at the time of 
         * the click. This way we can insert the emoji in the exact location 
         * the user clicked.
         */
        span.style.left = event.clientX + 'px';
        // event.clientY - same idea as clientX, but vertical position.
        span.style.top = event.clientY + 'px';
        /* Of course these values are useless if we don’t set the emoji's
         * position to something outside the normal flow of content. */
        span.style.position = 'fixed';
        document.body.appendChild(span);
    });


    document.addEventListener('keyup', function (event) {
        if (event.key === "c") { // c
            // Find all emoji elements that we want to sweep away
            var clickEmoji = document.getElementsByClassName('click-emoji');
            var totalEmoji = clickEmoji.length;

            /* If you want to support older browsers you may want to 
             * polyfill forEach https://caniuse.com/#search=foreach
             */
            Array.from(clickEmoji).forEach(function (emoji, index) {
                /*
                 * Change the animation delay to be random so that they fall off 
                 * at different times, not all at once
                 */
                document.body.removeChild(emoji);
            });
        }
    });

    var profileImage = document.createElement('img');
    profileImage.setAttribute('src', 'https://i.gifer.com/K958.gif');
    profileImage.classList.add('w-50');

    document.addEventListener('selectionchange', function () {
        var selection = document.getSelection();
        var selectedText = selection ? selection.toString() : null;

        // Warning for old browsers again: May want to polyfill https://caniuse.com/#search=includes
        if (['Transmission', 'taking control', 'Progression', 'Excessive Night Sweat', 'Blood'].includes(selectedText)) {
            // Add if you selected my name
            mainIntro = document.getElementById("selecim");
            mainIntro.appendChild(profileImage);
        } else if (profileImage.parentNode) {
            // Remove if you de-selected it
            mainIntro.removeChild(profileImage);
        }
    });


});

function egger() {
    if ($("#comment").val() == "sex education") {
        window.open("https://www.netflix.com/tn-fr/title/80197526", '_blank').focus();
    }
}

function easterEggConsole() {
    let messages = [
      "Dont forget to use condoms",
      "Use condoms for safe sex",
      "Having sex with a condom is like eating chocolate with the wrap on",
      "Safe sex is an act of self love",
      "Some people have contracted HIV during their separate endeavours to give someone or some people a curable STD.",
    ];
    var random = messages[Math.floor(Math.random() * messages.length)];
    return console.log("%c " + random, "background: #222; color: #bada55");
  }