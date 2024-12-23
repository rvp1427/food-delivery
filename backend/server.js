import express from "express";
import cors from "cors";
import { dbconnect } from "./configs/db.js";
import foodRouter from "./routes/foodRouter.js";
import userRouter from "./routes/userRouter.js";
import "dotenv/config";

//  app config
const app = express();

// middlewares
app.use(express.json());
app.use(cors());

// db connect

dbconnect();

//  requests
app.get("/", (req, res) => {
  res.send("hello from server");
});

app.use("/api/food", foodRouter);

app.use("/api/user", userRouter);

// listening on

app.listen(4000, (req, res) => {
  console.log(`server listening on http://localhost:4000/`);
});

//arduurIJFVNjYYJ9
// eo5WLEBXA1McGWB5

// mongodb+srv://vrishabhrajput:<db_password>@cluster0.w1wq7.mongodb.net/?
