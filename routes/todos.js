import express from 'express';
import {
    readTodos,
    createTodo,
    updateTodo,
} from '../controllers/todoController.js';
const router = express.Router();

router.get('/', readTodos);
router.post('/', createTodo);
router.put('/:id', updateTodo);

export default router;
