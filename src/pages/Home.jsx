import Juegos from "../componentes/Juegos";
import Fondo from "../assets/Fondo.jpeg";
import FondoPasto from "../assets/Fondo-Pasto2.png";
import PersonajeRojo from "../assets/personjae-rojo.png";
import PersonajeFantasma from "../assets/personaje-fantasma.png";

function Home() {
  return (
    <div >
      <img src={Fondo} alt="Fondo" className=" bg-cover bg-center bg-no-repeat w-full h-screen absolute top-0 left-0" />
      <img src={FondoPasto} alt="Paso" className="bg-cover bg-center bg-no-repeat w-full h-[500px] absolute bottom-0 left-0 z-10" />
      <img src={PersonajeFantasma} alt="Fantasma" className="w-[200px] h-[200px] absolute bottom-[15vh] left-[25vw] z-20" />
      <img src={PersonajeRojo} alt="Personaje" className="w-[150px] h-[200px] absolute bottom-0 right-[25vw] z-20" />
      <Juegos />

    </div>
  );
}

export default Home;

