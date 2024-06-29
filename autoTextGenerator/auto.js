let typeText = document.querySelector(".type-text");

// const words = ["awesome", "intelligent", "dynamic", "responsive", "fast", "efficient", "easy", "powerful", "user-friendly", "cool", "fun", "inspiring", "relaxing", "creative", "entertaining", "vibrant", "colorful", "clever", "creative", "imaginative", "bold", "confident", "determined", "resilient", "brave", "courage"]

const words = ["awesome", "intelligent", "dynamic", "responsive", "fast", "efficient", "easy"]
const typingDelay = 200;
const erassingDelay = 200;
const newLetterDelay = 2000;

let wordIndex = 0;
let charIndex = 0;

document.addEventListener("DOMContentLoaded", () => {
    if (words.length) {
        setTimeout(type, newLetterDelay)
    }
})

function type() {
    if (charIndex < words[wordIndex].length) {
        typeText.textContent += words[wordIndex].charAt(charIndex)
        charIndex++;
        setTimeout(type, typingDelay);
    } else {
        setTimeout(erase, newLetterDelay)
    }
}

function erase() {
    if (charIndex > 0) {
        typeText.textContent = words[wordIndex].substring(0, charIndex - 1)
        charIndex--;
        setTimeout(erase, erassingDelay)
    } else {
        wordIndex++;
        if (wordIndex >= words.length) {
            wordIndex = 0;
        }
        setTimeout(type, typingDelay + 1100)
    }
}
