
let mainTitle = document.querySelector('h1');
let subTitle = document.querySelector('h2');
let mainTitleText = mainTitle.innerHTML;

mainTitle.innerHTML = 'Hello World!';
mainTitle.style.color = 'red';

subTitle.innerHTML = mainTitleText;


//callback function

mainTitle.click = function() {
    alert('Hello World!');
}

