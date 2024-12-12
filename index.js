import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { TaskRoutes } from './Routes/TaskRoutes.js';

const app = express();
dotenv.config();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 8000;

app.get('/', (req, res)=>{
    res.status(200).send("Welcome to Backend Server")
})

app.use('/tasks', TaskRoutes)

app.listen(PORT, ()=>{
    console.log("Server Start Successfully...");
})