import { GameModel } from "../model/game-model";
import { gamesByPlatform } from "../repositories/games-repository";

export const platformGamesServices = async (
  platform: string
): Promise<GameModel[]> => {
  try {
    const data = await gamesByPlatform(platform);
    return data;
    
  } catch (error) {
    throw error;
  }
};
