/* script.js */

document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navList = document.querySelector('.nav-list');

    menuToggle.addEventListener('click', function() {
        navList.classList.toggle('active');
    });
});

const words = ["Maryn", "Designer", "Developer"]; // Array met woorden die je wilt laten verschijnen
const speed = 200; // Snelheid van het typen (in milliseconden)
const container = document.getElementById("dynamic-text");

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeWord() {
    const currentWord = words[wordIndex];
    if (!isDeleting && charIndex < currentWord.length) {
        container.innerHTML += currentWord.charAt(charIndex);
        charIndex++;
        setTimeout(typeWord, speed);
    } else if (isDeleting && charIndex > 0) {
        container.innerHTML = currentWord.substring(0, charIndex - 1);
        charIndex--;
        setTimeout(typeWord, speed / 2);
    } else {
        isDeleting = !isDeleting;
        if (isDeleting) {
            setTimeout(typeWord, speed / 2);
        } else {
            wordIndex = (wordIndex + 1) % words.length;
            setTimeout(typeWord, speed);
        }
    }
}

typeWord();
