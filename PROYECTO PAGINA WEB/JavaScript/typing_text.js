const names = ["Jason Gonzalez","Jorge Ramos","Desarolladores"];
let currentIndex = 0;

function startTypingAnimation() {
  const typingText = document.querySelector('.typing-text');
  typingText.textContent = names[currentIndex];
  typingText.style.animation = 'none';
  void typingText.offsetWidth; // Reiniciar la animación
  typingText.style.animation = 'typing 1s steps(30, end), blink-caret 0.75s step-end infinite';

  currentIndex = (currentIndex + 1) % names.length;
}

setInterval(startTypingAnimation, 4000); // Cambiar el nombre cada 4 segundos