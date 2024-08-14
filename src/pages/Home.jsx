import Juegos from "../componentes/Juegos";
import Fondo from "../assets/Fondo.jpeg";
import FondoPasto from "../assets/Fondo-Pasto2.png";
import PersonajeRojo from "../assets/personjae-rojo.png";
import PersonajeFantasma from "../assets/personaje-fantasma.png";

function Home() {
  return (
    <div role="main" aria-labelledby="main-heading">
      <h1 id="main-heading" className="sr-only">Página Principal de Juegos</h1>
      <img
        src={Fondo}
        alt="Fondo de la página"
        className="bg-cover bg-center bg-no-repeat w-full h-screen absolute top-0 left-0"
        aria-hidden="true"
      />
      <img
        src={FondoPasto}
        alt="Fondo de pasto en la parte inferior de la página"
        className="bg-cover bg-center bg-no-repeat w-full h-[500px] absolute bottom-0 left-0 z-10"
        aria-hidden="true"
      />
      <img
        src={PersonajeFantasma}
        alt="Personaje de un fantasma"
        className="w-[200px] h-[200px] absolute bottom-[15vh] left-[25vw] z-20"
        aria-hidden="true"
      />
      <img
        src={PersonajeRojo}
        alt="Personaje de color rojo"
        className="w-[150px] h-[200px] absolute bottom-0 right-[25vw] z-20"
        aria-hidden="true"
      />
      <Juegos />
    </div>
  );
}

export default Home;
