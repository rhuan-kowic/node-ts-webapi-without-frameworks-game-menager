import fs from "fs";
import path from "path";
import { GameModel } from "../model/game-model";

const pathData = path.join(__dirname, "./data-games.json");
const language = "utf-8";

export const repositoryGame = async (
  gameName?: string
): Promise<GameModel[]> => {
  try {
    const rawData = fs.readFileSync(pathData, language);
    let jsonFile = JSON.parse(rawData);

    if (gameName) {
      jsonFile = jsonFile.filter(
        (game: GameModel) => game.nameGame === gameName
      );
      console.log(jsonFile);
      
    }
    return jsonFile;
  } catch (error) {
    console.error("Error reading or parsing file:", error);
    throw error;
  }
};
