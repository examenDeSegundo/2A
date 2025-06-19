


function calcularResultado() {
  let total = 0;

  for (let i = 1; i <= 11; i++) {
    const respuesta = document.querySelector(`input[name="q${i}"]:checked`);
    if (respuesta && respuesta.value === "1") {
      total++;
    }
  }

  document.getElementById("resultado").textContent = `Tu resultado es: ${total} de 11 respuestas correctas.`;
  document.getElementById("cal").value = `${total > 10 ?  total - 1 : total }` ;
}





// window.addEventListener('DOMContentLoaded', () => {
//   const select = document.getElementById('eleccionDeNombre');
//   const resultado = document.getElementById('opcion');

//   select.addEventListener('change', () => {
//     const valorSeleccionado = select.value;
//     resultado.textContent = valorSeleccionado || "Ninguna";
//   });
// });




  window.addEventListener('DOMContentLoaded', () => {
  const selector = document.getElementById('eleccionDeNombre');
  const nombre = document.getElementById('texto');

  selector.addEventListener('change', () => {
    texto.value = selector.value;
  });
});