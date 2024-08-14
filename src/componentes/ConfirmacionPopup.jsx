import React from "react";

function ConfirmacionPopup({ mostrar, onConfirmar, onCancelar }) {
  if (!mostrar) return null;

  return (
    <div className="fixed inset-0 bg-[#00000080] flex items-center justify-center z-50">
      <div className="bg-[#FFFFFF] p-6 rounded-lg shadow-lg w-[600px] h-[300px] flex flex-col items-center justify-center font-aldrich gap-y-6">
        <p className="text-3xl mb-4">¿Seguro quiere regresar?</p>
        <div className="flex justify-center gap-10">
          <button
            className="bg-[#007BFF] text-white py-2 px-4 rounded-lg text-3xl"
            onClick={onConfirmar}
          >
            Sí
          </button>
          <button
            className="bg-[#CA0303] text-white py-2 px-4 rounded-lg text-3xl"
            onClick={onCancelar}
          >
            No
          </button>
        </div>
      </div>
    </div>
  );
}

export default ConfirmacionPopup;
