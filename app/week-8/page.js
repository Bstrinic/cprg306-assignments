"use client";
import { Helmet, HelmetProvider } from "react-helmet-async";
import MealIdeas from "./meal-ideas";
import NewItem from "./new-item";
import ItemList from "./item-list";
import ItemsData from "./items.json";
import { useState } from "react";

export default function Page() {
  // Creating state variable
  const [selectedItemName, setSelectedItemName] = useState();

  const [items, setItems] = useState(ItemsData.map((items) => ({ ...items })));

  // Creating an event handler function
  const handleAddItem = (newItem) => {
    setItems((prevItem) => [...prevItem, newItem]);
  };

  const handleItemSubmit = (item) => {
    // Taking name and assigning it to a variable
    let name = item.name;

    const cleanedName = name
      .split(",")[0] // Take first item from name
      .replace(
        /([\u2700-\u27BF]|[\uE000-\uF8FF]|�[�-�]|�[�-�]|[\u2011-\u26FF]|�[�-�])/g,
        ""
      ) // removing emojis
      .trim();

    // Updating state
    setSelectedItemName(cleanedName);
  };

  return (
    <main className="bg-slate-950 flex">
      <div>
        <HelmetProvider>
          <title>Shopping List</title>
        </HelmetProvider>
        <h1 className="text-4xl font-bold text-white m-5">Shopping List</h1>
        <NewItem itemsArray={items} onAddItem={handleAddItem} />
        <ItemList items={items} onItemSelect={handleItemSubmit} />
      </div>
      <MealIdeas ingredient={selectedItemName} />
    </main>
  );
}
