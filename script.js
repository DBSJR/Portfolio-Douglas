document.addEventListener("DOMContentLoaded", function () {
  const textElement = document.getElementById("typed-text");
  const text = "Sejam Bem-Vindos Ao Meu Portfólio...";
  let index = 0;
  let isDeleting = false;

  function type() {
    if (index < text.length && !isDeleting) {
      textElement.textContent += text.charAt(index);
      index++;
      setTimeout(type, 100);
    } else if (isDeleting && index >= 0) {
      textElement.textContent = text.substring(0, index);
      index--;
      setTimeout(type, 50);
    } else {
      isDeleting = !isDeleting;
      setTimeout(type, 1000); // Tempo de espera antes de reiniciar
    }
  }

  type();
});
