interface IAuthMessages {
  register: string;
  logged: string;
}

import { messages as AR } from "./ar";
import { messages as EN } from "./en";

const Messages = {
  AR,
  EN,
};

import { LanguagesEnum, checkHeaderLanguage } from "../../langs";
import { Request } from "express";

const authMessage = (req: Request) => {
  const lang = checkHeaderLanguage(req.headers["lang"] as LanguagesEnum);
  return Messages[lang];
};

export { IAuthMessages, authMessage };
