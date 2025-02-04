import "dotenv/config";
import express from "express";

import { errorHandler } from "./middleware/error-handler";
import AppDataSource from "./connection";
import router from "./routes";

AppDataSource.initialize()
  .then(() => {
    console.log("Data Source has been initialized!");
  })
  .catch((err) => {
    console.error("Error during Data Source initialization", err);
  });

const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use(router);
app.use(errorHandler);

app.get("/", (_req: any, res: any) => {
  res.send("Hello World!");
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
