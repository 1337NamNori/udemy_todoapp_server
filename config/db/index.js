import mongoose from 'mongoose';

const mongooseURL = `mongodb+srv://namnori:todoapp123@cluster0.5di6s.mongodb.net/udemy_todoapp?retryWrites=true&w=majority`;

async function connect() {
    try {
        await mongoose.connect(mongooseURL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true,
        });
        console.log('Connect Successfully');
    } catch (error) {
        console.log('Connect Failed!!!');
        console.log(error);
    }
}
export default { connect };
