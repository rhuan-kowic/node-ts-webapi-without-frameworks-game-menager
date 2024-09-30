import * as http from "http";
import { listGames } from "./controller/games-controller";

const server = http.createServer(
  async (request: http.IncomingMessage, response: http.ServerResponse) => {
    if(request.method === "GET"){
      await listGames(request, response);
    }
  }
);

const port = process.env.PORT;
server.listen(port, () => {
  console.log(`Servidor iniciado na porta: ${port}`);
});
