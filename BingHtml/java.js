const filas = 9;
const columnas = 10;
const tabla = document.getElementById("tabla");
h = 0;

for (let i = 0; i < filas; i++) {
  const fila = document.createElement("tr");
  for (let j = 0; j < columnas; j++) {
    const celda = document.createElement("td");
    h = h + 1;
    celda.dataset.valor = h;
    celda.textContent = "";
    celda.addEventListener("click", () => {
      celda.textContent = celda.dataset.valor;
    });
    fila.appendChild(celda);
  }
  tabla.appendChild(fila);
}

const input = document.getElementById("inputNumero");

input.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    const numero = input.value.trim();
    if (!numero) return;

    const celda = document.querySelector(`td[data-valor='${numero}']`);
    if (celda) {
      celda.textContent = numero;
    } else {
      alert("Número fuera de rango o no válido.");
    }

    input.value = ""; // limpiar input después de usarlo
  }
});