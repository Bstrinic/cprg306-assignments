"use client";
import { Helmet, HelmetProvider } from "react-helmet-async";
import ItemList from "./item-list";

export default function Page() {
  return (
    <main className="bg-slate-950 flex">
      <div>
        <HelmetProvider>
          <title>Shopping List</title>
        </HelmetProvider>
        <h1 className="text-4xl font-bold text-white m-5">
          Shopping List
        </h1>
        <ItemList />
      </div>
    </main>
  );
}
