import { ServerResponse, IncomingMessage } from "http";
import { StatusCode } from "../utils/status-code";

export const listGames = async (
  request: IncomingMessage,
  response: ServerResponse
) => {
  const content = [
    {
      nameGame: "Pokemon FireRed",
      yearRelease: 2004,
      plataforms: ["Game Boy Advance"],
      categories: ["RPG"],
    },
    {
      nameGame: "League of Legends",
      yearRelease: 2009,
      plataforms: ["Windows", "MacOS"],
      categories: ["MOBA"],
    },
  ];
  response.writeHead(StatusCode.OK, { "Content-type": "application/json" });
  response.write(JSON.stringify(content));
  response.end();
};
