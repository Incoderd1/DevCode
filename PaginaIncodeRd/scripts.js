// Cambiar texto dinámico en el hero section
const dynamicText = document.getElementById("dynamic-text");
const textArray = [
  "Desarrollo de Software Profesional",
  "Desarrollo de Software Seguro",
  "Soluciones de Software Innovadoras",
];
let index = 0;

setInterval(() => {
  index = (index + 1) % textArray.length;
  dynamicText.textContent = textArray[index];
}, 3000); // Cambia cada 3 segundos

// Manejo del formulario de contacto y envío a WhatsApp
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  // Obtener los valores del formulario
  const nombre = document.getElementById("nombre").value;
  const email = document.getElementById("email").value;
  const mensaje = document.getElementById("mensaje").value;

  // Crear el texto del mensaje
  const textoMensaje = `Hola, soy ${nombre}. Mi correo es ${email}. Mensaje: ${mensaje}`;

  // Convertir el texto a formato URL
  const textoCodificado = encodeURIComponent(textoMensaje);

  // Número de WhatsApp al que deseas enviar el mensaje (incluyendo código de país, sin el +)
  const numeroWhatsApp = "8493153395";

  // Redirigir a WhatsApp Web con el mensaje
  window.open(
    `https://wa.me/${numeroWhatsApp}?text=${textoCodificado}`,
    "_blank"
  );
});
