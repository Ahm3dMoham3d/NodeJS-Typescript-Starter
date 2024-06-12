// imports
import { app } from "./src/app";
import { databaseConnection } from "./src/database/connection";

// constants
const port = process.env.PORT || 3000;

const main = () => {
  // database connection
  databaseConnection().then(() => {
    // run the server
    app.listen(port, () => {
      console.log(`[⚡ Server]: Server is running at http://localhost:${port}`);
    });
  });
};

// socket connection

// running main function
main();
