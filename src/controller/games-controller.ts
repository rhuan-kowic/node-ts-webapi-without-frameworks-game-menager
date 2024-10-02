import { ServerResponse, IncomingMessage } from "http";

import { StatusCode } from "../utils/status-code";
import { listGamesServices } from "../services/list-games-services";
import { nameGameServices } from "../services/filter-name-game-services";
import { platformGamesServices } from "../services/filter-platform-game-services";
import { deleteGameServices } from "../services/remove-game-services";

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

export const getFilterPlatformGame = async (
  request: IncomingMessage,
  response: ServerResponse
) => {
  try {
    const stringQuery = request.url?.split("?platform=")[1] ?? "";
    const content = await platformGamesServices(stringQuery);

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

export const deleteGame = async (
  request: IncomingMessage,
  response: ServerResponse
) => {
  try {
    const stringQuery = request.url?.split("?name=")[1] ?? "";
    const isDelete = await deleteGameServices(stringQuery);
    if (isDelete) {
      response.writeHead(StatusCode.OK, {
        "Content-type": "application/json",
      });
      response.write(
        JSON.stringify({
          message: "Jogo deletado com sucesso!",
        })
      );
      response.end();
    } else {
      response.writeHead(StatusCode.NO_CONTENT, {
        "Content-type": "application/json",
      });
      response.write(
        JSON.stringify({
          message: "Jogo não encontrado!",
        })
      );
      response.end();
    }
  } catch (error) {
    console.error("Error in getFilterNameGame:", error);

    response.writeHead(StatusCode.INTERNAL_SERVER_ERROR, {
      "Content-type": "application/json",
    });
    response.write(JSON.stringify({ error: "Internal Server Error" }));
    response.end();
  }
};
