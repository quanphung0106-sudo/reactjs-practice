import express from "express";
import { googleAuth, signin, signup } from "../controllers/auth.js";

const router = express.Router();

router.post("/signup", signup);

router.post("/signin", signin);

//GOOGLE AUTH
router.post("/google", googleAuth);

export default router;
