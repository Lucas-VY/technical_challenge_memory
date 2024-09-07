import React, { useEffect, useState } from "react";
import { useGameContext } from "./context/GameContext";
import Board from "./components/Board";
import ScoreBoard from "./components/ScoreBoard";
import GameOverModal from "./components/GameOverModal";
import { fetchImages } from "./services/apiService";

const App: React.FC = () => {
  const { initializeGame, playerName, setPlayerName } = useGameContext();
  const [hasPrompted, setHasPrompted] = useState(false);

  useEffect(() => {
    const loadImages = async () => {
      const imageUrls = await fetchImages();
      initializeGame(imageUrls.map((image) => image.url));
    };

    if (!playerName && !hasPrompted) {
      const name = prompt("Por favor ingresa tu nombre:");
      if (name) {
        setPlayerName(name);
      }
      setHasPrompted(true);
    }

    if (playerName) {
      loadImages();
    }
  }, [initializeGame, playerName, setPlayerName, hasPrompted]);

  return (
    <div className="app">
      <ScoreBoard />
      <Board />
      <GameOverModal />
    </div>
  );
};

export default App;
