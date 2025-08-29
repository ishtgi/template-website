
const words = [ "template by ishtgi.", "you can change anything but try to credit me (optional).", "for github." ];
const speedWrite = 100;
const speedDelete = 50;
const pause = 1000;

const title = document.getElementById("animated-text");

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function type() {
  const currentWord = words[wordIndex];
  
  if (!deleting) {
    title.innerHTML = currentWord.slice(0, charIndex + 1);
    charIndex++;

    if (charIndex === currentWord.length) {
      deleting = true;
      setTimeout(type, pause);
      return;
    }
  } else {
    title.innerHTML = currentWord.slice(0, charIndex - 1);
    charIndex--;

    if (charIndex === 0) {
      deleting = false;
      wordIndex = (wordIndex + 1) % words.length;
    }
  }

  if (!deleting) {
    setTimeout(type, speedWrite);
  } else {
    setTimeout(type, speedDelete);
  }
}


type();
