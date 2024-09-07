import React from "react";
import { ICard } from "../interfaces/gameInterfaces";
import Card from "./Card";
import { useGameContext } from "../context/GameContext";

const Board: React.FC = () => {
  const { cards, handleCardClick } = useGameContext();

  return (
    <div className="grid grid-cols-4 gap-4 p-4 sm:grid-cols-8 lg:grid-cols-10">
      {cards.map((card: ICard) => (
        <Card key={card.id} card={card} onClick={() => handleCardClick(card)} />
      ))}
    </div>
  );
};

export default Board;
