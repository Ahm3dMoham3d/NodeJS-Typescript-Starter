import { Schema, model, Document, CallbackError } from "mongoose";
import { isEmail, isStrongPassword } from "validator";
import bcrypt from "bcrypt";
interface User extends Document {
  email: string;
  password: string;
}

const schema = new Schema<User>({
  email: {
    type: String,
    required: true,
    validate: [isEmail, "not a valid email"],
    unique: true,
  },
  password: {
    type: String,
    required: true,
    validate: [isStrongPassword, "not a valid password"],
  },
});

schema.pre("save", async function (next) {
  const user = this as User;

  if (!user.isModified("password")) {
    return next();
  }

  try {
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);
    next();
  } catch (err) {
    next(err as CallbackError);
  }
});
export const UserModel = model<User>("User", schema);
