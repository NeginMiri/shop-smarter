import MainLayout from "../component/layout/MainLayout";
import { useContext } from "react";
import { CartContext } from "../Context/CartContext";

const Order = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <MainLayout>
      <section className="p-10 flex flex-col gap-8">
        <h1 className="text-[28px] font-bold text-tx-300">Your Order</h1>

        <div className="flex flex-col border-b border-b-gray-300 rounded-[10px]">
          {cartItems.length === 0 ? (
            <p className="p-5 text-gray-500">No products found</p>
          ) : (
            cartItems.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between px-5 py-5 border-b border-gray-300 last:border-b-0"
              >
                <div className="flex items-center gap-5">
                  <img
                    src={item.images[0]}
                    alt={item.title}
                    className="w-[90px] h-[90px] object-contain rounded-[10px]"
                  />

                  <div className="flex flex-col gap-2">
                    <h2 className="text-[16px] font-bold text-tx-300">
                      {item.title}
                    </h2>

                    <p className="text-gray-500">Quantity: {item.quantity}</p>

                    <p className="text-tx-300 font-bold">${item.price}</p>
                  </div>
                </div>

                <div className="bg-green-100 text-green-700 px-4 py-2 rounded-[20px] text-[14px] font-medium">
                  Delivered
                </div>
              </div>
            ))
          )}
        </div>
      </section>
    </MainLayout>
  );
};

export default Order;
