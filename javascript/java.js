document.addEventListener('DOMContentLoaded', function() {
    // Event Delegation for Menu Toggle
    document.body.addEventListener('click', function(event) {
        if (event.target.matches('.menu-toggle')) {
            const navList = document.querySelector('.nav-list');
            navList.classList.toggle('active');
        }
    });

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

    // Date Picker submit event with Event Delegation
    document.body.addEventListener('click', function(event) {
        if (event.target.matches("#submitBtn")) {
            const selectedDate = datepicker.selectedDates[0];
            if (selectedDate) {
                alert("Je afspraak voor " + selectedDate.toLocaleDateString() + " is bevestigd!");
            } else {
                alert("Selecteer een datum voordat je verzendt.");
            }
        }
    });

});
