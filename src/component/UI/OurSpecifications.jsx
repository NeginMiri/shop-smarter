import React from "react";
import { FaTelegramPlane } from "react-icons/fa";
import { BiTimer } from "react-icons/bi";
import { BiSupport } from "react-icons/bi";
const OurSpecifications = () => {
  return (
    <>
      <section className="grid grid-cols-1 gap-10  pt-20 px-5 ">
        <div className="flex flex-col justify-center items-center px-5 gap-2">
          <h1 className="text-[24px] font-bold">Our Specifications</h1>
          <p className="text-[14px] text-center text-tx-200 font-medium">
            We offer top-tier service and convenience to ensure your shopping
            experience is smooth, secure and completely hassle-free.
          </p>
        </div>
        <div className="relative mt-20 flex py-10  justify-center items-center flex-col justify-center items-center px-5 gap-2 bg-bg-900 w-full rounded-[10px] border border-bor-200">
          <div className="absolute -top-5 w-[40px] h-[40px] bg-tx-100 text-white rounded-[10px] text-[30px] flex justify-center items-center">
            <FaTelegramPlane />
          </div>
          <h3 className="text-[16px] font-bold">Free Shipping</h3>
          <p className="text-[14px] text-center text-tx-200 font-medium">
            Enjoy fast, free delivery on every order no conditions, just
            reliable doorstep.
          </p>
        </div>

        <div className="relative flex py-10  justify-center items-center flex-col justify-center items-center px-5 gap-2 bg-bg-10 w-full rounded-[10px] border border-bor-300">
          <div className="absolute -top-5 w-[40px] h-[40px] bg-bg-11 text-white rounded-[10px] text-[30px] flex justify-center items-center">
            <BiTimer />
          </div>
          <h3 className="text-[16px] font-bold">7 Days easy Return</h3>
          <p className="text-[14px] text-center text-tx-200 font-medium">
            Change your mind? No worries. Return any item within 7 days.
          </p>
        </div>

        <div className="relative flex py-10  justify-center items-center flex-col justify-center items-center px-5 gap-2 bg-bg-12 w-full rounded-[10px] border border-bor-400">
          <div className="absolute -top-5 w-[40px] h-[40px] bg-bg-13 text-white rounded-[10px] text-[30px] flex justify-center items-center">
            <BiSupport />
          </div>
          <h3 className="text-[16px] font-bold">24/7 Customer Support</h3>
          <p className="text-[14px] text-center text-tx-200 font-medium">
            We're here for you. Get expert help with our customer support.
          </p>
        </div>
      </section>
    </>
  );
};

export default OurSpecifications;
