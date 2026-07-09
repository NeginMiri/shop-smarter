import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";
import { FaCartShopping } from "react-icons/fa6";
import { Link } from "react-router";
import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
const Header = () => {
  const [showBanner, setShowBanner] = useState(true);
  const { cartCount } = useContext(CartContext);
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
        <div className="flex px-5 py-2 justify-between items-center relative items-center border-b border-b-bor-100">
          <div>
            <a className="text-[30px] text-tx-100 font-bold">
              go<span className="text-tx-200">cart</span>.
            </a>
            <p className="absolute left-29 top-4 bg-bg-100 text-white font-bold w-[46px] h-[20px] rounded-[10px] flex justify-center items-center text-[12px]">
              plus
            </p>
          </div>

          <div className="flex gap-2 items-center text-gray-700">
            <Link to="/">
              <p className="text-[14px]">Home</p>
            </Link>

            <Link to="/Shope">
              <p className="text-[14px]">Shop</p>
            </Link>

            <Link to="/Card">
              <div className="flex relative gap-2">
                <FaCartShopping />
                <span className="text-white absolute -top-4 left-3 w-[20px] h-[20px] flex justify-center items-center rounded-full text-[10px] bg-gray-700">
                  {cartCount}
                </span>
                <p className="text-[16px]">Cart</p>
              </div>
            </Link>
            <div>
              <button className="bg-bg-200 w-[90px] h-[32px] text-white font-medium rounded-[20px]">
                login
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Header;
