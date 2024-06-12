import { Express, Request, Response, NextFunction } from "express";

type LanguagesEnum = (typeof languages)[number];

const languages = ["AR", "EN"] as const;
const default_lang: LanguagesEnum = "AR";

const checkHeaderLanguage = (lang?: LanguagesEnum) => {
  if (!lang || !languages.includes(lang)) {
    console.log("The language is either undefined or not supported");
    return default_lang;
  } else {
    return lang;
  }
};

const detectUserLanguage = (app: Express) => {
  app.use((req: Request, res: Response, next: NextFunction) => {
    const lang = checkHeaderLanguage(req.headers["lang"] as LanguagesEnum);
    res.setHeader("lang", lang);
    next();
  });
};

export { checkHeaderLanguage, LanguagesEnum, detectUserLanguage };
