import React, { useState } from "react";
import { GiBearFace, GiSpiderAlt } from "react-icons/gi";

const Collapse = ({ children, label }) => {
  const [isActive, setIsActive] = useState(true);
  const displayLabel = () => {
    setIsActive(!isActive);
  };
  // si espero dos resultados de un toogle,verdadero o falso usar operador ternario
  // si espero un solo resultado voy a usar circuito corto
  return (
    <label>
      {label}
      <button onClick={displayLabel}>
        {isActive ? <GiBearFace /> : <GiSpiderAlt />}
      </button>
      <p>{isActive && children}</p>
    </label>
  );
};

export default Collapse;

// Hacer un componente Collapse, que tome children y una prop label. Inicialmente debe mostrar la label con algún ícono o emoji que indique que puede abrirse (+, 👉, ▶). Cuando se lo cliquea, debe renderizar el children y cambiar el ícono o emoji a algo que indique puede cerrarse (-, 👇, ▼). Al clickearlo nuevamente, debe expandirse (como un toggle). Ejemplo:

// Qué debo hacer para utilizar estado en React? (+)
// Qué debo hacer para utillizar estado en React? (-)

// Para utilizar estado en React...
