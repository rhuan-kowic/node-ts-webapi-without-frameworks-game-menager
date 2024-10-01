import { ServerResponse, IncomingMessage } from "http";
import { StatusCode } from "../utils/status-code";
import { repositoryGame } from "../repositories/games-repository";

export const listGames = async (
  request: IncomingMessage,
  response: ServerResponse
) => {
  const content = await repositoryGame();
  
  response.writeHead(StatusCode.OK, { "Content-type": "application/json" });
  response.write(JSON.stringify(content));
  response.end();
};
