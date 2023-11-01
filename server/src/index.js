import express from "express";
import cors from "cors";
import { router } from "./routes/signLog.js";

const port = process.env.PORT || 3001;
const app = express();

app.use(cors());
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something went wrong!");
});

app.use(express.json());

app.post("/signup", router);
app.post("/login", router);

app.listen(port, () => {
  console.log("Server is running on port", { port });
});
