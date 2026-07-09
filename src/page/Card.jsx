import MainLayout from "../component/layout/MainLayout";
import { useContext } from "react";
import { Link } from "react-router";
import { CartContext } from "../Context/CartContext";
import { AiOutlineArrowRight } from "react-icons/ai";

const Card = () => {
  const { cartItems, setCartItems, cartCount, setCartCount } =
    useContext(CartContext);

  const increaseQuantity = (id) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item,
      ),
    );

    setCartCount((prev) => prev + 1);
  };

  const decreaseQuantity = (id) => {
    const product = cartItems.find((item) => item.id === id);

    if (product.quantity === 1) {
      deleteItem(id);
      return;
    }

    setCartItems(
      cartItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity - 1 } : item,
      ),
    );

    setCartCount((prev) => prev - 1);
  };

  const deleteItem = (id) => {
    const product = cartItems.find((item) => item.id === id);

    setCartCount((prev) => prev - product.quantity);

    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );
  return (
    <MainLayout>
      <section className="p-10 flex flex-col gap-10 items-start">
        <div className="flex flex-col gap-3">
          <h3 className="text-[24px] font-bold text-tx-300">My Cart</h3>
          <div className="flex items-center gap-2">
            <p className="text-[16px] text-tx-400 ">items in your cart</p>
            <Link to="/Shope">
              <p className="text-bg-100 text-[14px] flex gap-1 items-center">
                Add More
                <AiOutlineArrowRight className="text-bg-100 text-[14px]" />
              </p>
            </Link>
          </div>
        </div>
        <div className="px-5">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className=" flex items-center justify-center gap-5"
            >
              <img
                src={item.images?.[0]}
                alt={item.title}
                className="w-[72px] h-[72px] rounded-[10px]"
              />

              <div className="flex items-center">
                <h2 className="text-tx-200 text-[14px]">{item.title}</h2>

                <div className="flex flex-col items-center justify-center gap-2 ml-10">
                  <div className="flex w-20 h-10 border border-tx-200 rounded-[6px] items-center justify-center gap-3 mt-3">
                    <button
                      onClick={() => decreaseQuantity(item.id)}
                      className="text-tx-200"
                    >
                      -
                    </button>

                    <span className="font-bold text-lg  text-tx-200">
                      {item.quantity}
                    </span>

                    <button
                      onClick={() => increaseQuantity(item.id)}
                      className="text-tx-200"
                    >
                      +
                    </button>
                  </div>
                  <p className="text-tx-200">${item.price}</p>
                  <div>
                    <button
                      onClick={() => deleteItem(item.id)}
                      className=" bg-red-500 text-white px-4 py-2 rounded-lg"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
          <div className="border border-gray-300 rounded-[6px] bg-bg-15 w-full px-5 py-5 mt-10 gap-4">
            <h2 className="text-[20px] text-tx-300 font-medium ">
              Payment Summary
            </h2>
            <p className="text-tx-400 text-[16px]">Payment Method</p>

            <div className="flex justify-between mb-3">
              <p>Subtotal</p>
              <p>${totalPrice}</p>
            </div>

            <div className="flex justify-between mb-3">
              <p>Shipping</p>
              <p className="text-green-600">Free</p>
            </div>

            <hr className="my-4" />

            <div className="flex justify-between font-bold text-xl">
              <p>Total</p>
              <p>${totalPrice}</p>
            </div>

            <Link to="/Order">
              <button className="w-full mt-6 h-[50px] rounded-lg bg-tx-300 text-white font-semibold">
                Place Order
              </button>
            </Link>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Card;
