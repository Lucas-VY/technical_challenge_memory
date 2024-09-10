import React from "react";
import { useGameContext } from "../context/GameContext";
import { IGenericModalError } from "../interfaces/gameInterfaces";

const GenericModalError: React.FC<IGenericModalError> = ({ onClose }) => {
  const { setGameSession } = useGameContext();

  const handleLogout = () => {
    localStorage.removeItem("gameSession");
    setGameSession(null);
    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-md mx-auto text-center">
        <h2 className="text-lg font-semibold text-red-600">Error</h2>
        <p className="mt-4 text-gray-600">
          Lo sentimos algo sucedió en nuestros servicios, inténtelo más tarde.
        </p>
        <button
          onClick={handleLogout}
          className="mt-6 px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
        >
          Entendido
        </button>
      </div>
    </div>
  );
};

export default GenericModalError;
