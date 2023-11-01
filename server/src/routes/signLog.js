import express from "express";
import { v4 as uuidv4 } from "uuid";
import bcrypt from "bcrypt";
import { StreamChat } from "stream-chat";

const streamApiKey = "dqpeuaduyk7t";
const streamApiSecret =
  "u4k6b7keh8sn888ycagszne4kxyh7cwfhhfxu9e58zdtfgtcj66zwburmujejt96";
const serverClient = StreamChat.getInstance(streamApiKey, streamApiSecret);

const router = express.Router();

router.post("/signup", async (req, res) => {
  try {
    console.log("signup router");
    const { username, password } = req.body;
    console.log("User Data Collected");
    const userId = uuidv4();
    console.log("uuidv4 generated");
    const hashedPassword = await bcrypt.hash(password, 10);
    console.log("hashedPassword generated");
    const token = serverClient.createToken(userId);
    console.log("token generated");
    res.json({ token, userId, username, hashedPassword });
    console.log("res.json sent");
  } catch (error) {
    res.json(error);
  }
});

router.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;
    const { users } = await serverClient.queryUsers({ name: username });
    if (users.length === 0) return res.json({ message: "User not found" });

    const token = serverClient.createToken(users[0].id);

    const passwordMatch = await bcrypt.compare(
      password,
      users[0].hashedPassword
    );

    if (passwordMatch) {
      res.json({
        token,
        userId: users[0].id,
        username,
      });
    }
  } catch (error) {
    res.json(error);
  }
});

export { router };
