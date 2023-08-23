import express from 'express';
import { deleteUser } from '../controllers/user.controller.js';
const router = express.Router();

// router.post('/', verifyAdmin, UserController.createUser);
// router.delete('/', verifyAdmin, UserController.deleteAllUsers);
// router.delete('/:id', verifyAdmin, UserController.deleteUser);
router.delete('/', deleteUser);

export default router;