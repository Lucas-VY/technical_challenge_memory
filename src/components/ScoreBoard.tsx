import React from "react";
import { useGameContext } from "../context/GameContext";
import LogoutButton from "./LogoutButton";

const ScoreBoard: React.FC = () => {
  const { matches, mistakes } = useGameContext();

  return (
    <div className="flex flex-col items-center justify-center mb-6">
      <h1 className="text-center text-3xl font-bold text-black">
        Aciertos: {matches} - Errores: {mistakes}
      </h1>
      <LogoutButton />
    </div>
  );
};

export default ScoreBoard;
