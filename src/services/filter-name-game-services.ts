import { GameModel } from "../model/game-model";
import { repositoryGame } from "../repositories/games-repository";

export const nameGameServices = async (
  gameName: string
): Promise<GameModel[]> => {
  try {
    const data = await repositoryGame(gameName);
    return data;
    
  } catch (error) {
    throw error;
  }
};
