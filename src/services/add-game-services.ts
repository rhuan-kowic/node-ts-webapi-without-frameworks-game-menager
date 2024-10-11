import { GameModel } from "../model/game-model";
import { addGameRepository } from "../repositories/games-repository";
export const addGameServices = async (game: GameModel) => {
  try {
    const isAdd = await addGameRepository(game);
    return isAdd;
  } catch (error) {
    throw error;
  }
};
