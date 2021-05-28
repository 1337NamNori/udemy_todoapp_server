import express from 'express';
import { readTodos, createTodo } from '../controllers/todoController.js';
const router = express.Router();

router.get('/', readTodos);
router.post('/', createTodo);

export default router;
