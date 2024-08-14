import IconStar from "./Iconos/IconStar";

function BotonNivel({ nivel, posicion, onClick, ariaLabel }) {
  return (
    <div className={`absolute ${posicion}`}>

      <IconStar
        width={20}
        height={20}
        color="#FFDD33"
        className="absolute top-[-30px] left-[50%] transform translate-x-[-50%]"
      />

      <IconStar
        width={20}
        height={20}
        color="#FFDD33"
        className="absolute top-[-10px] left-[5%] transform translate-y-[-50%]"
      />

      <IconStar
        width={20}
        height={20}
        color="#FFDD33"
        className="absolute top-[-10px] right-[5%] transform translate-y-[-50%]"
      />

      <button className="w-[80px] h-[80px] rounded-full bg-[#D9D9D9] relative font-sans text-3xl font-extrabold shadow-2xl" onClick={onClick} tabIndex={0} aria-label={ariaLabel}>
        {nivel}
      </button>
    </div>
  );
}

export default BotonNivel;
