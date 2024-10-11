import { GameModel } from "../model/game-model";
import { gamesByPlatformRepository } from "../repositories/games-repository";

export const platformGamesServices = async (
  platform: string
): Promise<GameModel[]> => {
  try {
    const data = await gamesByPlatformRepository(platform);
    return data;
  } catch (error) {
    throw error;
  }
};
