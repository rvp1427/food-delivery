import express from "express";
import { addfood, allfood } from "../controllers/foodController.js";

const foodRouter = express.Router();

foodRouter.post("/add", addfood);
foodRouter.get("/all", allfood);

export default foodRouter;
