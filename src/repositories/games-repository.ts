import fs from "fs";
import path from "path";
import { GameModel } from "../model/game-model";

const pathData = path.join(__dirname, "./data-games.json");
const language = "utf-8";

export const repositoryGame = async (gameNome?: string): Promise<GameModel> => {
  const rawData = fs.readFileSync(pathData, language);
  let jsonFile = JSON.parse(rawData);
  
  if (gameNome) {
    jsonFile = jsonFile.filter((game: GameModel) => game.nameGame === gameNome);
  }
  return jsonFile;
};
