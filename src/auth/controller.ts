import { UserModel } from "./model";
import { Request, Response, NextFunction } from "express";
import asyncMiddleware from "../utils/catchAsync";
import { authMessage } from "./messages";

const register = asyncMiddleware(
  async (req: Request, res: Response, next: NextFunction) => {
    const { email, password } = req.body;
    await UserModel.create({
      email,
      password,
    });
    res.json({ message: authMessage(req)["register"] });
  }
);

export { register };
