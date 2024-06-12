import { Request, Response, NextFunction } from "express";

type CatchAsync = (
  req: Request,
  res: Response,
  next: NextFunction
) => Promise<void>;

const asyncMiddleware = (catchAsync: CatchAsync) => {
  return (req: Request, res: Response, next: NextFunction) => {
    catchAsync(req, res, next).catch((err: any) => next(err));
  };
};

export default asyncMiddleware;
