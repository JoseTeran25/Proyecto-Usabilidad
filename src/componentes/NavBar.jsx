import IconHome from "./Iconos/IconHome"
import IconVidaLlena from "./Iconos/IconVidaLlena"

function NavBar({ nombreJuego, score }) {
  return (
    <nav className='rounded-xl bg-[#D9D9D9] absolute top-0 my-5 w-[80%] h-[70px]  opacity-70 flex items-center justify-between px-4'>
      <div className="flex items-center justify-center bg-[#FFDD33] rounded-full p-3 shadow-normal">
        <IconHome width={28} height={28} className='cursor-pointer' />
      </div>
      <p className='text-2xl font-bold ml-2'>{nombreJuego}</p>
      <p className='text-2xl font-bold ml-2'>Score: {score}</p>
      <div className="flex items-center justify-center gap-0">
        <IconVidaLlena width={28} height={28}/>
        <IconVidaLlena width={28} height={28}/>
        <IconVidaLlena width={28} height={28}/>
        <IconVidaLlena width={28} height={28}/>
        <IconVidaLlena width={28} height={28}/>
      </div>
    </nav>
  )
}

export default NavBar