import express from 'express';
import { readTodos, createTodos } from '../controllers/todoController.js';
const router = express.Router();

router.get('/', readTodos);
router.post('/', createTodos);

export default router;
