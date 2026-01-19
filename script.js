function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// movement function can stay but won't be used
function moveNonButton() {}

const img = document.querySelector('img');
const originalGif = "img/cat-133_256.gif";

function initialize() {
    const nonButton = document.getElementById('nonButton');
    const ouiButton = document.getElementById('ouiButton');

    // Hover effects
    nonButton.addEventListener('mouseenter', () => {
        img.src = "img/cats-sad.gif";
    });

    ouiButton.addEventListener('mouseenter', () => {
        img.src = "img/love-cat.gif";
    });

    // Reset when mouse leaves buttons
    nonButton.addEventListener('mouseleave', () => {
        img.src = originalGif;
    });

    ouiButton.addEventListener('mouseleave', () => {
        img.src = originalGif;
    });

    // Click "No" → sad page
    nonButton.addEventListener('click', () => {
        window.location.href = "no.html";
    });
}

initialize();


