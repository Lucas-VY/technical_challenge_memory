import React from "react";
import { useGameContext } from "../context/GameContext";

const LogoutButton: React.FC = () => {
  const { setGameSession } = useGameContext();

  const handleLogout = () => {
    localStorage.removeItem("gameSession");
    setGameSession(null);
  };

  return (
    <button
      type="submit"
      onClick={handleLogout}
      className="text-sm font-semibold leading-6 text-red-600 hover:text-red-500"
    >
      Cerrar sesión
    </button>
  );
};

export default LogoutButton;
