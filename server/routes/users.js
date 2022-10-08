import express from "express";
import {
  deleteUser,
  dislike,
  update,
  like,
  subscribe,
  unsubscribe,
  getUser,
  getUsers,
} from "../controllers/user.js";
import { verifyToken } from "../verifyToken.js";

const router = express.Router();

router.put("/:id", verifyToken, update);

router.delete("/:id", verifyToken, deleteUser);

router.get("/find/:id", getUser);

router.get("/find", getUsers);

//subscribe a user
router.put("/sub/:id", verifyToken, subscribe);

//unsubscribe a user
router.put("/unsub/:id", verifyToken, unsubscribe);

//like a video
router.put("/like/:videoId", verifyToken, like);

//dislike a video
router.put("/dislike/:videoId", verifyToken, dislike);

export default router;
