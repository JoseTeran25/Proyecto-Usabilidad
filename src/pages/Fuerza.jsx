import Niveles from "../componentes/Niveles";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import Fondo from "../assets/Fondo.jpeg";
import IconRegresar from "../componentes/Iconos/IconRegresar";
import FondoPasto3 from "../assets/Fondo-Pasto3.png";
import PersonajeRojo from "../assets/personjae-rojo.png";
import Bloque from "../assets/bloque.png";
import OpcionRespuesta from "../componentes/OpcionRespuesta";

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
        <div className="relative w-full h-screen flex  justify-center">
          <img
            src={Fondo}
            alt="Fondo"
            className="bg-cover bg-center bg-no-repeat w-full h-full absolute top-0 left-0"
          />
          <img src={FondoPasto3} alt="Pasto" className="bg-cover bg-center bg-no-repeat w-full h-[250px] absolute bottom-0 left-0 z-10" />
          <img src={PersonajeRojo} alt="Personaje" className="w-[100px] h-[150px] absolute bottom-[23vh] left-[15vw] z-20" />
          <img src={Bloque} alt="Personaje" className="w-[100px] h-[100px] absolute bottom-[23vh] left-[25vw] z-20" />

          <div
            className="absolute top-5 left-5 flex items-center justify-center bg-[#FFDD33] rounded-full p-3 shadow-normal cursor-pointer"
            onClick={() => handleClicNivel(0)}
          >
            <IconRegresar width={20} height={20} className="cursor-pointer" color="black" />
          </div>

          <div className="relative z-10 text-center mx-20 mt-14 font-aldrich">
            <p className="text-5xl font-bold mb-4">NIVEL 1</p>
            <p className="text-3xl text-left">
              Agent 47 debe mover un bloque de 10 kg sobre una superficie sin fricción.
              Aplicará una fuerza de 50 N sobre el bloque. ¿Cuál debe ser la aceleración
              del bloque para que Agent 47 complete su misión?
            </p>
            <div className="border flex flex-col items-end mt-10">
              <OpcionRespuesta opcion="A" descripcion="a = 5m/s²" esCorrecta={true} />
              <OpcionRespuesta opcion="B" descripcion="a = 6m/s²" esCorrecta={false} />
            </div>
          </div>
        </div>

      )}
      {nivelActual === 2 && (
        <div>
          <img src={Fondo} alt="Fondo" className=" bg-cover bg-center bg-no-repeat w-full h-screen absolute top-0 left-0" />
        </div>
      )}
    </div>
  );
}

export default Fuerza;
