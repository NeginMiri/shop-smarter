import React from 'react'
import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";

const Header = () => {
  const [showBanner, setShowBanner] = useState(true);
  return (
    <>
      <section className="flex flex-col w-full">
        {showBanner && (
          <div className="flex px-5 py-2 justify-between items-center bg-gradient-to-r from-violet-500 via-[#9938CA] to-[#E0724A] text-white text-[14px] font-medium">
            <p>Get 20% OFF on Your First Order!</p>

            <AiOutlineClose
              onClick={() => setShowBanner(false)}
              className="w-[20px] h-[20px] cursor-pointer"
            />
          </div>
        )}
        <div className="flex px-5 py-2 justify-between relative items-center border-b border-b-bor-100">
          <div>
            <a className="text-[36px] text-tx-100 font-bold">
              go<span className="text-tx-200">cart</span>.
            </a>
            <p className="absolute left-33 top-5 bg-bg-100 text-white font-bold w-[46px] h-[20px] rounded-[10px] flex justify-center items-center text-[12px]">
              plus
            </p>
          </div>
          <div>
            <button className="bg-bg-200 w-[90px] h-[32px] text-white font-medium rounded-[20px]">
              login
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default Header