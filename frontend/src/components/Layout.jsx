import { Outlet } from "react-router";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useState } from "react";

function Layout({ cartItem, handleOpen, isOpen }) {
  // const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar cartItem={cartItem} handleOpen={handleOpen} isOpen={isOpen} />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Layout;
