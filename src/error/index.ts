import { Boom } from "@hapi/boom";
import { Express, NextFunction, Request, Response } from "express";

const ErrorMiddleware = (app: Express) => {
  app.use(
    (err: Error | Boom, req: Request, res: Response, next: NextFunction) => {
      if (err instanceof Boom) {
        res.status(err.output.statusCode).json({
          error: {
            message: err.message,
            ...err.data,
          },
        });
      } else {
        res.status(500).json({
          error: {
            message: "Internal Server Error",
          },
        });
      }
    }
  );
};

export { ErrorMiddleware };
