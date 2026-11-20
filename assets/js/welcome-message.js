function aceptarBtnBienvenida(event) {
    enableScroll();
    // Agrega la clase 'oculto' al div para animar su ocultación
    document.getElementById("mensaje").classList.add("oculto");

    restoreFocus(); // Restaurar foco después de hacer clic


    document.getElementById("aHome").classList.remove("disabled-link");
    document.getElementById("aAbout").classList.remove("disabled-link");
    document.getElementById("aResume").classList.remove("disabled-link");
    document.getElementById("aSkills").classList.remove("disabled-link");
    document.getElementById("aPortfolio").classList.remove("disabled-link");
    document.getElementById("aContact").classList.remove("disabled-link");

    var mensaje = document.getElementById('mensaje');
    var elementosHijosDivMensaje = mensaje.querySelectorAll('*'); // Seleccionar todos los elementos hijos

    elementosHijosDivMensaje.forEach(function (elemento) {
        elemento.style.pointerEvents = 'none'; // Deshabilitar elementos hijos
    });

}

const allFocusableElements = document.querySelectorAll('button, [href], input, select, textarea, audio[controls]');
const originalTabIndices = new Map();

// Función para deshabilitar el foco
function disableFocus() {
    allFocusableElements.forEach(element => {
        if (element.id !== "aceptarBtnBienvenida") { // Ignorar el botón específico
            originalTabIndices.set(element, element.getAttribute("tabindex")); // Guardar el tabindex original
            element.tabIndex = -1; // Deshabilitar el foco
        }
    });

    //const aceptarBtn = document.getElementById("aceptarBtnBienvenida"); // Obtener el botón específico
    //if (aceptarBtn) {
    //    aceptarBtn.tabIndex = 0; // Asegurarse de que el botón pueda recibir foco
    //    aceptarBtn.focus(); // Enfocar el botón específico
    //}
}

// Función para restaurar el foco
function restoreFocus() {
    for (const [elemento, indice] of originalTabIndices) {
        if (indice === null) elemento.removeAttribute("tabindex");
        else elemento.setAttribute("tabindex", indice);
    }
    document.querySelector(".salto-contenido").focus();

    const aceptarBtn = document.getElementById("aceptarBtnBienvenida"); // Obtener el botón específico
    if (aceptarBtn) {
        aceptarBtn.tabIndex = -1; // Deshabilitar el foco en el botón
    }

}

// evitar focus iframe
const iframeGoogleMaps = document.querySelector('iframeGoogleMaps');
iframeGoogleMaps.addEventListener('focus', (event) => {
    event.preventDefault();
    //document.querySelector('#otro-elemento').focus(); // Cambia '#otro-elemento' al selector del elemento que deseas enfocar
});

