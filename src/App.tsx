import React, { useEffect, useState } from "react";
import { useGameContext } from "./context/GameContext";
import Board from "./components/Board";
import ScoreBoard from "./components/ScoreBoard";
import GameOverModal from "./components/GameOverModal";
import { fetchImages } from "./services/apiService";
import PlayerName from "./components/PlayerName";
import Loader from "./components/Loader";

const App: React.FC = () => {
  const { initializeGame, playerName, setPlayerName, setError } =
    useGameContext();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadImages = async () => {
      try {
        const imageUrls = await fetchImages();
        initializeGame(imageUrls.map((image) => image.url));
        setTimeout(() => {
          setLoading(false);
        }, 2000);
      } catch (error) {
        setError("Failed to load images. Please try again later.");
      }
    };

    if (playerName) {
      loadImages();
    }
  }, [initializeGame, playerName, setError]);

  if (!playerName) {
    return <PlayerName onSetPlayerName={setPlayerName} />;
  }

  if (loading) {
    return <Loader />;
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
