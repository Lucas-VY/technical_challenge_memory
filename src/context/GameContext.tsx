import React, {
  createContext,
  useState,
  useContext,
  useEffect,
  FC,
  useCallback,
} from "react";
import { ICard, IGameContext } from "../interfaces/gameInterfaces";

const GameContext = createContext<IGameContext | undefined>(undefined);

export const GameProvider: FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [cards, setCards] = useState<ICard[]>([]);
  const [flippedCards, setFlippedCards] = useState<ICard[]>([]);
  const [matches, setMatches] = useState(0);
  const [mistakes, setMistakes] = useState(0);
  const [playerName, setPlayerName] = useState<string | null>(null);

  useEffect(() => {
    const savedPlayerName = localStorage.getItem("playerName");
    if (savedPlayerName) {
      setPlayerName(savedPlayerName);
    }
  }, []);

  const shuffleCards = useCallback((images: string[]): ICard[] => {
    const shuffledImages = [...images, ...images].sort(
      () => Math.random() - 0.5
    );
    return shuffledImages.map((imageUrl, index) => ({
      id: index,
      imageUrl,
      isFlipped: false,
      isMatched: false,
    }));
  }, []);

  const initializeGame = useCallback(
    (images: string[]) => {
      const shuffledCards = shuffleCards(images);
      setCards(shuffledCards);
      setMatches(0);
      setMistakes(0);
      setFlippedCards([]);
    },
    [shuffleCards]
  );

  const handleCardClick = (card: ICard) => {
    if (flippedCards.length === 2 || card.isFlipped || card.isMatched) {
      return;
    }

    const newFlippedCards = [...flippedCards, card];
    setFlippedCards(newFlippedCards);

    setCards((prevCards) =>
      prevCards.map((c) => (c.id === card.id ? { ...c, isFlipped: true } : c))
    );

    if (newFlippedCards.length === 2) {
      const [firstCard, secondCard] = newFlippedCards;
      if (firstCard.imageUrl === secondCard.imageUrl) {
        setMatches(matches + 1);
        setCards((prevCards) =>
          prevCards.map((c) =>
            c.imageUrl === firstCard.imageUrl
              ? { ...c, isMatched: true, isFlipped: true }
              : c
          )
        );
      } else {
        setMistakes(mistakes + 1);
        setTimeout(() => {
          setCards((prevCards) =>
            prevCards.map((c) =>
              c.id === firstCard.id || c.id === secondCard.id
                ? { ...c, isFlipped: false }
                : c
            )
          );
        }, 1000);
      }
      setFlippedCards([]);
    }
  };

  useEffect(() => {
    if (playerName) {
      localStorage.setItem("playerName", playerName);
    }
  }, [playerName]);

  return (
    <GameContext.Provider
      value={{
        cards,
        matches,
        mistakes,
        playerName,
        setPlayerName,
        initializeGame,
        handleCardClick,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export const useGameContext = (): IGameContext => {
  const context = useContext(GameContext);
  if (!context) {
    throw new Error("useGameContext must be used within a GameProvider");
  }
  return context;
};
