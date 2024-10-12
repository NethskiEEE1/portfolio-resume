// Vanilla Js
const dynamicsText = document.querySelector(".animated-text span")
const words = ["-Innovation", "-Security", "-Scalability", "-Progress", "-Techniques"];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typeEffect = () => {
    const currentWord = words[wordIndex]
    const currentChar = currentWord.substring(0, charIndex);
    dynamicsText.textContent = currentChar ;


    if(!isDeleting && charIndex < currentWord.length) {
        // If condition is true, type the next character
        charIndex++;
        setTimeout(typeEffect, 300);
    }else if(isDeleting && charIndex > 0){
        // If condition is true, remove the previous character
        charIndex--;
        setTimeout(typeEffect, 100);
    }else{
        //If word is deleted then switch to the next word
        isDeleting = !isDeleting;
        wordIndex = !isDeleting ? (wordIndex + 1) % words.length : wordIndex;
        setTimeout(typeEffect, 1200);
    }
}

typeEffect(); 