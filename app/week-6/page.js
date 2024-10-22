"use client";
import { Helmet, HelmetProvider } from "react-helmet-async";
import ItemList from "./item-list";

export default function Page() {
  return (
    <main className="bg-cyan-400">
      <div className="">
        <HelmetProvider>
          <title>Shopping List</title>
        </HelmetProvider>
        <h1 className="text-4xl font-bold text-black">
          Shopping List
        </h1>
        <ItemList />
      </div>
    </main>
  );
}
