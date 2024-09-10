export interface ICard {
  id: number;
  imageUrl: string;
  isFlipped: boolean;
  isMatched: boolean;
}

export interface IGameContext {
  cards: ICard[];
  matches: number;
  mistakes: number;
  playerName: string | null;
  setPlayerName: (name: string | null) => void;
  setGameSession: (session: IGameSession | null) => void;
  initializeGame: (images: string[]) => void;
  handleCardClick: (card: ICard) => void;
  setError: (error: string | null) => void;
}

export interface ImageData {
  url: string;
  uuid: string;
  title: string;
  content_type: string;
}

export interface IScore {
  name: string;
  matches: number;
  mistakes: number;
}

export interface IGameSession {
  playerName: string | null;
  matches: number;
  mistakes: number;
}
