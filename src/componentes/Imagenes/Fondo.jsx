import React from 'react';

function Fondo() {
  return (
    <div className="fixed inset-0 w-full h-full bg-cover bg-center z-[-1]" style={{ backgroundImage: "url('./src/assets/Fondo.jpeg')" }}>
    </div>
  );
}

export default Fondo;
