// (contenido anterior omitido para brevedad...)

      {/* Abecedario completo */}
      {"ABCDEFGHIJKLMNÑOPQRSTUVWXYZ".split("").map((letra, i) => (
        <ImagenEjercicio
          key={`abecedario-${i}`}
          imagenSrc="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Abecedario_completo.png/640px-Abecedario_completo.png"
          pregunta={`¿Cuál es esta letra? (posición ${i + 1})`}
          opciones={[letra, i + 1 < 27 ? "Z" : "A", "M"]}
          respuestaCorrecta={letra}
        />
      ))}

      {/* Tabla del 1 al 10 */}
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