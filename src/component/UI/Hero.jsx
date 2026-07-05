import React from 'react'
import { AiOutlineRight } from "react-icons/ai";
import { AiOutlineArrowRight } from "react-icons/ai";
const Hero = () => {
  return (
    <>
      <section className="flex flex-col py-10 px-5 gap-5">
        <div className="flex flex-col pt-10 px-5 bg-bg-300 rounded-[15px]">
          <div className="flex flex-col">
            <div className="bg-bg-500 py-1 px-2 rounded-[15px] flex justify-between items-center">
              <div className="text-white bg-bg-400 w-[58px] h-[24px] rounded-[10px] justify-center font-medium items-center flex text-[12px]">
                <span>NEWS</span>
              </div>

              <p className="text-[12px] font-medium text-bg-400">
                {" "}
                Free Shipping on Orders Above $50!{" "}
              </p>

              <AiOutlineRight className="text-[15px] font-medium text-bg-400" />
            </div>
            <div className="flex flex-col gap-3">
              <h1 className="text-3xl sm:text-5xl leading-[1.2] my-3 font-medium bg-gradient-to-r from-slate-600 to-[#A0FF74] bg-clip-text text-transparent max-w-xs  sm:max-w-md">
                Gadgets you'll love. Prices you'll trust.
              </h1>
              <div className="text-tx-300">
                <p className="text-[14px] font-medium">Starts from</p>
                <p className="text-[30px] font-medium">$4.90</p>
              </div>
              <button className="bg-tx-300 px-4 py-2 w-fit text-white font-medium rounded-[10px] text-[16px]">
                LEARN MORE
              </button>
            </div>
          </div>
          <img src="./public/hero1.png"  />
        </div>
        <div className="flex flex-col gap-5">
          <div className="grid grid-cols-2 px-5 py-8 items-center bg-bg-600 rounded-[20px]">
            <div className="flex flex-col gap-3">
              <p className="text-3xl font-medium bg-gradient-to-r from-slate-800 to-[#FFAD51] bg-clip-text text-transparent max-w-40">
                Best products
              </p>
              <div className="flex items-center  gap-2 text-tx-400">
                <p>View more</p>
                <AiOutlineArrowRight />
              </div>
            </div>
            <div>
              <img src="./public/hero2.png"  />
            </div>
          </div>

          <div className="grid grid-cols-2 px-5 py-8 items-center bg-bg-700 rounded-[20px]">
            <div className="flex flex-col gap-3">
              <p className="text-3xl font-medium bg-gradient-to-r from-slate-800 to-[#78B2FF] bg-clip-text text-transparent max-w-40">
                20% discounts
              </p>
              <div className="flex items-center  gap-2 text-tx-400">
                <p>View more</p>
                <AiOutlineArrowRight />
              </div>
            </div>
            <div>
              <img src="./public/hero3.png"  />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero