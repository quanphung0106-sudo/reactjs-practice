import express from "express";
import { verifyToken } from "../verifyToken.js";
import {
  addVideo,
  updateVideo,
  getVideo,
  deleteVideo,
  addView,
  trend,
  random,
  sub,
  search,
  tags,
  getVideos,
} from "../controllers/video.js";

const router = express.Router();

router.post("/", verifyToken, addVideo);
router.get("/find/:id", getVideo);
router.get("/find", getVideos);
router.put("/:id", verifyToken, updateVideo);
router.delete("/:id", verifyToken, deleteVideo);
router.put("/view/:id", addView);
router.get("/trend", trend);
router.get("/random", random);
router.get("/sub", verifyToken, sub);
router.get("/search", search);

//get videos by tags
router.get("/tags", tags);


export default router;
