import express from "express";
import { v4 as uuidv4 } from "uuid";
import bcrypt from "bcrypt";

const router = express.Router();

router.post("/signup", async (req, res) => {
  try {
    const { username, password } = req.body;
    const userId = uuidv4();
    const hashedPassword = await bcrypt.hash(password, 10);
    const token = serverClient.createToken(userId);
    console.log("User Data Collected");
    res.json({ token, userId, username, hashedPassword });
  } catch (error) {
    res.json(error);
  }
});

router.post("/login", async (req, res) => {});

export { router };
