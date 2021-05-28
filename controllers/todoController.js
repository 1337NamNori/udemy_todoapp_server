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

export const createTodos = async (req, res, next) => {
    const todo = new Todo(req.body);
    try {
        await todo.save();
        res.status(201).json(todo);
    } catch (err) {
        console.log(err);
        res.status(409).json({ error: err.message });
    }
};
