import ItemList from "./item-list";

export default function Page() {
  return (
    <main className="bg-cyan-400 flex justify-center">
      <div>
        <h1 className="justify-center flex text-5xl font-bold text-black">
          Shopping List
        </h1>
        <ItemList />
      </div>
    </main>
  );
}
