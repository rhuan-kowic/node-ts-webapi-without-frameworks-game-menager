import { GameModel } from "../model/game-model";
import { repositoryGame } from "../repositories/games-repository";

export const listGamesServices = async (): Promise<GameModel[]> => {
  try {
    const data = await repositoryGame();
    return data;
  } catch (error) {
    throw error;
  }
};
