"use client";

import Item from "./item";
import { useState } from "react";
import items from "./items.json";

export default function ItemList() {
  // Creating useState for sortBy
  const [sortBy, setSortBy] = useState("name");

  return (
    <div>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.name}
            {item.quantity}
            {item.category}
          </li>
        ))}
      </ul>
    </div>
  );
}
