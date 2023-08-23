const toggleButtons = document.querySelectorAll('.toggle-button');
const contents = document.querySelectorAll('.content');

toggleButtons.forEach(button => {
  button.addEventListener('click', () => {
    const targetId = button.getAttribute('data-target');
    const targetContent = document.getElementById(targetId);

    contents.forEach(content => {
      if (content !== targetContent) {
        content.classList.remove('show-content');
      }
    });

    targetContent.classList.toggle('show-content');

    contents.forEach(content => {
      if (content !== targetContent) {
        const correspondingButton = document.querySelector(`[data-target="${content.id}"]`);
        correspondingButton.textContent = 'Mostrar Contenido';
      }
    });

    if (targetContent.classList.contains('show-content')) {
      button.textContent = 'Ocultar Contenido';
    } else {
      button.textContent = 'Mostrar Contenido';
    }
  });
});