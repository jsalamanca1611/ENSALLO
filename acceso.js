/* ============================================================
   ACCESO.JS — Muestra "Iniciar sesión" o "Registrarse"
   según la dirección de la página (#sesion / #registro).
   Los botones (pestañas y menú) solo cambian la dirección;
   esta función reacciona a ese cambio.
   ============================================================ */

const formSesion      = document.getElementById("form-sesion");
const formRegistro    = document.getElementById("form-registro");
const pestanaSesion   = document.getElementById("pestana-sesion");
const pestanaRegistro = document.getElementById("pestana-registro");

function actualizarVista() {
  // ¿La dirección termina en #registro?
  const esRegistro = window.location.hash === "#registro";

  // Muestra un formulario y oculta el otro
  formRegistro.classList.toggle("oculto", !esRegistro);
  formSesion.classList.toggle("oculto", esRegistro);

  // Resalta la pestaña activa para que se vea dónde estás
  pestanaRegistro.classList.toggle("pestana-activa", esRegistro);
  pestanaSesion.classList.toggle("pestana-activa", !esRegistro);
}

// Se ejecuta al cargar la página y cada vez que cambia la dirección
actualizarVista();
window.addEventListener("hashchange", actualizarVista);
