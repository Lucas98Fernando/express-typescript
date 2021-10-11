import express from "express";
const app = express();
import routes from "./routes";

app.use(routes);

app.listen(3333);
