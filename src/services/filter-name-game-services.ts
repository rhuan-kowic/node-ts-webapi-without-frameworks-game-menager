import { GameModel } from "../model/game-model";
import { listGamesRepository } from "../repositories/games-repository";

export const nameGameServices = async (
  gameName: string
): Promise<GameModel[]> => {
  try {
    const data = await listGamesRepository(gameName);
    return data;
  } catch (error) {
    throw error;
  }
};
