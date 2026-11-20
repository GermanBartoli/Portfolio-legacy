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

const fondoBienvenida = [];

function disableFocus() {
    const bienvenida = document.getElementById("mensaje");
    for (const elemento of document.body.children) {
        if (elemento === bienvenida || elemento.inert || elemento.matches("script, style, link")) continue;
        elemento.inert = true;
        fondoBienvenida.push(elemento);
    }
}

function restoreFocus() {
    for (const elemento of fondoBienvenida) elemento.inert = false;
    fondoBienvenida.length = 0;
    document.getElementById("mensaje").inert = true;
    const destino = document.getElementById(location.hash.slice(1));
    if (destino && destino.matches('main, section')) {
        destino.tabIndex = -1;
        destino.focus({ preventScroll: true });
        destino.scrollIntoView({ block: 'start', behavior: 'instant' });
    } else {
        document.querySelector(".salto-contenido").focus();
    }
}
