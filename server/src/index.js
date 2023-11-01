import express from "express";
import cors from "cors";
import { router } from "./routes/signLog.js";

const app = express();

app.use(cors());
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something went wrong!");
});

app.use(express.json());

app.post("/signup", router);
app.post("/login", router);

app.listen(3001, () => {
  console.log("Server is running on port 3001.");
});
