const app = document.getElementById('app');

const actividades = [
  "Suma: ¿Cuánto es 2 + 3?",
  "Resta: ¿Cuánto es 7 - 4?",
  "Multiplicación: ¿Cuánto es 3 x 2?",
  "División: ¿Cuánto es 10 / 2?",
  "Letra: ¿Cuál es la primera letra del abecedario?",
];

const opciones = [
  ["5", "4", "6"],
  ["2", "3", "4"],
  ["5", "6", "7"],
  ["3", "4", "5"],
  ["A", "B", "C"]
];

const respuestas = ["5", "3", "6", "5", "A"];

let index = 0;

function mostrarPregunta() {
  const pregunta = actividades[index];
  const opts = opciones[index];

  let html = `<h2>${pregunta}</h2>`;
  html += "<div>";
  opts.forEach((op) => {
    html += `<button onclick="verificar('${op}')">${op}</button> `;
  });
  html += "</div>";

  app.innerHTML = html;
}

window.verificar = function (opcion) {
  const correcta = respuestas[index];
  if (opcion === correcta) {
    app.innerHTML = `<p style='color:green;font-weight:bold;'>¡Correcto! 🎉</p><button onclick='siguiente()'>Siguiente</button>`;
  } else {
    app.innerHTML += `<p style='color:red;'>Incorrecto, intenta de nuevo.</p>`;
  }
};

window.siguiente = function () {
  index++;
  if (index < actividades.length) {
    mostrarPregunta();
  } else {
    app.innerHTML = "<h2>¡Felicitaciones! Terminaste todos los ejercicios.</h2>";
  }
};

mostrarPregunta();