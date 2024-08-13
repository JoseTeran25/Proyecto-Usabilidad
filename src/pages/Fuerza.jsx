import FondoNiveles from '../assets/fondo-niveles.png'
import PersonajeRojo from "../assets/personjae-rojo.png";
import PersonajeFantasma from "../assets/personaje-fantasma.png";
import PersonajeDracula from "../assets/personaje-dracula.png";
import NavBar from '../componentes/NavBar';
import BotonNivel from '../componentes/BotonNivel';

function Fuerza() {
  return (
    <div className='flex items-center justify-center'>
      <img src={FondoNiveles} alt="Fondo Niveles" className="bg-cover bg-center bg-no-repeat w-full h-screen absolute top-0 left-0" />
      <img src={PersonajeFantasma} alt="Fantasma" className="w-[100px] h-[100px] absolute bottom-[15vh] left-[8vw] z-20" />
      <img src={PersonajeRojo} alt="Personaje" className="w-[70px] h-[80px] absolute bottom-[15vh] left-[20vw] z-20" />
      <img src={PersonajeFantasma} alt="Fantasma" className="w-[100px] h-[100px] absolute bottom-[10vh] left-[43vw] z-20" />
      <img src={PersonajeDracula} alt="Dracula" className="w-[100px] h-[100px] absolute bottom-[50vh] left-[18vw] z-20" />
      <img src={PersonajeDracula} alt="Dracula" className="w-[100px] h-[100px] absolute bottom-[40vh] right-[10vw] z-20" />
      <NavBar  />
      <BotonNivel nivel={'2'}  />
    </div>
  )
}

export default Fuerza