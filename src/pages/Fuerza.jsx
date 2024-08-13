import Niveles from "../componentes/Niveles";
import { useState } from "react";
import { useLocation } from "react-router-dom";

function Fuerza() {

  const location = useLocation();
  const { nombreJuego } = location.state || {}
  const [niveles, setNiveles] = useState(true);
  const [nivel1, setNivel1] = useState(false);


  return (
    <div>
      {niveles && (
        <Niveles nombreJuego={nombreJuego} />
      )}
      {nivel1 && (
        <div>

        </div>
      )}
    </div>
  );
}

export default Fuerza;
