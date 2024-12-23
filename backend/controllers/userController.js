import validator from "validator";
import userModel from "../models/userModel.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

function createtoken(id) {
  return jwt.sign({ id }, process.env.JWT_SECRET);
}

export async function signup(req, res) {
  const { name, email, password } = req.body;

  // console.log(email);
  try {
    // check if user exists

    const data = await userModel.findOne({ email });
    // console.log(data);
    if (data) {
      return res.json({ status: "failed", message: "user already exists" });
    }
    // check if email,password is valid

    if (!validator.isEmail(email)) {
      return res.json({ status: "failed", message: "invalid email" });
    }

    if (password.length < 8) {
      return res.json({ status: "failed", message: "password is too short" });
    }

    // encrypt the password

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const userData = { name, email, password: hashedPassword };
    const user = await userModel.create(userData);
    // console.log(user);

    // res.json({ status: "success", user });

    //  create jwttoken

    const jwt = createtoken(user._id);
    // console.log(jwt);
    return res.json({ status: "success", jwt });
  } catch (error) {
    return res.json({ status: "failed", error });
  }
}
export async function login(req, res) {
  const { email, password } = req.body;

  // if user exists or not
  const user = await userModel.findOne({ email });
  console.log(user);

  if (!user) {
    return res.json({ status: "failed", message: "user not found" });
  }

  // password check
  const hashedPass = await bcrypt.compare(password, user.password);
  console.log(hashedPass);

  if (!hashedPass) {
    return res.json({ status: "failed", message: "incorrect password" });
  }

  const token = createtoken(user._id);

  return res.json({ status: "success", token });
}
