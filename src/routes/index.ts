import { router as posts } from "../resources/posts/routes";
import { router as auth } from "../auth/routes";
import { Express } from "express";
const api_template = `/api/v${process.env.APP_VER}`;

const AppRoutes = (app: Express) => {
  app.use(`${api_template}`, posts);
  app.use(`${api_template}/auth`, auth);
};

export { AppRoutes };
