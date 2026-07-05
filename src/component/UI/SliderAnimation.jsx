import React, { useState } from "react";
import { motion } from "framer-motion";

const products = [
  "Speakers",
  "Watch",
  "Earbuds",
  "Mouse",
  "Keyboard",
  "Headphones",
  "Laptop",
  "Camera",
  "Phone",
];

const SliderAnimation = () => {
  const [pause, setPause] = useState(false);
  const [active, setActive] = useState("Watch");

  return (
    <section className="w-full py-10 bg-white">
      <div className="relative overflow-hidden">
        <div className="absolute left-0 top-0 w-28 h-full bg-gradient-to-r from-white to-transparent z-10"></div>

        <div className="absolute right-0 top-0 w-28 h-full bg-gradient-to-l from-white to-transparent z-10"></div>

        <motion.div
          className="flex gap-5 w-max"
          animate={{
            x: ["0%", "-50%"],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            animationPlayState: pause ? "paused" : "running",
          }}
        >
          {[...products, ...products].map((item, index) => (
            <button
              key={index}
              onClick={() => setActive(item)}
              onMouseDown={() => setPause(true)}
              onMouseUp={() => setPause(false)}
              onMouseLeave={() => setPause(false)}
              onPointerDown={() => setPause(true)}
              onPointerUp={() => setPause(false)}
              className={`min-w-[90px] px-4 py-2 rounded-lg text-[13px] font-medium transition-all duration-300
${
  active === item
    ? "bg-white shadow-md text-black"
    : "bg-[#F7F7F7] text-gray-500"
}`}
            >
              {item}
            </button>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SliderAnimation;
