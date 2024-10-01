import * as http from "http";
import { getFilterNameGame, getListGames } from "./controller/games-controller";

const server = http.createServer(
  async (request: http.IncomingMessage, response: http.ServerResponse) => {
    const baseUrl= request.url?.split("?")[0];

    if (request.method === "GET" && baseUrl === "/api/games") {
      await getListGames(request, response);
    }

    if (request.method === "GET" && baseUrl === "/api/name") {
      await getFilterNameGame(request, response);
    }
  }
);

const port = process.env.PORT;
server.listen(port, () => {
  console.log(`Servidor iniciado na porta: ${port}`);
});
