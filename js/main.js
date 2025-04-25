// ——————————————
// 1) Carrusel sencillo
// ——————————————
let idx = 0;
const slides = document.querySelector('.slides');
const total = slides ? slides.children.length : 0;
const btnNext = document.getElementById('next');
const btnPrev = document.getElementById('prev');

if (btnNext && slides) {
  btnNext.addEventListener('click', () => {
    idx = (idx + 1) % total;
    slides.style.transform = `translateX(-${idx * 100}%)`;
  });
}

if (btnPrev && slides) {
  btnPrev.addEventListener('click', () => {
    idx = (idx - 1 + total) % total;
    slides.style.transform = `translateX(-${idx * 100}%)`;
  });
}


// ——————————————
// 2) Validación y envío de formulario
// ——————————————
const form = document.getElementById('form-registro');
const mensaje = document.getElementById('mensaje');

if (form) {
  form.addEventListener('submit', function(e) {
    e.preventDefault();

    // 2.1 Validación nativa HTML5
    if (!form.checkValidity()) {
      form.reportValidity();
      mensaje.style.color = '#c00';
      mensaje.textContent = 'Por favor completa todos los campos obligatorios.';
      return;
    }

    // 2.2 Validar al menos un checkbox
    const checkboxes = form.querySelectorAll('input[name="conf"]');
    const anyChecked = Array.from(checkboxes).some(c => c.checked);
    if (!anyChecked) {
      mensaje.style.color = '#c00';
      mensaje.textContent = 'Selecciona al menos una conferencia.';
      return;
    }

    // 2.3 Éxito
    mensaje.style.color = '#0199a7';
    mensaje.textContent = '¡Registro enviado con éxito!';
    form.reset();
  });
}
