import express from "express";
import cors from "cors";
import { TransactionModel } from "./db";
import mongoose from "mongoose";
import * as dotenv from "dotenv";
dotenv.config();  

const MONGO_URL = process.env.MONGO_URL;
if (!MONGO_URL) {
  throw new Error('MONGO_URI is not defined in the environment variables');
}


const app = express();
app.use(cors());
app.use(express.json());

app.get("/api/v1/test", (req, res)=>{
    res.json({body:"test ok"});
});

app.post("/api/v1/transaction", async(req, res) => {

    await mongoose.connect(MONGO_URL);
    console.log(MONGO_URL);

    const price = req.body.price;
    const name = req.body.name;
    const description = req.body.description;
    const datetime = req.body.datetime;

    const transaction = await TransactionModel.create({
        price: price,
        name: name,
        description: description,
        datetime: datetime
    });
    res.json(transaction);
});

app.get('/api/v1/transactions', async (req, res) => {
    await mongoose.connect(MONGO_URL);
    console.log(MONGO_URL);
    const transactions = await TransactionModel.find();

    res.json(transactions);
})


app.listen(4000);
