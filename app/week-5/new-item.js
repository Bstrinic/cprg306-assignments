"use client";

import { useState } from "react";

export default function NewItem() {
  // quantity variable
  const [totalQuantity, setItemQuantity] = useState(1);
  // name variable
  const [itemName, setItemName] = useState("");
  // Category variable
  const [itemCategory, setItemCategory] = useState("Produce");

  // Creating form submission handler
  const handleSubmit = (event) => {
    // Preventing default submission behavior
    event.preventDefault();

    let item = {
      iName: itemName,
      tQuantity: totalQuantity,
      iCategory: itemCategory,
    };

    console.log(item);

    alert(`
      Item Name: ${item.iName}
      Quantity: ${item.tQuantity}
      Category: ${item.iCategory}
      `);

    setItemName("");
    setItemQuantity("");
    setItemCategory("");
  };

  // Button disabled
  const incrementDisabled = totalQuantity >= 20;
  const decrementDisabled = totalQuantity <= 1;

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
    <form className="p-2 m-4 bg-slate-900 text-black max-w-sm w-full">
      <div className="mb-3">
        <label className="flex justify-center">
          <input
            className="w-full border-2 border-gray-300 rounded-lg font-sans text-black "
            defaultValue="Item Name"
          ></input>
        </label>
      </div>
      <div className=" flex justify-between p-2 mb-1">
        <div className="flex p-2 mt-1 rounded-md bg-white">
          <p className="text-black m-3 p-2 font-bold text-lg">
            {totalQuantity}
          </p>
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
                incrementDisabled
                  ? "bg-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-900"
                  : ""
              }`}
              onClick={increment}
            >
              +
            </button>
          </div>
        </div>

        <div className="flex justify-center">
          <label className="justify-center flex">
            <select
              defaultValue="Produce"
              onChange={(event) => setItemCategory(event.target.value)}
              className="border-2 border-gray-300 rounded-lg font-sans text-black justify-center flex "
            >
              <option value="produce">Produce</option>
              <option value="Dairy">Dairy</option>
              <option value="Bakery">Bakery</option>
              <option value="Meat">Meat</option>
              <option value="Frozen Foods">Frozen Foods</option>
              <option value="Canned Goods">Canned Goods</option>
              <option value="Dry Goods">Dry Goods</option>
              <option value="Beverages">Beverages</option>
              <option value="Snacks">Snacks</option>
              <option value="Household">Household</option>
              <option value="Other">Other</option>
            </select>
          </label>
        </div>
      </div>
      <div className="m-3 flex justify-center">
        <button
          className="w-full bg-green-600 border-2 border-green-800 rounded-lg text-black"
          onClick={handleSubmit}
        >
          +
        </button>
      </div>
    </form>

    // <div className="bg-slate-100 flex m-5 w-1/2 justify-center p-3">
    // <div className="flex justify-between  ">
    //   <p className="text-black m-3 p-2 font-bold text-lg">{quantity}</p>
    //   <div className="flex m-3 p-2">
    //     <button
    //       className={`${buttonStyles} ${
    //         decrementDisabled ? "bg-gray-500" : ""
    //       }`}
    //       onClick={decrement}
    //     >
    //       -
    //     </button>
    //     <button
    //       className={`${buttonStyles} ${
    //         incrementDisabled ? "bg-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-900" : ""
    //       }`}
    //       onClick={increment}
    //     >
    //       +
    //     </button>
    //   </div>
    // </div>
    // </div>
  );
}
