import mongoose from 'mongoose';

const Schema = mongoose.Schema;
const Todo = new Schema(
    {
        title: { type: String, required: true },
        content: { type: String, required: true },
    },
    {
        timestamps: {
            createdAt: 'createdTime',
            updatedAt: 'updatedTime',
        },
    },
);

export default mongoose.model('Todo', Todo);
