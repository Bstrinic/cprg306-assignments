"use client";

import Item from "./item";
import { useState } from "react";
import items from "./items.json";

export default function ItemList() {

  // Creating useState for sortBy
  const [sortBy, setSortBy] = useState("name");

  items.sort((a, b) => {
    if (sortBy === "name") {
      return a.name.localeCompare(b.name);
    } else if (sortBy === "category") {
      return a.category.localeCompare(b.category);
    } else {
      return 0;
    }
  });

  // if (setSortBy === "name") {
  //   buttonStyles = "bg-pink-500 p-1 m-2 w-28 border-4 border-teal-800 shadow-md hover:bg-teal-900 focus:outline-none";
  // } else if (setSortBy === "category") {
  //   buttonStyles = "bg-pink-500 p-1 m-2 w-28 border-4 border-teal-800 shadow-md hover:bg-teal-900 focus:outline-none";
  // }

  // Defining button styles
  const buttonStyles =
    "p-1 m-2 w-28 border-4 border-orange-500 rounded shadow-md hover: focus:outline-none ";

    // Ternary Operator - Syntax: condition ? <expression if true> : <expression if false>
  const nameButtonStyle = sortBy === "name" ? buttonStyles + "bg-orange-500" : buttonStyles + "bg-orange-800";
  const categoryButtonStyle = sortBy === "category" ? buttonStyles + "bg-orange-500" : buttonStyles + "bg-orange-800";


  return (
    <div className="m-5">
      <div>
        <label className="font-bold text-white text-xl" for="sort">
          Sort by:
        </label>
        <button className={nameButtonStyle} onClick={() => setSortBy("name")}>
          Name
        </button>
        <button className={categoryButtonStyle} onClick={() => setSortBy("category")}>
          Category
        </button>
      </div>
      <ul>
        {items.map((item) => (
          <div
            className="bg-slate-600 border-4 border-slate-800  p-5 my-5 mx-10
            w-80 flex: 1 justify-center text-white font-bold"
          >
            <h2>{item.name}</h2>
            <p>
              Buy {item.quantity} in {item.category}
            </p>
          </div>

          // <li
          //   className="bg-pink-500 border border-black rounded outline p-5 my-5 mx-10
          //   w-80 flex: 1 justify-center text-black font-bold"
          //   key={item.id}>
          //   {item.name}
          //   {item.quantity}
          //   {item.category}
          // </li>
        ))}
      </ul>
    </div>
  );
}
