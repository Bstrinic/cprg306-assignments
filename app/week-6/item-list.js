import Item from "./item";
import { useState } from "react";

export default function ItemList() {

  // Creating useState for sortBy
  const [sortBy, setSortBy] = useState("name");

  return (
    <div>
      <Item
        name={item1.name}
        quantity={item1.quantity}
        category={item1.category}
      ></Item>
      <Item
        name={item2.name}
        quantity={item2.quantity}
        category={item2.category}
      ></Item>
      <Item
        name={item3.name}
        quantity={item3.quantity}
        category={item3.category}
      ></Item>
      <Item
        name={item4.name}
        quantity={item4.quantity}
        category={item4.category}
      ></Item>
      <Item
        name={item5.name}
        quantity={item5.quantity}
        category={item5.category}
      ></Item>
      <Item
        name={item6.name}
        quantity={item6.quantity}
        category={item6.category}
      ></Item>
      <Item
        name={item7.name}
        quantity={item7.quantity}
        category={item7.category}
      ></Item>
      <Item
        name={item8.name}
        quantity={item8.quantity}
        category={item8.category}
      ></Item>
      <Item
        name={item9.name}
        quantity={item9.quantity}
        category={item9.category}
      ></Item>
      <Item
        name={item10.name}
        quantity={item10.quantity}
        category={item10.category}
      ></Item>
      <Item
        name={item11.name}
        quantity={item11.quantity}
        category={item11.category}
      ></Item>
      <Item
        name={item12.name}
        quantity={item12.quantity}
        category={item12.category}
      ></Item>
    </div>
  );
}
