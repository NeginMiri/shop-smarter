import MainLayout from "../component/layout/MainLayout";
import { useParams } from "react-router";
import { useEffect, useState, useContext } from "react";
import { IoStar } from "react-icons/io5";
import { FaTags } from "react-icons/fa6";
import { IoTennisballOutline } from "react-icons/io5";
import { RiBankCardFill } from "react-icons/ri";
import { IoMdPerson } from "react-icons/io";
import { FaShoppingBag } from "react-icons/fa";
import { AiOutlineArrowRight } from "react-icons/ai";
import { Link } from "react-router";
import { CartContext } from "../Context/CartContext";

const ProductDetails = () => {
  const { id } = useParams();

  const [product, setProduct] = useState(null);
  const [activeTab, setActiveTab] = useState("description");
const [quantity, setQuantity] = useState(0);
  const { cartCount, setCartCount, cartItems, setCartItems } =
    useContext(CartContext);

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await fetch(
          `https://api.escuelajs.co/api/v1/products/${id}`,
        );

        const data = await res.json();
        setProduct(data);
      } catch (error) {
        console.log(error);
      }
    };

    getProduct();
  }, [id]);

 
const handleAddToCart = () => {
  setQuantity(1);
  setCartCount((prev) => prev + 1);

  const exist = cartItems.find((item) => item.id === product.id);

  if (exist) {
    const updatedItems = cartItems.map((item) =>
      item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item,
    );

    setCartItems(updatedItems);
  } else {
    setCartItems([
      ...cartItems,
      {
        ...product,
        quantity: 1,
      },
    ]);
  }
};
const increaseQuantity = () => {
  setQuantity((prev) => prev + 1);
  setCartCount((prev) => prev + 1);

  const updatedItems = cartItems.map((item) =>
    item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item,
  );

  setCartItems(updatedItems);
};

const decreaseQuantity = () => {
  if (quantity > 1) {
    setQuantity((prev) => prev - 1);
    setCartCount((prev) => prev - 1);

    const updatedItems = cartItems.map((item) =>
      item.id === product.id ? { ...item, quantity: item.quantity - 1 } : item,
    );

    setCartItems(updatedItems);
  } else {
    setQuantity(0);
    setCartCount((prev) => prev - 1);

    setCartItems(cartItems.filter((item) => item.id !== product.id));
  }
};

  if (!product) {
    return (
      <MainLayout>
        <h1 className="p-10 text-2xl">Loading...</h1>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <section className="p-5">
        <div className="bg-bg-800 rounded-[20px] flex justify-center items-center h-[320px]">
          <img
            src={product.images?.[0]}
            alt={product.title}
            className="w-[200px] h-[250px] object-contain"
          />
        </div>

        <h1 className="text-[30px] text-tx-300 font-bold mt-8">
          {product.title}
        </h1>

        <div className="flex pt-3 items-center gap-3">
          <div className="flex text-bg-100">
            <IoStar size={13} />
            <IoStar size={13} />
            <IoStar size={13} />
            <IoStar size={13} />
            <IoStar size={13} />
          </div>

          <p className="text-gray-500 text-[14px] font-medium">6 Reviews</p>
        </div>

        <div className="flex gap-5">
          <p className="text-[24px] font-bold text-tx-300 mt-3">
            ${product.price}
          </p>

          <p className="text-[20px] font-bold text-gray-600 mt-3 line-through">
            $40
          </p>
        </div>

        <div className="flex gap-2 text-gray-500 mt-4">
          <FaTags />
          <p>Save 28 % right now</p>
        </div>

        {quantity === 0 ? (
          <button
            onClick={handleAddToCart}
            className="bg-tx-300 text-white py-3 px-10 rounded-[6px] mt-15 mb-5"
          >
            Add to Cart
          </button>
        ) : (
          <div className="flex items-center gap-4 mt-15 mb-5">
            <div className="flex items-center gap-5">
              <button
                onClick={decreaseQuantity}
                className="w-[45px] h-[45px] rounded-lg border border-gray-300 text-xl"
              >
                -
              </button>

              <span className="text-xl font-bold">{quantity}</span>

              <button
                onClick={increaseQuantity}
                className="w-[45px] h-[45px] rounded-lg border border-gray-300 text-xl"
              >
                +
              </button>
            </div>

            <Link to="/Card">
              <button className="bg-tx-300 text-white py-3 px-10 rounded-[6px] mt-5 mb-5">
                View Cart
              </button>
            </Link>
          </div>
        )}

        <div className="flex flex-col gap-3 border-t border-t-bor-100 py-4 text-gray-500 text-[17px]">
          <div className="flex gap-2 items-center">
            <IoTennisballOutline />
            <p> Free shipping worldwide </p>
          </div>
          <div className="flex gap-2 items-center">
            <RiBankCardFill />
            <p> 100% Secured Payment </p>
          </div>
          <div className="flex gap-2 items-center">
            <IoMdPerson />
            <p> Trusted by top brands </p>
          </div>
        </div>

        <div className="flex border-b border-gray-200 mt-8 mb-5">
          <button
            onClick={() => setActiveTab("description")}
            className={`py-2 px-4 ${activeTab === "description" ? "border-b-2 border-black font-bold" : "text-gray-400"}`}
          >
            Description
          </button>
          <button
            onClick={() => setActiveTab("reviews")}
            className={`py-2 px-4 ${activeTab === "reviews" ? "border-b-2 border-black font-bold" : "text-gray-400"}`}
          >
            Reviews
          </button>
        </div>

        <div className="min-h-[100px]">
          {activeTab === "description" ? (
            <p className="text-gray-500 leading-7">{product.description}</p>
          ) : (
            <div className="space-y-4 flex flex-col">
              <div className="flex flex-col border border-gray-300 rounded-[10px] px-3 py-3  gap-5 mb-10">
                <div className="flex text-bg-100">
                  <IoStar size={13} />
                  <IoStar size={13} />
                  <IoStar size={13} />
                  <IoStar size={13} />
                  <IoStar className="text-gray-300" size={13} />
                </div>
                <p className="text-gray-600 text-[14px] ">
                  This product is great. I love it! You made it so simple. My
                  new site is so much faster and easier to work with than my old
                  site.
                </p>
                <p className="text-gray-800 text-[14px] font-bold">
                  Jenny Wilson
                </p>
                <p className="text-gray-600 text-[14px] ">Sat Jul 19 2025</p>
              </div>

              <div className="flex flex-col border border-gray-300 rounded-[10px] px-3 py-3  gap-5 mb-10">
                <div className="flex text-bg-100">
                  <IoStar size={13} />
                  <IoStar size={13} />
                  <IoStar size={13} />
                  <IoStar size={13} />
                  <IoStar size={13} />
                </div>
                <p className="text-gray-600 text-[14px] ">
                  I was a bit skeptical at first, but this product turned out to
                  be even better than I imagined. The quality feels premium,
                  it's easy to use, and it delivers exactly what was promised.
                  I've already recommended it to friends and will definitely
                  purchase again in the future.
                </p>
                <p className="text-gray-800 text-[14px] font-bold">
                  Kristin Watson
                </p>
                <p className="text-gray-600 text-[14px] ">Sat Jul 19 2025</p>
              </div>

              <div className="flex flex-col border border-gray-300 rounded-[10px] px-3 py-3  gap-5 mb-10">
                <div className="flex text-bg-100">
                  <IoStar size={13} />
                  <IoStar size={13} />
                  <IoStar size={13} />
                  <IoStar size={13} />
                  <IoStar className="text-gray-300" size={13} />
                </div>
                <p className="text-gray-600 text-[14px] ">
                  This product is amazing. I love it! You made it so simple. My
                  new site is so much faster and easier to work with than my old
                  site.
                </p>
                <p className="text-gray-800 text-[14px] font-bold">
                  Bessie Cooper
                </p>
                <p className="text-gray-600 text-[14px] ">Sat Jul 19 2025</p>
              </div>

              <div className="flex flex-col border border-gray-300 rounded-[10px] px-3 py-3  gap-5 mb-10">
                <div className="flex text-bg-100">
                  <IoStar size={13} />
                  <IoStar size={13} />
                  <IoStar size={13} />
                  <IoStar size={13} />
                  <IoStar size={13} />
                </div>
                <p className="text-gray-600 text-[14px] ">
                  This product is great. I love it! You made it so simple. My
                  new site is so much faster and easier to work with than my old
                  site.
                </p>
                <p className="text-gray-800 text-[14px] font-bold">
                  Kristin Watson
                </p>
                <p className="text-gray-600 text-[14px] ">Sat Jul 19 2025</p>
              </div>

              <div className="flex flex-col border border-gray-300 rounded-[10px] px-3 py-3  gap-5 mb-10">
                <div className="flex text-bg-100">
                  <IoStar size={13} />
                  <IoStar size={13} />
                  <IoStar size={13} />
                  <IoStar size={13} />
                  <IoStar className="text-gray-300" size={13} />
                </div>
                <p className="text-gray-600 text-[14px] ">
                  Overall, I'm very happy with this purchase. It works as
                  described and feels durable. The only reason I didn't give it
                  five stars is because of a small issue (such as setup taking a
                  bit longer than expected, or packaging being slightly
                  damaged). Still, highly recommend it for anyone looking for a
                  reliable option.
                </p>
                <p className="text-gray-800 text-[14px] font-bold">
                  Jenny Wilson
                </p>
                <p className="text-gray-600 text-[14px] ">Sat Jul 19 2025</p>
              </div>

              <div className="flex flex-col border border-gray-300 rounded-[10px] px-3 py-3  gap-5 mb-10">
                <div className="flex text-bg-100">
                  <IoStar size={13} />
                  <IoStar size={13} />
                  <IoStar size={13} />
                  <IoStar size={13} />
                  <IoStar size={13} />
                </div>
                <p className="text-gray-600 text-[14px] ">
                  This product is great. I love it! You made it so simple. My
                  new site is so much faster and easier to work with than my old
                  site.
                </p>
                <p className="text-gray-800 text-[14px] font-bold">
                  Kristin Watson
                </p>
                <p className="text-gray-600 text-[14px] ">Sat Jul 19 2025</p>
              </div>
            </div>
          )}
        </div>

        <div className="flex items-center gap-3 py-20">
          <div className="w-[44px] h-[44px] text-green-500 rounded-full border flex justify-center items-center text-[20px] border-gray-500">
            <FaShoppingBag />
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-gray-800 font-medium text-[14px]">
              Product by Happy Shop
            </p>
            <Link to="/Shope">
              <p className="text-bg-100 text-[14px] flex gap-1 items-center">
                View More
                <AiOutlineArrowRight className="text-bg-100 text-[14px]" />
              </p>
            </Link>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default ProductDetails;
