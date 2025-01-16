import express from "express";
import cors from "cors";
import { TransactionModel } from "./db";
import { MONGO_URL } from "./config";
import mongoose from "mongoose";

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


app.listen(4000);
