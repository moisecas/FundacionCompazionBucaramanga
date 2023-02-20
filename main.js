function enviarFormulario() {
    var nombre = document.getElementsByName("nombre")[0].value;
    var correo = document.getElementsByName("correo")[0].value;
    var telefono = document.getElementsByName("telefono")[0].value;
  
    var link = "moisesjuniorcas20@gmail.com" + 
               "?subject=" + encodeURIComponent("Nuevo mensaje de formulario") +
               "&body=" + encodeURIComponent("Nombre: " + nombre + "\nCorreo: " + correo + "\nTeléfono: " + telefono);
  
    window.location.href = link;
  }
  