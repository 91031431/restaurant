import mongoose from 'mongoose';
import express from 'express';
import userRouter from './api/routes/userRouter';
import bodyParser from 'body-parser';

const MONGODB_URI = 'mongodb+srv://demi:159632Dami@cluster0-neife.mongodb.net/test?retryWrites=true&w=majority';
const app = express();
const PORT = 3000;

//connecting with Database
mongoose.connect(MONGODB_URI,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
);

//bodyparser setup
app.use(bodyParser.urlencoded({ extend: true }));
app.use(bodyParser.json());

mongoose.connection.on('connected', () => {
    console.log('Mongoose is connected');
});

userRouter(app);

//Server listen API connection
app.listen(PORT, () =>
    console.log(`sever port ${PORT}`)
);