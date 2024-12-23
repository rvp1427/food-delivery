import { CiFacebook } from "react-icons/ci";
import { CiTwitter } from "react-icons/ci";
import { FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <div className="bg-slate-600 mt-auto text-white">
      <div className="con flex flex-col sm:flex-row text-center justify-start">
        <div className="flex flex-col w-full space-y-5">
          <div className="self-center">
            <img src="/frontend_assets/logo.png" alt="logo" />
          </div>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto sed
            velit quia nesciunt ipsam laboriosam, sunt possimus recusandae,
            voluptas eaque quo suscipit ut veritatis, nam vel ea tempore quae
            numquam.
          </p>
          <div className="flex items-center justify-center gap-6">
            <a href="#" className="text-white text-5xl">
              <CiFacebook />
            </a>
            <a href="#" className="text-white text-5xl">
              <CiTwitter />
            </a>
            <a href="#" className="text-white text-5xl">
              <FaLinkedin />
            </a>
          </div>
        </div>
        <div className="flex flex-col w-full ">
          <h3>company</h3>
          <div className="flex justify-center gap-4 sm:flex-col">
            <a href="#" className="text-white">
              Home
            </a>
            <a href="#" className="text-white">
              About us
            </a>
            <a href="#" className="text-white">
              Delivery
            </a>
            <a href="#" className="text-white">
              Privacy policy
            </a>
          </div>
        </div>
        <div className="flex flex-col w-full">
          <h3>get in touch</h3>
          <div className="flex justify-center gap-5">
            <p>+1234567890</p>
            <p>contact@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
