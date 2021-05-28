import express from 'express';
import {
    readTodos,
    createTodo,
    updateTodo,
    deleteTodo,
} from '../controllers/todoController.js';
const router = express.Router();

router.get('/', readTodos);
router.post('/', createTodo);
router.put('/:id', updateTodo);
router.delete('/:id', deleteTodo);

export default router;
