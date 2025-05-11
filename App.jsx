import React from "react";

function ImagenEjercicio({ imagenSrc, pregunta, opciones, respuestaCorrecta }) {
  const [respuesta, setRespuesta] = React.useState(null);
  const [resultado, setResultado] = React.useState(null);

  const verificar = () => {
    setResultado(respuesta === respuestaCorrecta);
  };

  return (
    <div style={{ border: "1px solid #ccc", padding: "1rem", margin: "1rem 0", borderRadius: "10px" }}>
      <img src={imagenSrc} alt="Ejercicio visual" style={{ maxWidth: "200px", marginBottom: "1rem" }} />
      <p><strong>{pregunta}</strong></p>
      <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
        {opciones.map((op, idx) => (
          <button key={idx} onClick={() => setRespuesta(op)}>{op}</button>
        ))}
      </div>
      <div style={{ marginTop: "1rem" }}>
        <button onClick={verificar}>Verificar</button>
        {resultado !== null && (
          <p style={{ fontWeight: "bold", color: resultado ? "green" : "red" }}>
            {resultado ? "¡Correcto!" : "Intenta de nuevo"}
          </p>
        )}
      </div>
    </div>
  );
}

export default function App() {
  return (
    <div style={{ padding: "1rem" }}>
      <h1>📘 App Escolar de Brandon</h1>

      {"ABCDEFGHIJKLMNÑOPQRSTUVWXYZ".split("").map((letra, i) => (
        <ImagenEjercicio
          key={`abecedario-${i}`}
          imagenSrc="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Abecedario_completo.png/640px-Abecedario_completo.png"
          pregunta={`¿Cuál es esta letra? (posición ${i + 1})`}
          opciones={[letra, i + 1 < 27 ? "Z" : "A", "M"]}
          respuestaCorrecta={letra}
        />
      ))}

      {[...Array(10)].map((_, i) => (
        [...Array(10)].map((_, j) => {
          const a = i + 1;
          const b = j + 1;
          const resultado = a * b;
          return (
            <ImagenEjercicio
              key={`multi-${a}-${b}`}
              imagenSrc="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Multiplication_table_chart.svg/1280px-Multiplication_table_chart.svg.png"
              pregunta={`¿Cuánto es ${a} x ${b}?`}
              opciones={[`${resultado}`, `${resultado - 1}`, `${resultado + 1}`]}
              respuestaCorrecta={`${resultado}`}
            />
          );
        })
      ))}
    </div>
  );
}