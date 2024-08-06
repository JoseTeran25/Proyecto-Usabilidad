import React, { useState } from 'react';

function Juegos() {
  const [indice, setIndice] = useState(0);

  const opciones = [
    {
      imagen: './src/assets/mru.jpeg', 
      nombre: 'Movimiento Rectilíneo Uniforme',
    },
    {
      imagen: './src/assets/mcu.jpeg',
      nombre: 'Movimiento Circular Uniforme',
    },
    {
      imagen: './src/assets/fuerza.jpeg',
      nombre: 'Fuerza',
    },
  ];


  const irAnterior = () => {
    setIndice((prevIndice) => (prevIndice - 1 + opciones.length) % opciones.length);
  };

  const irSiguiente = () => {
    setIndice((prevIndice) => (prevIndice + 1) % opciones.length);
  };

  return (
    <div className="flex flex-col items-center justify-center p-4 relative">
    
      <div className="flex items-center justify-between w-full">
        <button
          className="bg-gray-800 text-white p-2 rounded"
          onClick={irAnterior}
        >
          Anterior
        </button>
        <div className=" p-8 w-full max-w-md mx-4">
          <img src={opciones[indice].imagen} alt={opciones[indice].nombre} className="w-full h-full" />
          <h1 className="text-title2 mt-4 text-center">{opciones[indice].nombre}</h1>
        </div>
        <button
          className="bg-gray-800 text-white p-2 rounded"
          onClick={irSiguiente}
        >
          Siguiente
        </button>
      </div>
    </div>
  );
}

export default Juegos;
