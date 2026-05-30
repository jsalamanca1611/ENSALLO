/* ============================================================
   APP.JS — Carrusel de planes de la página de inicio
   Muestra una tarjeta a la vez y cambia la imagen del cofre
   con un pequeño desvanecido.
   ============================================================ */

// Elementos que vamos a usar
const tarjetas = document.querySelectorAll(".tarjeta-plan");
const puntos   = document.querySelectorAll(".punto");
const cofre    = document.getElementById("imagen-cofre");

// Una imagen de cofre por cada plan (en el mismo orden que las tarjetas)
const imagenesCofre = [
  "https://jps-dev.sirv.com/Images/image_1__1_-removebg-preview.png",
  "https://jps-dev.sirv.com/Images/Gemini_Generated_Image_b4kniqb4kniqb4kn-removebg-preview.png",
  "https://jps-dev.sirv.com/Images/Gemini_Generated_Image_vucb5hvucb5hvucb-removebg-preview.png"
];

// Número del plan que se está mostrando (0 = el primero)
let planActual = 0;

// Muestra el plan indicado y oculta los demás
function mostrarPlan(numero) {
  // Si el número se sale del rango, vuelve al inicio o al final
  planActual = (numero + tarjetas.length) % tarjetas.length;

  // Activa solo la tarjeta y el punto elegidos
  tarjetas.forEach((tarjeta, i) => {
    tarjeta.classList.toggle("tarjeta-activa", i === planActual);
    puntos[i].classList.toggle("punto-activo", i === planActual);
  });

  // Oculta el cofre, lo cambia y deja que reaparezca al cargar la nueva imagen
  cofre.style.opacity = "0";
  cofre.src = imagenesCofre[planActual];
}

// Cuando la nueva imagen termina de cargar, el cofre vuelve a aparecer
cofre.addEventListener("load", () => { cofre.style.opacity = "1"; });

// Botones de flecha:  -1 = anterior  |  1 = siguiente
function cambiarPlan(direccion) {
  mostrarPlan(planActual + direccion);
}
