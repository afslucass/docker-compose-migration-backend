import "dotenv/config";
import express from "express";

import AppDataSource from "./connection";

AppDataSource.initialize()
  .then(() => {
    console.log("Data Source has been initialized!");
  })
  .catch((err) => {
    console.error("Error during Data Source initialization", err);
  });

const app = express();
const PORT = process.env.PORT;

app.get("/", (req: any, res: any) => {
  res.send("Hello World!");
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
