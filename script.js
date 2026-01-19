function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// movement function can stay but won't be used
function moveNonButton() {}

function initialize() {
    // ❌ movement disabled
    // document.getElementById('nonButton').addEventListener('mouseenter', moveNonButton);
    // window.addEventListener('resize', moveNonButton);

    // ✅ image hover effects stay
    document.getElementById('nonButton').addEventListener('mouseenter', function() {
        img.src = 'img/cats-sad.gif';
    });

    document.getElementById('ouiButton').addEventListener('mouseenter', function() {
        img.src = 'img/love-cat.gif';
    });

    // ✅ click "No" → go to sad page
    document.getElementById('nonButton').addEventListener('click', function() {
        window.location.href = "no.html";
    });
}

const img = document.querySelector('img');
initialize();

