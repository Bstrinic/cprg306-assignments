"use client";

import { useState } from "react";

export default function NewItem({onAddItem}) {

  const [totalQuantity, setTotalQuantity] = useState(1);
  const [itemName, setItemName] = useState("");
  const [itemCategory, setItemCategory] = useState("Produce");

  const handleItemNameChange = (event) => setItemName(event.target.value);
  const handleQuantityChange = (event) => setTotalQuantity(event.target.value);
  const handleCategoryChange = (event) => setItemCategory(event.target.value);

  // Creating form submission handler
  const handleSubmit = (event) => {
    // Preventing default submission behavior
    event.preventDefault();

    // Generating a new ID
    const generateId = () => Math.random().toString(36)

    let item = {
      id: generateId(),
      name: itemName,
      quantity: totalQuantity,
      category: itemCategory
    };

    // Calling my onAddItem function
    onAddItem(item);

    setItemName("");
    setTotalQuantity(1);
    setItemCategory("");
  };

  // Button disabled
  const decrementDisabled = totalQuantity <= 1;

  // Button enabled
  let incrementStyles =
    "w-8 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75";

  let decrementStyle =
    "w-8 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"  
  // Function to increment counter
  const increment = () => {
    if (totalQuantity >= 1) {
      setTotalQuantity(totalQuantity + 1);
    }
  };

  // Function to decrement counter
  const decrement = () => {
    if (totalQuantity >= 2) {
      setTotalQuantity(totalQuantity - 1);
    }
  };  

  if (totalQuantity <= 1) {
    decrementStyle =
      "w-8 bg-gray-500 text-white font-semibold rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75";
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="p-2 m-4 bg-slate-900 text-black max-w-sm w-full"
    >
      <div className="mb-3">
        <label className="flex justify-center">
          <input
            type="text"
            onChange={handleItemNameChange}
            value={itemName}
            className="w-full border-2 border-gray-300 rounded-lg font-sans text-black p-2 m-2 "
            placeholder="Item Name"
          ></input>
        </label>
      </div>

      <div className="flex justify-between ">
        <div className="flex p-2 m-3 rounded-md bg-white w-1/2">
          <p className="text-black m-3 p-2 font-bold text-lg">
            {totalQuantity}
          </p>
          <div 
            className="flex m-3 p-2 justify-between">
            <button
              type="button"
              onChange={handleQuantityChange}
              className={decrementStyle}
              onClick={decrement}
            >
              -
            </button>
            <button
              type="button"
              onChange={handleQuantityChange}
              className={incrementStyles}
              onClick={increment}
            >
              +
            </button>
          </div>
        </div>
        <div className="flex p-2 m-3 rounded-md bg-white w-1/2">
          <label className="justify-center flex">
            <select
              onChange={handleCategoryChange}
              value={itemCategory}
              className="rounded-lg font-sans text-black justify-center flex "
            >
              <option value="Produce">Produce</option>
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

      <div className="p-2 m-2 flex justify-center ">
        <button
          type="submit"
          className="w-full border-2 bg-green-500 border-green-950 rounded-lg font-sans text-black p-2 m-2 "
        >
          +
        </button>
      </div>
    </form>
  );
}
