const textToType = "Bharat's tour & Travels";

const typingSpeed = 50; // Adjust typing speed (lower is faster)
const pauseBetweenPhases = 1000; // Pause time between typing and decrementing

const typingTextElement = document.getElementById("typing-text");

function autoTypeAndDecrement(text, element) {
  let isTypingPhase = true;
  let charIndex = 0;
  element.textContent = "";

  function type() {
    if (charIndex < text.length) {
      element.textContent += text.charAt(charIndex);
      charIndex++;
      setTimeout(type, typingSpeed);
    } else {
      setTimeout(switchPhase, pauseBetweenPhases);
    }
  }

  function decrement() {
    if (charIndex > 0) {
      element.textContent = text.substring(0, charIndex - 1);
      charIndex--;
      setTimeout(decrement, typingSpeed);
    } else {
      setTimeout(switchPhase, pauseBetweenPhases);
    }
  }

  function switchPhase() {
    isTypingPhase = !isTypingPhase;
    if (isTypingPhase) {
      type();
    } else {
      decrement();
    }
  }

  switchPhase(); 
}

autoTypeAndDecrement(textToType, typingTextElement);


