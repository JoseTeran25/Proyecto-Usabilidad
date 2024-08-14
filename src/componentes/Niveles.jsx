import FondoNiveles from '../assets/fondo-niveles.png'
import PersonajeRojo from "../assets/personjae-rojo.png";
import PersonajeFantasma from "../assets/personaje-fantasma.png";
import PersonajeDracula from "../assets/personaje-dracula.png";
import NavBar from '../componentes/NavBar';
import BotonNivel from '../componentes/BotonNivel';

function Niveles({ nombreJuego, onClick }) {
  return (
    <div className='relative w-full h-screen flex items-center justify-center'>
      <img src={FondoNiveles} alt="Fondo Niveles" className="absolute top-0 left-0 w-full h-full object-cover" />
      <NavBar nombreJuego={nombreJuego} />

      <img src={PersonajeFantasma} alt="Fantasma" className="w-[100px] h-[100px] absolute bottom-[15vh] left-[8vw] z-20" />
      <img src={PersonajeRojo} alt="Personaje" className="w-[70px] h-[80px] absolute bottom-[15vh] left-[20vw] z-20" />
      <img src={PersonajeFantasma} alt="Fantasma" className="w-[100px] h-[100px] absolute bottom-[10vh] left-[43vw] z-20" />
      <img src={PersonajeDracula} alt="Dracula" className="w-[100px] h-[100px] absolute bottom-[50vh] left-[18vw] z-20" />
      <img src={PersonajeDracula} alt="Dracula" className="w-[100px] h-[100px] absolute bottom-[40vh] right-[10vw] z-20" />

      <BotonNivel nivel={'1'} posicion="bottom-[15vh] left-[30vw]" onClick={() => onClick(1)} ariaLabel="Nivel uno" />
      <BotonNivel nivel={'2'} posicion="bottom-[55vh] left-[35vw]" onClick={() => onClick(2)} ariaLabel="Nivel dos" />
      <BotonNivel nivel={'3'} posicion="bottom-[35vh] right-[45vw]" onClick={() => onClick(3)} ariaLabel="Nivel tres" />
      <BotonNivel nivel={'4'} posicion="bottom-[35vh] right-[25vw]" onClick={() => onClick(4)} ariaLabel="Nivel cuatro" />
      <BotonNivel nivel={'5'} posicion="bottom-[65vh] right-[10vw]" onClick={() => onClick(5)} ariaLabel="Nivel cinco" />
    </div>
  )
}

export default Niveles;