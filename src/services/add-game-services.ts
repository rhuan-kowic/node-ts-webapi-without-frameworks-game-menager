import { GameModel } from "../model/game-model";
import { addGame } from "../repositories/games-repository";
export const addGameServices = async (game: GameModel) => {
  try {
    const isAdd = await addGame(game);
    return isAdd;
  } catch (error) {
    throw error;
  }
};
