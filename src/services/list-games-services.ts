import { GameModel } from "../model/game-model";
import { listGamesRepository } from "../repositories/games-repository";

export const listGamesServices = async (): Promise<GameModel[]> => {
  try {
    const data = await listGamesRepository();
    return data;
  } catch (error) {
    throw error;
  }
};
