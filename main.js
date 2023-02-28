function enviarFormulario() {
  // Obtenemos los valores de los inputs del formulario
  const nombre = document.querySelector('input[name="nombre"]').value;
  const correo = document.querySelector('input[name="correo"]').value;
  const telefono = document.querySelector('input[name="telefono"]').value;

  // Creamos un objeto con los datos del formulario
  const formData = {
    nombre: nombre,
    correo: correo,
    telefono: telefono,
  };

  // Enviamos los datos mediante la API Fetch de JavaScript
  fetch('https://formspree.io/f/xgebkqyz', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(formData)
  })
  .then(response => {
    if (response.ok) {
      // Si la respuesta es satisfactoria, mostramos un mensaje al usuario
      alert('Gracias por enviar el formulario!');
    } else {
      // Si hay un error, mostramos un mensaje de error
      alert('Hubo un error al enviar el formulario. Por favor, inténtalo de nuevo más tarde.');
    }
  })
  .catch(error => {
    // Si hay un error, mostramos un mensaje de error
    alert('Hubo un error al enviar el formulario. Por favor, inténtalo de nuevo más tarde.');
  });

  // Prevenimos que el formulario se envíe por defecto
  event.preventDefault();
}

  