import React, {
  createContext,
  useState,
  useContext,
  useEffect,
  FC,
  useCallback,
} from "react";
import {
  ICard,
  IGameContext,
  IGameSession,
} from "../interfaces/gameInterfaces";
import GenericModalError from "../components/GenericModalError";

const GameContext = createContext<IGameContext | undefined>(undefined);

export const GameProvider: FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [cards, setCards] = useState<ICard[]>([]);
  const [flippedCards, setFlippedCards] = useState<ICard[]>([]);
  const [gameSession, setGameSession] = useState<IGameSession | null>(() => {
    const savedSession = localStorage.getItem("gameSession");
    return savedSession ? JSON.parse(savedSession) : null;
  });
  const [error, setError] = useState<boolean | null>(false);

  useEffect(() => {
    if (gameSession) {
      localStorage.setItem("gameSession", JSON.stringify(gameSession));
    }
  }, [gameSession]);

  const shuffleCards = useCallback((images: string[]): ICard[] => {
    try {
      const shuffledImages = [...images, ...images].sort(
        () => Math.random() - 0.5
      );
      return shuffledImages.map((imageUrl, index) => ({
        id: index,
        imageUrl,
        isFlipped: false,
        isMatched: false,
      }));
    } catch (err) {
      setError(true);
      return [];
    }
  }, []);

  const initializeGame = useCallback(
    (images: string[]) => {
      try {
        const shuffledCards = shuffleCards(images);
        setCards(shuffledCards);
        setGameSession((prevSession) => ({
          playerName: prevSession?.playerName || "",
          matches: 0,
          mistakes: 0,
        }));
        setFlippedCards([]);
      } catch (err) {
        setError(true);
      }
    },
    [shuffleCards]
  );

  const handleCardClick = (card: ICard) => {
    try {
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
          setGameSession((prevSession) => ({
            ...prevSession!,
            matches: (prevSession?.matches || 0) + 1,
          }));
          setCards((prevCards) =>
            prevCards.map((c) =>
              c.imageUrl === firstCard.imageUrl
                ? { ...c, isMatched: true, isFlipped: true }
                : c
            )
          );
        } else {
          setGameSession((prevSession) => ({
            ...prevSession!,
            mistakes: (prevSession?.mistakes || 0) + 1,
          }));
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
    } catch (err) {
      setError(true);
    }
  };

  return (
    <GameContext.Provider
      value={{
        cards,
        matches: gameSession?.matches || 0,
        mistakes: gameSession?.mistakes || 0,
        playerName: gameSession?.playerName || null,
        setPlayerName: (name) => {
          setGameSession((prevSession) => ({
            playerName: name,
            matches: prevSession?.matches || 0,
            mistakes: prevSession?.mistakes || 0,
          }));
        },
        initializeGame,
        handleCardClick,
        setGameSession,
        setError,
      }}
    >
      {children}
      {error && (
        <GenericModalError
          onClose={() => {
            setError(null);
            localStorage.removeItem("gameSession");
          }}
        />
      )}
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
