import foodModel from "../models/foodModel.js";

export async function addfood(req, res) {
  try {
    const file = `${req.file}`;
    console.log(req.body, file);

    const data = await foodModel.create(req.body);
    return res.json({ status: "success", data });
  } catch (error) {
    return res.json({ status: "failed", message: error.message });
  }
}

export async function allfood(req, res) {
  try {
    const data = await foodModel.find();
    return res.json({ status: "success", data });
  } catch (error) {
    return res.json({ status: "failed", message: error.message });
  }
}
