
function OpcionRespuesta({ opcion, descripcion, esCorrecta }) {

  const colorCorrecta = {esCorrecta} ? "bg-[#FFDD33]" : "bg-[#28A745]";

  return (
    <div className="bg-[#28A745] rounded-md font-aldrich text-white w-[300px] h-[50px] flex items-center justify-around text-xl m-3 shadow-normal cursor-pointer">
      <p>{opcion}</p>
      <p>{descripcion}</p>
    </div>
  )
}

export default OpcionRespuesta