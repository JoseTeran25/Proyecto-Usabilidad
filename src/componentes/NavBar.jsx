import IconHome from "./Iconos/IconHome"
import IconVidaLlena from "./Iconos/IconVidaLlena"
import { useNavigate } from "react-router-dom";


function NavBar({ nombreJuego, score }) {
  const navigate = useNavigate();

const handleClick = () => {
  navigate("/");
};
  return (
    <nav className='rounded-xl bg-[#D9D9D9] absolute top-0 my-5 w-[80%] h-[70px]  opacity-70 flex items-center justify-between px-4'>
      <button className="flex items-center justify-center bg-[#FFDD33] rounded-full p-3 shadow-normal" tabIndex={0} aria-label="Regresar al menu principal" onClick={handleClick}>
        <IconHome width={28} height={28} className='cursor-pointer' />
      </button>
      <p className='text-2xl font-bold ml-2' tabIndex={0}>Juego de: {nombreJuego}</p>
      <p className='text-2xl font-bold ml-2' tabIndex={0}>Score: {score}</p>
      <div className="flex items-center justify-center gap-0" tabIndex={0}>
        <IconVidaLlena width={28} height={28} />
        <IconVidaLlena width={28} height={28} />
        <IconVidaLlena width={28} height={28} />
        <IconVidaLlena width={28} height={28} />
        <IconVidaLlena width={28} height={28} />
      </div>
    </nav>
  )
}

export default NavBar