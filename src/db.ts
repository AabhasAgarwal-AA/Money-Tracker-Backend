import mongoose, { model, Schema } from "mongoose";

const TransactionSchema = new Schema({
    name: {type: String, required: true},
    price: {type: Number, required: true},
    description: {type: String, required: true},
    datetime: {type: String, required: true}

});

export const TransactionModel = model("Transaction", TransactionSchema);

