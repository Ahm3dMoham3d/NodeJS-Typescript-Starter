import { connect } from "mongoose";
const databaseConnection = async () =>
  await connect(`${process.env.DB_URI}/test`).then((e) =>
    console.log(
      `[🛢️  Database]: Connected Successfully to ${e.connection.host}/${e.connection.name}`
    )
  );

export { databaseConnection };
