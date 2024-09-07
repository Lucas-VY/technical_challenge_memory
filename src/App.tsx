import React, { useEffect, useState } from "react";
import { useGameContext } from "./context/GameContext";
import Board from "./components/Board";
import ScoreBoard from "./components/ScoreBoard";
import GameOverModal from "./components/GameOverModal";
import { fetchImages } from "./services/apiService";
import PlayerName from "./components/PlayerName"; // Asegúrate de importar el componente

const App: React.FC = () => {
  const { initializeGame, playerName, setPlayerName } = useGameContext();
  const [hasPrompted, setHasPrompted] = useState(false);

  useEffect(() => {
    const loadImages = async () => {
      const imageUrls = await fetchImages();
      initializeGame(imageUrls.map((image) => image.url));
    };

    if (playerName) {
      loadImages();
    }
  }, [initializeGame, playerName]);

  if (!playerName) {
    return <PlayerName onSetPlayerName={setPlayerName} />;
  }

  return (
    <div className="app">
      <ScoreBoard />
      <Board />
      <GameOverModal />
    </div>
  );
};

export default App;
