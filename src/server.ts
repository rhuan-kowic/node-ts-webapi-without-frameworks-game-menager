import * as http from "http";
import {
  addGameController,
  deleteGameController,
  filterNameGameController,
  filterPlatformGameController,
  listGamesController,
} from "./controller/games-controller";
import { HttpMethod } from "./utils/http-methods";
import { Routes } from "./routes/routes";

const server = http.createServer(
  async (request: http.IncomingMessage, response: http.ServerResponse) => {
    const baseUrl = request.url?.split("?")[0];

    if (request.method === HttpMethod.GET && baseUrl === Routes.GAMES) {
      await listGamesController(request, response);
    }

    if (request.method === HttpMethod.GET && baseUrl === Routes.NAMEGAME) {
      await filterNameGameController(request, response);
    }

    if (request.method === HttpMethod.GET && baseUrl === Routes.NAMEPLATFORM) {
      await filterPlatformGameController(request, response);
    }

    if (request.method === HttpMethod.DELETE && baseUrl && Routes.REMOVE) {
      await deleteGameController(request, response);
    }

    if (request.method === HttpMethod.POST && baseUrl === Routes.ADDGAME) {
      await addGameController(request, response);
    }
  }
);

const port = process.env.PORT;
server.listen(port, () => {
  console.log(`Servidor iniciado na porta: ${port}`);
});
