(() => {
  const formulario = document.getElementById('formulario-contacto');
  const borrador = document.getElementById('borrador-contacto');

  formulario.addEventListener('submit', evento => {
    evento.preventDefault();
    const datos = new FormData(formulario);
    const asunto = datos.get('subject').trim();
    const mensaje = datos.get('message').trim().replace(/\r?\n/g, '\r\n');
    const firma = datos.get('name').trim() + ' <' + datos.get('email').trim() + '>';
    const cuerpo = mensaje + '\r\n\r\n' + firma;
    borrador.href = formulario.action + '?subject=' + encodeURIComponent(asunto) + '&body=' + encodeURIComponent(cuerpo);
    borrador.hidden = false;
    borrador.focus();
  });

  formulario.addEventListener('input', () => {
    borrador.hidden = true;
    borrador.removeAttribute('href');
  });
})();
