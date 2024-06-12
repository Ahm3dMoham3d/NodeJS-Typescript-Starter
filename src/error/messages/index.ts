interface IErrorsMessages {
  unauthorized: string;
  notfound: string;
}
import { errors as AR } from "./ar";
import { errors as EN } from "./en";

const ErrorMessages = {
  AR,
  EN,
};

import { Request } from "express";
import { LanguagesEnum, checkHeaderLanguage } from "../../langs";

const errMessage = (req: Request) => {
  const lang = checkHeaderLanguage(req.headers["lang"] as LanguagesEnum);
  return ErrorMessages[lang];
};

export { IErrorsMessages, errMessage };
