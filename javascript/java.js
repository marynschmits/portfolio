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


// script.js

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contact-form');
    const responseMessage = document.getElementById('response-message');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Voorkom standaard formulierverzending

        const formData = new FormData(form);
        const data = {};
        formData.forEach((value, key) => {
            data[key] = value;
        });

        // Simuleer een AJAX-verzoek
        setTimeout(() => {
            // Hier zou je de gegevens naar je server sturen
            console.log('Form data:', data);

            // Simuleer een succesvolle reactie
            responseMessage.textContent = 'Bedankt voor je bericht!';
            responseMessage.style.color = '#B8EE20';
            responseMessage.style.display = 'block';
            responseMessage.style.fontFamily = 'Kayak Sans';
            responseMessage.style.fontSize = '1.5rem';

            // Reset het formulier
            form.reset();
        }, 500);
    });


    
});




document.addEventListener('DOMContentLoaded', function() {
    const checkbox = document.querySelector('.toggle-checkbox');
  
    checkbox.addEventListener('change', function() {
      if (this.checked) {
        // Zet dark mode aan
        document.documentElement.classList.add('dark');
      } else {
        // Zet dark mode uit
        document.documentElement.classList.remove('dark');
      }
    });
  });
  
  
  
 





