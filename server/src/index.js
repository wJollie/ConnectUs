import express from "express";
import cors from "cors";
import { router } from "./routes/signLog.js";
import { StreamChat } from "stream-chat";

const streamApiKey = process.env.STREAM_API_KEY;
const streamApiSecret = process.env.STREAM_API_SECRET;
const serverClient = StreamChat.getInstance(streamApiKey, streamApiSecret);

const app = express();

app.use(cors());
app.use(express.json());

app.use("/signup", router);
app.use("/login", router);

app.listen(3001, () => {
  console.log("Server is running on port 3001.");
});
