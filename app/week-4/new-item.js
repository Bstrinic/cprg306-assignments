"use client";

import { useState } from "react";

export default function NewItem() {
  // initializing state variables
  const [quantity, setQuantity] = useState(1);

  // Button disabled
  const incrementDisabled = quantity >= 20;
  const decrementDisabled = quantity <= 1;

  // Button enabled
  let buttonStyles =
    "w-8 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75";

  // Function to increment counter
  const increment = () => {
    let currentQuantity = quantity;
    if (quantity <= 19) {
      setQuantity(currentQuantity + 1);
    }
  };

  // Function to decrement counter
  const decrement = () => {
    let currentQuantity = quantity;
    if (quantity >= 2) {
      setQuantity(currentQuantity - 1);
    }
  };

  

  //   if (quantity >= 20) {
  //     buttonStyles =
  //       "w-8 bg-gray-500 text-white font-semibold rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75";
  //   }

  //   if (quantity <= 1) {
  //     buttonStyles =
  //       "w-8 bg-gray-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75";
  //   }

  return (
    <div className="bg-slate-100 flex m-5 w-1/2 justify-center p-3">
      <div className="flex justify-between  ">
        <p className="text-black m-3 p-2 font-bold text-lg">{quantity}</p>
        <div className="flex m-3 p-2">
          <button
            className={`${buttonStyles} ${
              decrementDisabled ? "bg-gray-500" : ""
            }`}
            onClick={decrement}
          >
            -
          </button>
          <button
            className={`${buttonStyles} ${
              incrementDisabled ? "bg-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-900" : ""
            }`}
            onClick={increment}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
}
