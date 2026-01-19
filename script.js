const img = document.querySelector("img");

// ✅ Always reset to whatever the page originally loaded
const originalGif = img.getAttribute("src");

// Hover GIFs (match your repo layout)
const sadGif  = "./cat-crying.gif";      // repo root
const loveGif = "img/cat-cats.gif";      // img folder

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








