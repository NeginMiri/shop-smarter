import React from "react";
import { LuFacebook } from "react-icons/lu";
import { FaInstagram } from "react-icons/fa";
import { FiTwitter } from "react-icons/fi";
import { LuLinkedin } from "react-icons/lu";
import { MdOutlineMailOutline } from "react-icons/md";
import { LuPhone } from "react-icons/lu";
import { MdOutlineLocationOn } from "react-icons/md";
const Footer = () => {
  return (
    <>
      <section className="flex flex-col px-5 gap-8">
        <div className="flex flex-col gap-5">
          <div>
            <a className="text-[36px] text-tx-100 font-bold">
              go<span className="text-tx-200">cart</span>.
            </a>
            
          </div>
          <p className="text-[14px] text-tx-200 font-medium">
            Welcome to gocart, your ultimate destination for the latest and
            smartest gadgets. From smartphones and smartwatches to essential
            accessories, we bring you the best in innovation — all in one place.
          </p>
          <div className="flex gap-2">
            <div className="w-[40px] h-[40px] rounded-[20px] bg-bg-800 text-gray-500 flex justify-center items-center">
              <LuFacebook />
            </div>
            <div className="w-[40px] h-[40px] rounded-[20px] bg-bg-800 text-gray-500 flex justify-center items-center">
              <FaInstagram />
            </div>
            <div className="w-[40px] h-[40px] rounded-[20px] bg-bg-800 text-gray-500 flex justify-center items-center">
              <FiTwitter />
            </div>
            <div className="w-[40px] h-[40px] rounded-[20px] bg-bg-800 text-gray-500 flex justify-center items-center">
              <LuLinkedin />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col gap-2">
            <h3 className="font-medium text-tx-200 text-[14px]">PRODUCTS</h3>
            <p className="text-[14px] text-gray-500">Earphones</p>

            <p className="text-[14px] text-gray-500">Headphones</p>
            <p className="text-[14px] text-gray-500">Smartphones</p>
            <p className="text-[14px] text-gray-500">Laptops</p>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="font-medium text-tx-200 text-[14px]">WEBSITE?</h3>
            <p className="text-[14px] text-gray-500">Home</p>
            <p className="text-[14px] text-gray-500">Privacy Policy</p>
            <p className="text-[14px] text-gray-500">Become Plus Member</p>
            <p className="text-[14px] text-gray-500">Create Your Store</p>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="font-medium text-tx-200 text-[14px]">CONTACT</h3>
            <div className="flex text-[14px] text-gray-500 items-center gap-2">
              <LuPhone />
              <p>+1-212-456-7890</p>
            </div>
            <div className="flex text-[14px] text-gray-500 items-center gap-2">
              <MdOutlineMailOutline />
              <p>contact@example.com</p>
            </div>

            <div className="flex text-[14px] text-gray-500 items-center gap-2">
              <MdOutlineLocationOn />
              <p>794 Francisco, 94102</p>
            </div>
          </div>
        </div>
        <div className="border-t border-t-bor-100 py-4 text-gray-500 text-[14px]">
          <p>Copyright 2025 © gocart All Right Reserved.</p>
        </div>
      </section>
    </>
  );
};

export default Footer;
