import { Link } from "react-router";
import { AiOutlineArrowRight } from "react-icons/ai";
import { useEffect, useState } from "react";
import { IoStar } from "react-icons/io5";
const AllProdact = () => {
const [products,setProducts] = useState([]);
useEffect (()=>{
  const getData = async () => {
    const res = await fetch(
      "https://api.escuelajs.co/api/v1/products?categoryId=2",
    );
    const data = await res.json();
    setProducts(data);
  }
  getData();
},[]);







  return (
    <>
      <section className="flex flex-col px-5 py-5">
        <div className="flex flex-col justify-center items-center py-4">
          <h1 className="text-tx-300 text-[24px] font-bold">Latest Products</h1>
          <div className="flex justify-center items-center gap-5">
            <h1 className="text-tx-400 text-[14px]">
              Showing 4 of 12 products
            </h1>

            <Link to="/Shope">
              <p className="text-bg-100 text-[14px] flex gap-1 items-center">
                View More
                <AiOutlineArrowRight className="text-bg-100 text-[14px]" />
              </p>
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3 mt-[50px] ">
          {products.slice(0, 4).map((product) => (
            <div key={product.id} className="flex flex-col">
              <div className="bg-bg-800 w-[154px] h-[160px] rounded-[15px] flex justify-center items-center">
                <img
                  className="w-[80px] h-[120px] object-contain"
                  src={product.images[0]}
                  alt={product.title}
                />
              </div>

              <div className="flex flex-col pt-[8px] gap-1 relative">
                <div className="flex justify-between text-[14px] text-tx-400">
                  <p className="line-clamp-1">{product.title}</p>
                  <p className="absolute left-35 font-bold">${product.price}</p>
                </div>

                <div className="flex text-bg-100">
                  <IoStar size={13} />
                  <IoStar size={13} />
                  <IoStar size={13} />
                  <IoStar size={13} />
                  <IoStar size={13} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="flex flex-col px-5 py-5">
        <div className="flex flex-col justify-center items-center py-4">
          <h1 className="text-tx-300 text-[24px] font-bold">Best Selling</h1>
          <div className="flex justify-center items-center gap-5">
            <h1 className="text-tx-400 text-[14px]">
              Showing 8 of 12 products
            </h1>

            <Link to="/Shope">
              <p className="text-bg-100 text-[14px] flex gap-1 items-center">
                View More
                <AiOutlineArrowRight className="text-bg-100 text-[14px]" />
              </p>
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3 mt-[50px]">
          {products.slice(4, 12).map((product) => (
            <div key={product.id} className="flex flex-col">
              <div className="bg-bg-800 w-[154px] h-[160px] rounded-[15px] flex justify-center items-center">
                <img
                  className="w-[80px] h-[120px] object-contain"
                  src={product.images[0]}
                  alt={product.title}
                />
              </div>

              <div className="flex flex-col pt-[8px] gap-1 relative">
                <div className="flex justify-between text-[14px] text-tx-400">
                  <p className="line-clamp-1">{product.title}</p>
                  <p className="absolute left-35 font-bold">${product.price}</p>
                </div>

                <div className="flex text-bg-100">
                  <IoStar size={13} />
                  <IoStar size={13} />
                  <IoStar size={13} />
                  <IoStar size={13} />
                  <IoStar size={13} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default AllProdact;
