document.addEventListener('DOMContentLoaded', function() {
    // Menu toggle voor mobiele weergave
    const menuToggle = document.querySelector('.menu-toggle');
    const navList = document.querySelector('.nav-list');

    menuToggle.addEventListener('click', function() {
        navList.classList.toggle('active');
    });

    // Dynamische tekst animatie
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

    // Formulierverzending
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

    // Dark mode toggle
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

    // Datepicker functionaliteit
    const datepicker = flatpickr("#inline-datepicker", {
        dateFormat: "Y-m-d",
        inline: true // Maakt de datepicker altijd zichtbaar
    });

    document.getElementById("submitBtn").addEventListener("click", function() {
        const selectedDate = datepicker.selectedDates[0];
        if (selectedDate) {
            alert("Je afspraak voor " + selectedDate.toLocaleDateString() + " is bevestigd!");
        } else {
            alert("Selecteer een datum voordat je verzendt.");
        }
    });

    // Pop-up functionaliteit
    const workItems = document.querySelectorAll('.grid-item-work');
    const closeButtons = document.querySelectorAll('.close-btn');

    workItems.forEach(item => {
        item.addEventListener('click', function() {
            const popupSelector = item.getAttribute('data-popup-target');
            const popup = document.querySelector(popupSelector);
            if (popup) {
                popup.style.display = 'block';
            } else {
                console.error('Popup not found:', popupSelector);
            }
        });
    });

    closeButtons.forEach(button => {
        button.addEventListener('click', function() {
            const popup = button.closest('.popup');
            if (popup) {
                popup.style.display = 'none';
            } else {
                console.error('Popup container not found for button:', button);
            }
        });
    });

    window.addEventListener('click', function(event) {
        if (event.target.classList.contains('popup')) {
            event.target.style.display = 'none';
        }
    });
});


document.addEventListener('DOMContentLoaded', function() {
    // Get video element and custom controls
    var videoElement = document.getElementById('unseen-world-video');
    var playButton = document.getElementById('play-button');
    var pauseButton = document.getElementById('pause-button');
    var fastForwardButton = document.getElementById('fast-forward-button');

    // Play video function
    function playVideo() {
        videoElement.play();
    }

    // Pause video function
    function pauseVideo() {
        videoElement.pause();
    }

    // Fast forward video function (10 seconds)
    function fastForwardVideo() {
        videoElement.currentTime += 10;
    }

    // Event listeners for buttons
    playButton.addEventListener('click', playVideo);
    pauseButton.addEventListener('click', pauseVideo);
    fastForwardButton.addEventListener('click', fastForwardVideo);
});




