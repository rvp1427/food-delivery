import { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import LoginSignup from "./LoginSignup";
import { NavLink } from "react-router-dom";
import useLocalStorage from "../hooks/useLocalStorage";

function Navbar({ cartItem, handleOpen, isOpen }) {
  // const [isOpen, setIsOpen] = useState(false);
  const [cartTotal, setCartTotal] = useState(0);
  console.log(cartItem);

  const { token } = useLocalStorage();

  // function handleOpen() {
  //   setIsOpen((prev) => !prev);
  //   // toast.success("donedjksjd");
  // }

  useEffect(() => {
    if (cartItem) {
      const data = Object.entries(cartItem);
      const res = data.reduce((prev, curr) => prev + curr[1], 0);
      // console.log(res);
      // cartTotal = res;
      setCartTotal(res);
      // console.log(cartTotal);
    }
  }, [cartItem, cartTotal, token]);

  // const cartTotal = cartItem &&

  return (
    <>
      {isOpen ? <LoginSignup handleOpen={handleOpen} /> : ""}
      <div className="con">
        <nav className="flex justify-between">
          <div>
            <img src="frontend_assets/logo.png" alt="test" />
          </div>
          <ul className="flex gap-5 items-center">
            <li>
              <NavLink to="/">home</NavLink>
            </li>
            <li>
              <NavLink to="#">menu</NavLink>
            </li>
            <li>
              <a href="#">mobile app</a>
            </li>
            <li>
              <a href="#">contact us</a>
            </li>
          </ul>
          <div className="flex gap-5 items-center">
            <a href="#" className="text-3xl">
              <CiSearch />
            </a>
            <NavLink to="/cart" className="relative text-3xl">
              <CiShoppingCart />
              <div className="w-fit h-5 absolute p-2 bg-orange-400 rounded-full -top-3 left-4 text-center text-sm text-white flex justify-center items-center">
                {cartTotal}
              </div>
            </NavLink>
            {!token ? (
              <button className="btn" onClick={handleOpen}>
                sign in
              </button>
            ) : (
              <a href="#">
                <div className="w-5">
                  <img src="frontend_assets/profile_icon.png" alt="profile" />
                </div>
              </a>
            )}
          </div>
        </nav>
      </div>
    </>
  );
}

export default Navbar;
