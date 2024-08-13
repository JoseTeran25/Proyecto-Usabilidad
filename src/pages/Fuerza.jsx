import Niveles from "../componentes/Niveles";
import { useState } from "react";
import { useLocation } from "react-router-dom";

function Fuerza() {

  const location = useLocation();
  const { nombreJuego } = location.state || {}
  const [nivelActual, setNivelActual] = useState(0);

  const handleClicNivel = (nivel) => {
    setNivelActual(nivel);
  }

  return (
    <div>
      {nivelActual === 0 && (
        <Niveles nombreJuego={nombreJuego} onClick={handleClicNivel} />
      )}
      {nivelActual === 1 && (
        <div>
          Hola
        </div>
      )}
      {nivelActual === 2 && (
        <div>
          Hola 2
        </div>
      )}
    </div>
  );
}

export default Fuerza;
