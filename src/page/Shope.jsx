import { useEffect, useState } from "react";
import MainLayout from "../component/layout/MainLayout";
import { IoStar } from "react-icons/io5";
import { Link } from "react-router";
function Shope() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await fetch("https://api.escuelajs.co/api/v1/products");
        const data = await res.json();
        setProducts(data.slice(0, 12));
        
      } catch (error) {
        console.log(error);
      }
    };

    getData();
  }, []);

  return (
    <MainLayout>
      <section className="flex flex-col">
        <h1 className="text-[34px] font-medium px-5 py-2"> All Products</h1>
        <div className="grid grid-cols-2 gap-5 p-5">
          {products.map((product) => (
            <Link key={product.id} to={`/product/${product.id}`}>
            <div className=" rounded-lg p-3">
              <div className="bg-bg-800 w-[154px] h-[160px] rounded-[15px] flex justify-center items-center">
                <img
                  className="w-[80px] h-[120px] object-contain"
                  src={product.images?.[0]}
                  alt={product.title}
                />
              </div>

              <div className="flex flex-col pt-[8px] gap-1 relative">
                <div className="flex justify-between text-[14px] text-tx-400">
                  <p className="line-clamp-1">{product.title}</p>
                  <p className="font-bold">${product.price}</p>
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
             </Link>
          ))}
        </div>
      </section>
    </MainLayout>
  );
}

export default Shope;
