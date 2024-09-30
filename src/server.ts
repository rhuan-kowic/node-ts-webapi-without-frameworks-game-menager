import * as http from "http";

const server = http.createServer(
  async (request: http.IncomingMessage, response: http.ServerResponse) => {}
);

const port = process.env.PORT;

server.listen(port, () => {
  console.log(`Servidor iniciado na porta: ${port}`);
});
