import React from "react";
import { useGameContext } from "../context/GameContext";
import Card from "./Card";

const Board: React.FC = () => {
  const { cards, handleCardClick } = useGameContext();

  return (
    <div className="grid grid-cols-8 gap-4 p-4">
      {cards.map((card, index) => (
        <Card key={index} card={card} onClick={() => handleCardClick(card)} />
      ))}
    </div>
  );
};

export default Board;
