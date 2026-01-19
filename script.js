function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const img = document.querySelector("img");

const originalGif = "./pleading-cat.gif";   // default / pleading
const sadGif = "./cat-crying.gif";           // hover NO
const loveGif = "img/cat-cats.gif";          // hover YES (UPDATED)

const nonButton = document.getElementById("nonButton");
const ouiButton = document.getElementById("ouiButton");

if (ouiButton) {
    ouiButton.addEventListener("mouseenter", () => {
        img.src = loveGif;
    });
    ouiButton.addEventListener("mouseleave", () => {
        img.src = originalGif;
    });
}

if (nonButton) {
    nonButton.addEventListener("mouseenter", () => {
        img.src = sadGif;
    });
    nonButton.addEventListener("mouseleave", () => {
        img.src = originalGif;
    });
    nonButton.addEventListener("click", () => {
        window.location.href = "no.html";
    });
}







