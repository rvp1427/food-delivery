import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import axios from "axios";
import toast from "react-hot-toast";

const url = "http://localhost:4000/api/user";

function LoginSignup({ handleOpen }) {
  const [isSignup, setIsSignup] = useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    // console.log(userData);
    if (isSignup) {
      const userData = { name, email, password };
      const { data } = await axios.post(`${url}/signup`, userData);

      if (data.status === "success") {
        toast.success("signup successfully");
        handleOpen();
      } else {
        toast.error(data.message);
      }
      console.log(data);
    } else {
      const userData = { email, password };
      const { data } = await axios.post(`${url}/login`, userData);
      if (data.status === "success") {
        toast.success("signin successfully");
        localStorage.setItem("token", data.token);
        handleOpen();
        // console.log(data);
      } else {
        toast.error(data.message);
      }
    }
  }

  return (
    <div className="bg-black/60 w-full min-h-screen fixed z-20 flex justify-center items-center">
      <div className="bg-white p-8 space-y-6 rounded-md w-[25rem]">
        <div className="flex justify-between ">
          <h2>{isSignup ? "Signup" : "Login"}</h2>
          <button onClick={handleOpen}>
            <IoMdClose />
          </button>
        </div>
        <form className="flex flex-col space-y-6" onSubmit={handleSubmit}>
          {isSignup && (
            <input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          )}
          <input
            type="text"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="text"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="btn bg-orange-500 text-white py-2 hover:bg-orange-600">
            {isSignup ? "Create Account" : "Login"}
          </button>
        </form>
        {isSignup ? (
          <p>
            Already have an account?
            <button onClick={() => setIsSignup((prev) => !prev)}>
              <a href="#" className="underline text-orange-400">
                Login Here
              </a>
            </button>
          </p>
        ) : (
          <p>
            Don't have an account?
            <button onClick={() => setIsSignup((prev) => !prev)}>
              <a href="#" className="underline text-orange-400">
                Signup Here
              </a>
            </button>
          </p>
        )}
      </div>
    </div>
  );
}

export default LoginSignup;
