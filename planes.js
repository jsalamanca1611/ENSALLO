/* ============================================================
   PLANES.JS — Modal del formulario de contacto
   Solo hace dos cosas: abrir y cerrar el modal.
   ============================================================ */

const fondoModal = document.getElementById("fondo-modal");
const nombrePlan = document.getElementById("nombre-plan");

// Abre el modal y escribe el nombre del plan elegido
function abrirFormulario(plan) {
  nombrePlan.textContent = plan;
  fondoModal.classList.add("visible");
}

// Cierra el modal
function cerrarFormulario() {
  fondoModal.classList.remove("visible");
}
