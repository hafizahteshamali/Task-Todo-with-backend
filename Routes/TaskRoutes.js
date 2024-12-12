import express from 'express';

export const TaskRoutes = express.Router();

const TaskData = [];

TaskRoutes.get('/', async (req, res)=>{
    try {
      await  res.status(200).send({status: 200, message: "success", data: TaskData})
    } catch (error) {
        res.status(400).send({status: 200, message: error})
    }
})

TaskRoutes.post('/post', async (req, res)=>{
    try {
        const data = req.body;
        TaskData.push(data)
        await  res.status(200).send({status: 200, message: "success", data: TaskData})
    } catch (error) {
        res.status(400).send({status: 200, message: error})
    }
})