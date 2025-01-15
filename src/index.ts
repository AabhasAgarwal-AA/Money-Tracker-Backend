import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

app.get("/api/v1/test", (req, res)=>{
    res.json({body:"test ok"});
});

app.post("/api/v1/transaction", (req, res) => {
    res.json(req.body);
});


app.listen(4000);
