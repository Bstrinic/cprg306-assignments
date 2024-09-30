

export default function Item({ name, quantity, category }) {

  return (
    <div className="bg-pink-500 border border-black rounded outline p-5 my-5 mx-10
    w-80 flex: 1 justify-center text-black font-bold">
      <h2 className="text-xl">{name}</h2>
      <p>Buy {quantity} in {category}</p>
      <p></p>
    </div>
  );
}
