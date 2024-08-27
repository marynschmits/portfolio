document.addEventListener('DOMContentLoaded', function() {
    

    // Dynamic text typing
    const topTextElement = document.getElementById('dynamic-text-top');
    const bottomTextElement = document.getElementById('dynamic-text-bottom');

    const topWords = ['Maryn', 'Designer', 'Developer'];
    const bottomWords = ['create', 'design', 'learn', 'grow'];

    let topIndex = 0;
    let bottomIndex = 0;
    let topCharIndex = 0;
    let bottomCharIndex = 0;

    const typeSpeed = 100; // Adjust typing speed in milliseconds
    const deleteSpeed = 100; // Adjust deleting speed in milliseconds
    const pauseTime = 400; // Time to pause before typing the next word

    const typeEffect = (element, words, index, charIndex, callback) => {
        if (charIndex < words[index].length) {
            element.textContent += words[index].charAt(charIndex);
            charIndex++;
            setTimeout(() => typeEffect(element, words, index, charIndex, callback), typeSpeed);
        } else {
            setTimeout(() => deleteEffect(element, words, index, charIndex, callback), pauseTime);
        }
    };

    const deleteEffect = (element, words, index, charIndex, callback) => {
        if (charIndex > 0) {
            element.textContent = element.textContent.substring(0, charIndex - 1);
            charIndex--;
            setTimeout(() => deleteEffect(element, words, index, charIndex, callback), deleteSpeed);
        } else {
            callback();
        }
    };

    const startTyping = () => {
        typeEffect(topTextElement, topWords, topIndex, 0, () => {
            topIndex = (topIndex + 1) % topWords.length;
            typeEffect(bottomTextElement, bottomWords, bottomIndex, 0, () => {
                bottomIndex = (bottomIndex + 1) % bottomWords.length;
                setTimeout(startTyping, pauseTime);
            });
        });
    };

    startTyping();

    // Contact form submission
    const form = document.getElementById('contact-form');
    const responseMessage = document.getElementById('response-message');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const formData = new FormData(form);
        const data = {};
        formData.forEach((value, key) => {
            data[key] = value;
        });

        setTimeout(() => {
            console.log('Form data:', data);

            responseMessage.textContent = 'Bedankt voor je bericht!';
            responseMessage.style.color = '#B8EE20';
            responseMessage.style.display = 'block';
            responseMessage.style.fontFamily = 'Kayak Sans';
            responseMessage.style.fontSize = '1.5rem';

            form.reset();
        }, 500);
    });

    /// script.js

function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

document.addEventListener('scroll', function() {
    const specialSections = document.querySelectorAll('.grid-container-intro');
    const flagContainer = document.getElementById('flag-container');
    
    specialSections.forEach(section => {
        if (isElementInViewport(section)) {
            const numberOfFlags = 1; // Aantal vlaggetjes dat je per scroll wilt toevoegen

            for (let i = 0; i < numberOfFlags; i++) {
                let flag = document.createElement('img');
                flag.src = 'assets/nl-cursor.png';  // Vervang met het juiste pad naar je afbeelding
                flag.className = 'flag';

                // Plaats de vlag op een willekeurige positie
                flag.style.left = Math.random() * window.innerWidth + 'px';
                flag.style.top = Math.random() * window.innerHeight + 'px';

                flagContainer.appendChild(flag);

                // Verwijder de vlag na een tijdje
                setTimeout(() => {
                    flag.remove();
                }, 3000);
            }
        }
    });
});


    // Slideshow initialization
    function initializeSlides() {
        let slideshowContainers = document.querySelectorAll(".slideshow-container");

        slideshowContainers.forEach(container => {
            let slideIndex = 0;
            let slides = container.getElementsByClassName("slide");

            function showSlides() {
                for (let j = 0; j < slides.length; j++) {
                    slides[j].style.display = "none";  // Verberg alle slides
                }

                slideIndex++;
                if (slideIndex > slides.length) {
                    slideIndex = 1;  // Herstel index als nodig
                }

                slides[slideIndex - 1].style.display = "block";  // Toon de huidige slide
                slides[slideIndex - 1].classList.add('fade');  // Voeg fade-animatie toe

                setTimeout(showSlides, 3000);  // Verander de slide elke 2 seconden
            }

            showSlides();  // Start de slideshow voor deze container
        });
    }

    initializeSlides();  // Initialiseer alle slideshows


    // script.js

function animateNumbers(element, target) {
    let start = 0;
    const duration = 2000; // Duur van de animatie in milliseconden
    const increment = target / (duration / 16); // Bereken de toename per frame

    function updateNumber() {
        start += increment;
        if (start < target) {
            element.textContent = Math.floor(start);
            requestAnimationFrame(updateNumber);
        } else {
            element.textContent = target;
        }
    }

    updateNumber();
}

// Gebruik de IntersectionObserver API
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const element = entry.target;
            const target = parseInt(element.getAttribute('data-target'));
            animateNumbers(element, target);
        }
    });
});

// Observeer alle getallen in de grid-container-stats
const counters = document.querySelectorAll('.grid-item-stats h2');
counters.forEach(counter => {
    observer.observe(counter);
});


document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Voorkom de standaard formulieractie


});
});
