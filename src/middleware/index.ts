import { Express } from "express";
import morgan from "morgan";
import cors from "cors";
import helmet from "helmet";
import sanitize from "express-mongo-sanitize";
import hpp from "hpp";

const mainMiddlewares = (app: Express) => {
  // main app middleware
  app.use(morgan("dev"));
  app.use(
    cors({
      credentials: true,
    })
  );
  app.use(
    helmet({
      crossOriginResourcePolicy: false,
    })
  );
  app.use(sanitize());
  app.use(hpp());
};

export { mainMiddlewares };
