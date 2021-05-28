import mongoose from 'mongoose';
import Todo from '../models/Todos.js';

export const readTodos = async (req, res, next) => {
    try {
        const todos = await Todo.find();
        res.status(200).json(todos);
    } catch (err) {
        console.log(err);
        res.status(404).json({ error: err.message });
    }
};

export const createTodo = async (req, res, next) => {
    const todo = new Todo(req.body);
    try {
        await todo.save();
        res.status(201).json(todo);
    } catch (err) {
        console.log(err);
        res.status(409).json({ error: err.message });
    }
};

export const updateTodo = async (req, res, next) => {
    const { id } = req.params;
    const { title, content } = req.body;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        res.status(404).send('The ID is not valid');
    }
    const todo = { title, content, _id: id };
    try {
        await Todo.findByIdAndUpdate(id, todo, { new: true });
        res.status(201).json(todo);
    } catch (err) {
        console.log(err);
        res.status(409).json({ error: err.message });
    }
};

export const deleteTodo = async (req, res, next) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        res.status(404).send('The ID is not valid');
    }
    try {
        await Todo.findByIdAndRemove(id);
        res.status(201).send('ok');
    } catch (err) {
        console.log(err);
        res.status(409).json({ error: err.message });
    }
};
