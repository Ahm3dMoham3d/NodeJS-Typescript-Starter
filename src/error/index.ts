import { Boom } from "@hapi/boom";
import { Express, NextFunction, Request, Response } from "express";
import { Error as MongooseError } from "mongoose";

const ErrorMiddleware = (app: Express) => {
  app.use(
    (err: Error | Boom, req: Request, res: Response, next: NextFunction) => {
      if (err instanceof Boom) {
        res.status(err.output.statusCode).json({
          error: {
            message: err.message,
            ...err.data,
            stack: process.env.ENV === "DEV" ? err.stack : undefined,
          },
        });
      } else if (err instanceof MongooseError) {
        res.status(400).json({
          error: {
            message: err.message,
            stack: process.env.ENV === "DEV" ? err.stack : undefined,
          },
        });
      } else {
        res.status(500).json({
          error: {
            message: "Internal Server Error",
            stack: process.env.ENV === "DEV" ? err.stack : undefined,
          },
        });
      }
    }
  );
};

export { ErrorMiddleware };
