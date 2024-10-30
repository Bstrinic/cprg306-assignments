"use client";

import { useState } from "react";

export default function ItemList({ items }) {
  // Creating useState for sortBy
  const [sortBy, setSortBy] = useState("name");

  const getSortedItems = () => {
    // Creating a copy of items before sorting
    const itemsCopy = [...items];

    // Sorting for name and category
    itemsCopy.sort((a, b) => {
      if (sortBy === "name") {
        return a.name.localeCompare(b.name);
      } else if (sortBy === "category") {
        return a.category.localeCompare(b.category);
      } else {
        return 0;
      }
    });

    return itemsCopy;
  };

  // Defining button styles
  const buttonStyles =
    "p-1 m-2 w-28 border-4 border-orange-500 rounded shadow-md focus:outline-none ";

  // Ternary Operator - Syntax: condition ? <expression if true> : <expression if false>
  const nameButtonStyle =
    sortBy === "name"
      ? buttonStyles + "bg-orange-500"
      : buttonStyles + "bg-orange-800";
  const categoryButtonStyle =
    sortBy === "category"
      ? buttonStyles + "bg-orange-500"
      : buttonStyles + "bg-orange-800";

  return (
    <div className="m-5">
      <div>
        <label className="font-bold text-white text-xl" htmlFor="sort">
          Sort by:
        </label>
        <button className={nameButtonStyle} onClick={() => setSortBy("name")}>
          Name
        </button>
        <button
          className={categoryButtonStyle}
          onClick={() => setSortBy("category")}
        >
          Category
        </button>
      </div>
      <ul>
        {getSortedItems().map((item) => (
          <div
            key={item.id}
            className="bg-slate-600 border-4 border-slate-800  p-5 my-5 mx-10
            w-80 flex: 1 justify-center text-white font-bold"
          >
            <h2>{item.name}</h2>
            <p>
              Buy {item.quantity} in {item.category}
            </p>
          </div>
        ))}
      </ul>
    </div>
  );
}
