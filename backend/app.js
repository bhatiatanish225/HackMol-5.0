import express from 'express';
import mongoose from 'mongoose';
import router from './routes/user-routes.js';
import cors from 'cors'
import dotenv from 'dotenv';
dotenv.config({path:'./config.env'});


const app=express();
app.use(cors());
app.use(express.json());
app.use("/api/user",router);
const dbpass=process.env.DBPASS;
mongoose
.connect(dbpass)
.then(() => app.listen(5000))
.then(()=>console.log("Connected To Database and Listening to Localhost 5000"))
.catch((err) => console.log(err));
