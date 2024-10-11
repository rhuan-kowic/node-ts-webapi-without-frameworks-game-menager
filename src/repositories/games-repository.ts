import fs from "fs";
import path from "path";

import { GameModel } from "../model/game-model";

const pathData = path.join(__dirname, "./data-games.json");
const language = "utf-8";

export const listGamesRepository = async (
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

export const gamesByPlatformRepository = async (
  platform: string
): Promise<GameModel[]> => {
  try {
    const rawData = fs.readFileSync(pathData, "utf-8");
    let jsonFile: GameModel[] = JSON.parse(rawData);
    let platformGames: GameModel[] = [];

    jsonFile.forEach((game: GameModel) => {
      if (game.platforms.includes(platform)) platformGames.push(game);
    });

    return platformGames;
  } catch (error) {
    console.error("Error reading or parsing file:", error);
    throw error;
  }
};

export const deleteGameByNameRepository = async (
  name: string
): Promise<Boolean> => {
  try {
    const rawData = fs.readFileSync(pathData, language);
    const jsonFile = JSON.parse(rawData);
    const updatedJsonFile = jsonFile.filter(
      (game: GameModel) => game.nameGame !== name
    );
    let isContent: boolean =
      jsonFile.length === updatedJsonFile.length ? false : true;

    fs.writeFileSync(pathData, JSON.stringify(updatedJsonFile, null, 2));
    return isContent;
  } catch (error) {
    console.error("Error reading or parsing file: ", error);
    throw error;
  }
};

export const addGameRepository = async (game: GameModel) => {
  try {
    const rawData = fs.readFileSync(pathData, language);
    const jsonFile = JSON.parse(rawData);
    const length = jsonFile.length;
    jsonFile.push(game);
    const isAdd: boolean = length !== jsonFile.length ? true : false;

    fs.writeFileSync(pathData, JSON.stringify(jsonFile, null, 2));
    return isAdd;
  } catch (error) {
    console.error("Error reading or parsing file: ", error);
    throw error;
  }
};
