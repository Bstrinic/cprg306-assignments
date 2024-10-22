"use client";

import Item from "./item";
import { useState } from "react";
import items from "./items.json";

export default function ItemList() {
  // Creating useState for sortBy
  const [sortBy, setSortBy] = useState("name");

  items.sort((a, b) => {
    if ( sortBy === "name" ) {
      return a.name.localeCompare(b.name);
    } else if ( sortBy === "category") {
      return a.category.localeCompare(b.category);
    }
  })

  return (
    <div>
      <div className="flex justify-center">
        <p>Sort by: </p>
        <div>
          <button onClick={setSortBy}>Name</button>
          <button onClick={setSortBy}>Category</button>
        </div>
      </div>
      <ul>
        {items.map((item) => (
          <div className="bg-pink-500 border border-black rounded outline p-5 my-5 mx-10
            w-80 flex: 1 justify-center text-black font-bold">
            <h2>{item.name}</h2>
            <p>Buy {item.quantity} in {item.category}</p>
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
