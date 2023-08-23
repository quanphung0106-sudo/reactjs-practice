import express from 'express';
import { deleteUser } from '../controllers/user.controller.js';
import { verifyToken } from '../middleware/jwt.js';
const router = express.Router();

// router.post('/', verifyAdmin, UserController.createUser);
// router.delete('/', verifyAdmin, UserController.deleteAllUsers);
// router.delete('/:id', verifyAdmin, UserController.deleteUser);
router.delete('/:id', verifyToken, deleteUser);

export default router;