// navigation
const menuBtn = document.querySelector('#hamburger');
const navigation = document.querySelector('.hero nav ul');

menuBtn.addEventListener('click', () =>{ navigation.classList.toggle('opened') });


// animation
const title = document.querySelector('h1');
const arrow = document.querySelector('.arrow');
const initialText = title.textContent; 
let index = 1;

function writeTitle(){
    title.textContent = initialText.slice(0, index);
    index++;

    if( index > initialText.length ){
        arrow.style.opacity = '1';
        return;
    }

    setTimeout(writeTitle, 120);
}

writeTitle();