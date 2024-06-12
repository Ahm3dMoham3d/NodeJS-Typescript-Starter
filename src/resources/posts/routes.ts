import { Router, Request, Response, NextFunction } from "express";
import Boom, { badRequest, unauthorized } from "@hapi/boom";
import { errMessage } from "../../error/messages";

const router = Router();

router.get("/", (req: Request, res: Response, next: NextFunction) => {
  res.json(`Hello world`);
});

router.get("/err", (req: Request, res: Response, next: NextFunction) => {
  next(unauthorized(`this is err ${errMessage(req)["unauthorized"]}`));
});

router.get("/:id", (req: Request, res: Response) => {
  res.send(`Hello world ${req.params.id}`);
});

export { router };
