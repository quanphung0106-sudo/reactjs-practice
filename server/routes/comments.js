import express from "express";
import { addComment, deleteComment, getComments, updateComment } from "../controllers/comment.js";
import {verifyToken} from '../verifyToken.js'

const router = express.Router();

router.post('/', verifyToken, addComment)
router.get("/:videoId", verifyToken, getComments);
router.put('/', verifyToken, updateComment)
router.delete("/", verifyToken, deleteComment);

export default router;
