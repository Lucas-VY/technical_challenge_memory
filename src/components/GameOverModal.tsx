import React from "react";
import { useGameContext } from "../context/GameContext";

const GameOverModal: React.FC = () => {
  const { matches, cards, playerName } = useGameContext();

  if (matches === cards.length / 2) {
    return (
      <div className="modal">
        <div className="modal-content">
          <h2>¡Felicidades {playerName}!</h2>
          <p>Has completado el juego.</p>
        </div>
      </div>
    );
  }

  return null;
};

export default GameOverModal;
