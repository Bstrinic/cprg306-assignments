

export default function Item({ name, quantity, category }) {
  return (
    <div>
      <h1>{name}</h1>
      <p>{quantity}</p>
      <p>{category}</p>
    </div>
  );
}
