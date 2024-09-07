import React from "react";
import { ICard } from "../interfaces/gameInterfaces";

interface CardProps {
  card: ICard;
  onClick: () => void;
}

const Card: React.FC<CardProps> = ({ card, onClick }) => {
  return (
    <div
      className={`card ${
        card.isFlipped ? "card--flipped" : ""
      } rounded-lg shadow-md cursor-pointer transition-transform transform hover:scale-105`}
      onClick={onClick}
    >
      <div className="card__inner relative w-full h-full">
        <div className="card__front flex justify-center items-center p-4 rounded-lg">
          <span className="card__question text-6xl font-bold text-black">
            ?
          </span>
        </div>
        <div className="card__back flex justify-center items-center">
          <img
            src={card.imageUrl}
            alt="Animal"
            className="card__image object-cover w-full h-full rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Card;
