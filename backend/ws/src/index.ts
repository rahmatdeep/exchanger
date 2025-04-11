import { WebSocketServer } from "ws";
import { UserManager } from "./UserManager";

const wss = new WebSocketServer({ port: 3101 });

wss.on("connection", (ws) => {
  UserManager.getInstance().addUser(ws);
});
