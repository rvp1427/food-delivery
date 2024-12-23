import mongoose from "mongoose";

export async function dbconnect() {
  mongoose
    .connect(
      "mongodb+srv://vrishabhrajput:eo5WLEBXA1McGWB5@cluster0.w1wq7.mongodb.net/food-delivery"
    )
    .then(() => console.log("database connected successfully!"));
}
