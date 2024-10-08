import * as http from "http";
import {
  deleteGame,
  getFilterNameGame,
  getFilterPlatformGame,
  getListGames,
} from "./controller/games-controller";
import { HttpMethod } from "./utils/http-methods";
import { Routes } from "./routes/routes";
import { addGame } from "./repositories/games-repository";

const server = http.createServer(
  async (request: http.IncomingMessage, response: http.ServerResponse) => {
    const baseUrl = request.url?.split("?")[0];

    if (request.method === HttpMethod.GET && baseUrl === Routes.GAMES) {
      await getListGames(request, response);
    }

    if (request.method === HttpMethod.GET && baseUrl === Routes.NAMEGAME) {
      await getFilterNameGame(request, response);
    }

    if (request.method === HttpMethod.GET && baseUrl === Routes.NAMEPLATFORM) {
      await getFilterPlatformGame(request, response);
    }

    if (request.method === HttpMethod.DELETE && baseUrl && Routes.REMOVE) {
      await deleteGame(request, response);
    }

    if (request.method === HttpMethod.POST) {
      await addGame({
        nameGame: "Pokemon LeafGreen",
        yearRelease: 2004,
        platforms: ["Game Boy Advance"],
        categories: ["RPG"],
      });
    }
  }
);

const port = process.env.PORT;
server.listen(port, () => {
  console.log(`Servidor iniciado na porta: ${port}`);
});
