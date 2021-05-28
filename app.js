import express from 'express';
import dotenv from 'dotenv';
// import mongoose from 'mongoose';
import cors from 'cors';

import db from './config/db/index.js';
import todosRouter from './routes/todos.js';

const app = express();

db.connect();

dotenv.config();

app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use('/todos', todosRouter);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log('listening on port ' + PORT));
