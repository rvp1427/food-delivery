import mongoose from "mongoose";

const foodSchema = new mongoose.Schema({
  name: { type: String, required: [true, "food name is required"] },
  description: { type: String },
  category: { type: String },
  price: { type: Number, required: [true, "food price is required"] },
  image: { type: String },
});

const foodModel = mongoose.models.food || mongoose.model("food", foodSchema);

export default foodModel;
