import { router } from "../resources/posts/routes";
import { Express } from "express";
const api_template = `/api/${process.env.APP_NAME}/v${process.env.APP_VER}`;

const AppRoutes = (app: Express) => {
  app.use(`${api_template}`, router);
};

export { AppRoutes };
