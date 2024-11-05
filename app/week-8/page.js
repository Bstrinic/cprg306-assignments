"use client";
import { Helmet, HelmetProvider } from "react-helmet-async";

import NewItem from "./new-item";
import ItemList from "./item-list";
import ItemsData from "./items.json"
import { useState } from "react";

export default function Page() {

  const [items, setItems] = useState(
    ItemsData.map((items) => ({...items}))
  );

  // Creating an event handler function
  const handleAddItem = (newItem) => {
    setItems((prevItem) => [...prevItem, newItem])
  };

  return (
    <main className="bg-slate-950 flex">
      <div>
        <HelmetProvider>
          <title>Shopping List</title>
        </HelmetProvider>
        <h1 className="text-4xl font-bold text-white m-5">
          Shopping List
        </h1>
        <NewItem 
        itemsArray={items}
        onAddItem={handleAddItem}
        />
        <ItemList items={items}/>
      </div>
    </main>
  );
}
