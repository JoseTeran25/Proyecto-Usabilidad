import React from 'react';

function PastoFondo() {
  return (
    <div
      className="fixed bottom-0 left-0 w-full h-48 p-3 bg-cover bg-center z-[-1]"
      style={{ backgroundImage: "url('./src/assets/Fondo-Pasto.png')" }}
    >
    </div>
  );
}

export default PastoFondo;
