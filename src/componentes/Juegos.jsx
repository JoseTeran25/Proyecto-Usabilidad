import React, { useState } from 'react';
import IconSiguiente from './Iconos/IconSiguiente';
import IconAnterior from './Iconos/IconAnterior';
import { useNavigate } from 'react-router-dom';
import MRU from "../assets/mru.jpeg";
import MCU from "../assets/mcu.jpeg";
import FUERZA from "../assets/fuerza.jpeg";
import { PATH_FUERZA, PATH_MOVIMIENTO_CIRCULAR_UNIFORME, PATH_MOVIMIENTO_RECTILINEO_UNIFORME } from "../routes/path";

function Juegos() {
  const [indice, setIndice] = useState(0);
  const navigate = useNavigate();

  const opciones = [
    {
      imagen: MRU,
      nombre: 'Movimiento Rectilíneo Uniforme',
      ruta: PATH_MOVIMIENTO_RECTILINEO_UNIFORME,
    },
    {
      imagen: MCU,
      nombre: 'Movimiento Circular Uniforme',
      ruta: PATH_MOVIMIENTO_CIRCULAR_UNIFORME,
    },
    {
      imagen: FUERZA,
      nombre: 'Fuerza',
      ruta: PATH_FUERZA,
    },
  ];

  const irAnterior = () => {
    setIndice((prevIndice) => (prevIndice - 1 + opciones.length) % opciones.length);
  };

  const irSiguiente = () => {
    setIndice((prevIndice) => (prevIndice + 1) % opciones.length);
  };

  const irJuega = () => {
    navigate(opciones[indice].ruta, { state: { nombreJuego: opciones[indice].nombre } });
  };

  return (
    <div className="flex flex-col items-center justify-center p-4 z-20 relative h-screen" role="navigation" aria-labelledby="juegos-heading">
      <h1 id="juegos-heading" className="text-4xl text-center font-bold pb-10" tabIndex="0">Selecciona tu tema</h1>

      <div className="flex items-center justify-center w-full gap-[100px] relative" aria-live="polite">
        <IconAnterior
          width={38}
          height={75}
          onClick={irAnterior}
          className="cursor-pointer"
          aria-label="Ir al tema anterior"
        />

        <img
          src={opciones[(indice - 1 + opciones.length) % opciones.length].imagen}
          alt={`Tema anterior: ${opciones[(indice - 1 + opciones.length) % opciones.length].nombre}`}
          className="w-[150px] h-[150px] rounded-xl shadow-xl blur-sm opacity-100 absolute left-[40%] transform translate-x-[-50%]"
          aria-hidden="true"
        />

        <div className="flex flex-col items-center z-10">
          <img
            src={opciones[indice].imagen}
            alt={`Tema seleccionado: ${opciones[indice].nombre}`}
            className="w-[330px] h-[200px] rounded-xl shadow-xl"
            tabIndex="0"
            aria-label={`Tema seleccionado: ${opciones[indice].nombre}`}
          />
          <h2 tabIndex="0" className="text-title2 mt-4 text-center">{opciones[indice].nombre}</h2>
        </div>

        <img
          src={opciones[(indice + 1) % opciones.length].imagen}
          alt={`Tema siguiente: ${opciones[(indice + 1) % opciones.length].nombre}`}
          className="w-[150px] h-[150px] rounded-xl shadow-xl blur-sm opacity-100 absolute right-[40%] transform translate-x-[50%]"
          aria-hidden="true"
        />

        <IconSiguiente
          width={38}
          height={75}
          onClick={irSiguiente}
          className="cursor-pointer"
          aria-label="Ir al siguiente tema"
        />
      </div>

      <button
        className="bg-[#28A745] py-2 px-5 rounded-xl mt-10 text-3xl text-white font-bold"
        onClick={irJuega}
        aria-label={`Jugar ${opciones[indice].nombre}`}
      >
        Jugar
      </button>
    </div>
  );
}

export default Juegos;
