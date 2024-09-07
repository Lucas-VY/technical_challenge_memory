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
  initializeGame: (images: string[]) => void;
  handleCardClick: (card: ICard) => void;
}

export interface ImageData {
  url: string;
  uuid: string;
  title: string;
  content_type: string;
}