// imports
import express, { Express, NextFunction, Request, Response } from "express";
import dotenv from "dotenv";

// constants
dotenv.config();
const app: Express = express();

// main middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// import default main middlewares
import { mainMiddlewares } from "./middleware/main";
mainMiddlewares(app);

// language middleware
import { detectUserLanguage } from "./langs";
detectUserLanguage(app);

// app routes
import { AppRoutes } from "./routes";
import { ErrorMiddleware } from "./error";
import { notFound } from "@hapi/boom";
AppRoutes(app);

// error handling
app.all("*", (req: Request, res: Response, next: NextFunction) => {
  next(notFound("we cant find this route"));
});

ErrorMiddleware(app);

export { app };
