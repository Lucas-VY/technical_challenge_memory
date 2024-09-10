import React from "react";
import { useGameContext } from "../context/GameContext";
import { CheckCircleIcon } from "@heroicons/react/solid";

const GameOverModal: React.FC = () => {
  const { matches, cards, playerName } = useGameContext();

  if (playerName && matches === cards.length / 2 && cards.length > 0) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
        <div className="bg-white rounded-lg p-8 shadow-lg text-center">
          <CheckCircleIcon className="h-12 w-12 text-green-500 mx-auto" />
          <h2 className="text-2xl font-bold mt-4">
            ¡Felicidades {playerName}!
          </h2>
          <p className="mt-2">Has completado el juego.</p>
          <button
            onClick={() => {
              localStorage.clear();
              window.location.reload();
            }}
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg"
          >
            Entendido
          </button>
        </div>
      </div>
    );
  }

  return null;
};

export default GameOverModal;
