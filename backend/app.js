import express from 'express';
import mongoose from 'mongoose';
import router from './routes/user-routes.js';

const app=express();
app.use(express.json());
app.use("/api/user",router)
mongoose
.connect(
  "mongodb+srv://mokshmahajan2004:jkWkUvQtUpsOpcOk@cluster0.xcdoxoi.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
)
.then(() => app.listen(5000))
.then(()=>console.log("Connected To Database and Listening to Localhost 5000"))
.catch((err) => console.log(err));
