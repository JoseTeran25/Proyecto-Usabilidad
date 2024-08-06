import React from 'react';
import Juegos from './Juegos';

function Selector() {
  return (
    <div className="flex flex-col items-center justify-start space-y-10 mt-8 px-4">
      <h1 className="text-title mb-8">Selecciona un tema</h1>
        <Juegos/>
      <button className="bg-green-400 p-2 rounded">Jugar</button>
    </div>
  );
}

export default Selector;
