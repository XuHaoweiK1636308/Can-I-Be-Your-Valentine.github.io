function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const img = document.querySelector('img');

// GIF states (these files are in your repo ROOT)
const originalGif = "pleading-cat.gif";   // default
const cryingGif = "cat-crying.gif";       // hover NO
const loveGif = "img/love-cat.gif";       // hover YES (this one is inside /img)

function initialize() {
  const nonButton = document.getElementById('nonButton');
  const ouiButton = document.getElementById('ouiButton');

  // Hover YES → love cat
  ouiButton.addEventListener('mouseenter', () => {
    img.src = loveGif;
  });

  // Hover NO → crying cat
  nonButton.addEventListener('mouseenter', () => {
    img.src = cryingGif;
  });

  // Reset when leaving buttons
  ouiButton.addEventListener('mouseleave', () => {
    img.src = originalGif;
  });

  nonButton.addEventListener('mouseleave', () => {
    img.src = originalGif;
  });

  // Click NO → go to no.html
  nonButton.addEventListener('click', () => {
    window.location.href = "no.html";
  });
}

initialize();




