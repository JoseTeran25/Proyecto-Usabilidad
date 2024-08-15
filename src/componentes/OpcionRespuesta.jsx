
function OpcionRespuesta({ opcion, descripcion, esCorrecta, onClick, color }) {

  const colorCorrecta = {esCorrecta} ? "bg-[#FFDD33]" : "bg-[#28A745]";

  return (
    <button className={`${color} rounded-md font-aldrich text-white w-[300px] h-[50px] flex items-center justify-around text-xl m-3 shadow-normal cursor-pointer`} onClick={onClick} tabIndex={0} >
      <p>{opcion}</p>
      <p>{descripcion}</p>
    </button>
  )
}

export default OpcionRespuesta