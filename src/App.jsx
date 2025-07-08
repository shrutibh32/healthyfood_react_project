import React, { useState } from "react";
import "./App.css";
import Apptitle from "./Components/Apptitle";
import FoodItems from "./Components/FoodItems";
import ErrorMessage from "./Components/ErrorMessage";
import Container from "./Components/Container";
import FoodInput from "./Components/FoodInput";
export default function App() {

  let [foodItems, setfoodItems] = useState([]);
  const onKeyDown = (event) => {
    if(event.key==='Enter'){
          let newfoodItem=event.target.value;
          event.target.value=""
          let newFoodArr=[...foodItems,newfoodItem];
          setfoodItems(newFoodArr);
    }
    
   
  };
  return (
    <Container>
      <Apptitle />
      
      <FoodInput handleKeyDown={onKeyDown} />
      <ErrorMessage items={foodItems} />
      <FoodItems items={foodItems}/>
    </Container>
  );
}
