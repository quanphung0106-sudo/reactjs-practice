import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv'
import helmet from 'helmet'
import cors from 'cors'
import cookieParser from "cookie-parser";
import route from './routes/index.js';

const app = express();
dotenv.config();

const port = process.env.PORT || 8801;

mongoose
    .connect(process.env.MONGO_URL)
    .then(() => {
        console.log('Connected to the MongoDB!');
    })
    .catch((error) => {
        console.log(`Can not connect to database, ${error}`);
    });

//midleware
app.use(express.json());
app.use(cookieParser());
app.use(helmet());
app.use(cors({ credentials: true, origin: true }));
// app.use(morgan('short'));

// app.use(function (req, res, next) {
//   res.header("Content-Type", "application/json;charset=UTF-8");
//   res.header("Access-Control-Allow-Credentials", true);
//   res.header(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested-With, Content-Type, Accept"
//   );
//   next();
// });

route(app);

app.use((err, req, res, next) => {
    const errorStatus = err.status || 500
    const errorMessage = err.message || "Something went wrong!"

    return res.status(errorStatus).send(errorMessage)
})

app.listen(port, () => {
    console.log(`Connected to server with port: ${port}`);
});