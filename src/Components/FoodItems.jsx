import React, { useState } from "react";
import style from "./FoodItems.module.css";
import Item from "./Item";
export default function FoodItems({ items }) {

  let [activeItems,setActiveItems]=useState([])

  let onBuyButton=(item)=>{
      let newItemsArr=[...activeItems,item];
      setActiveItems(newItemsArr);
  }

  return (
    <ul className={`list-group ${style.foodItems}`}>
      {items.map((item) => (
        <Item
          key={item}
          foodItem={item}
          bought={activeItems.includes(item)}
          handlebuybutton={() => onBuyButton(item)}
        />
      ))}
    </ul>
  );
}
