import { ServerResponse, IncomingMessage } from "http";

import { StatusCode } from "../utils/status-code";
import { listGamesServices } from "../services/list-games-services";
import { nameGameServices } from "../services/filter-nome-game-services";
import { log } from "console";

export const getListGames = async (
  request: IncomingMessage,
  response: ServerResponse
) => {
  try {
    const content = await listGamesServices();

    response.writeHead(StatusCode.OK, { "Content-type": "application/json" });
    response.write(JSON.stringify(content));
    response.end();
  } catch (error) {
    console.error("Error in listGamesServices:", error);
    response.writeHead(StatusCode.INTERNAL_SERVER_ERROR, {
      "Content-type": "application/json",
    });
    response.write(JSON.stringify({ error: "Internal Server Error" }));
    response.end();
  }
};

export const getFilterNameGame = async (
  request: IncomingMessage,
  response: ServerResponse
) => {
  try {
    console.log(request.url);
    
    const queryString = request.url?.split("?name=")[1] ?? "";
    const content = await nameGameServices(queryString);

    response.writeHead(StatusCode.OK, { "Content-type": "application/json" });
    response.write(JSON.stringify(content));
    response.end();
  } catch (error) {
    console.error("Error in getFilterNameGame:", error);

    response.writeHead(StatusCode.INTERNAL_SERVER_ERROR, {
      "Content-type": "application/json",
    });
    response.write(JSON.stringify({ error: "Internal Server Error" }));
    response.end();
  }
};
