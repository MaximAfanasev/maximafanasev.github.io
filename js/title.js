const textElement = document.getElementById('text');
const textToAnimate = "JAVASCRIPT";
let index = 0;

function animateText() {
  if (index < textToAnimate.length) {
    textElement.innerText += textToAnimate[index];
    index++;
    textElement.style.opacity = 1;
    setTimeout(animateText, 300);
  }
}

setTimeout(animateText, 3300);
