"use client";

import { useState } from "react";

export default function NewItem() {
  // Button enabled
  let buttonStyles ="w-8 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 disabled:bg-gray-400 focus:ring-blue-400 focus:ring-opacity-75";
  
  // Conditional Styling
  
  // initializing state variables
  const [quantity, setQuantity] = useState(1);

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

  return (
    <div className="bg-slate-100 flex m-5 w-1/2 justify-center p-3">
      <div className="flex justify-between">
        <p className="text-black">{quantity}</p>
        <button className={buttonStyles} onClick={decrement}>
          -
        </button>
        <button className={buttonStyles} onClick={increment}>
          +
        </button>
      </div>
    </div>
  );
}
