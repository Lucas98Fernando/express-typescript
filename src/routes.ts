import { Router } from "express";
import UserController from "./controllers/UserController";

const routes = Router();

routes.get("/", (req, res) => {
  res.send("Hello, world!");
});

routes.get("/users", UserController.index);
routes.post("/users", UserController.Mail);

export default routes;
