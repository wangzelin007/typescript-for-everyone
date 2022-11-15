// "exec": "ts-node src/main.ts"
import { Server, Probot } from "probot";
import app from "./index";

async function startServer() {
  const server = new Server({
    Probot: Probot.defaults({
      appId: 123,
      privateKey: "content of your *.pem file here",
      secret: "webhooksecret123",
    }),
  });

  await server.load(app);

  server.start();
}

startServer();