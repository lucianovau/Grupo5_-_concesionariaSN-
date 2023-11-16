// script.js
document.addEventListener('DOMContentLoaded', function () {
    const showPopupButton = document.getElementById('show-popup-btn');
    const closePopupButton = document.getElementById('close-popup-btn');
    const popupContainer = document.getElementById('popup-container');
    const contactLink = document.getElementById('contact-link'); // Selecciona el enlace por su identificador

    showPopupButton.addEventListener('click', () => {
        popupContainer.style.display = 'block';
    });

    closePopupButton.addEventListener('click', () => {
        popupContainer.style.display = 'none';
    });

    // Agregar evento de clic al enlace "Contacto"
    contactLink.addEventListener('click', (event) => {
        event.preventDefault(); // Para evitar que el enlace se abra directamente
        popupContainer.style.display = 'block';
    });

    // Si deseas también puedes agregar funcionalidad para enviar el formulario, por ejemplo, mediante AJAX.
    const contactForm = document.getElementById('contact-form');

    contactForm.addEventListener('submit', (event) => {
        event.preventDefault();
        // Aquí puedes agregar el código para enviar los datos del formulario.
    });

});
