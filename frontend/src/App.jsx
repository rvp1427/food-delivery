import { Route, Routes } from "react-router";
import "./App.css";
import Layout from "./components/layout";
import Home from "./components/Home";
import { Toaster } from "react-hot-toast";
import Cart from "./pages/Cart";
import { useState } from "react";

function App() {
  const [cartItem, setCartItem] = useState({});
  const [isOpen, setIsOpen] = useState(false);

  function handleOpen() {
    setIsOpen((prev) => !prev);
    // toast.success("donedjksjd");
  }

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <Layout
              cartItem={cartItem}
              handleOpen={handleOpen}
              isOpen={isOpen}
            />
          }
        >
          <Route
            index
            element={<Home cartItem={cartItem} setCartItem={setCartItem} />}
          />
          <Route
            path="/cart"
            element={
              <Cart
                cartItem={cartItem}
                isOpen={isOpen}
                handleOpen={handleOpen}
              />
            }
          />
          {/* <Route path="menu" element={<Menu />} /> */}
        </Route>
      </Routes>
      <Toaster />
    </>
  );
}

export default App;
