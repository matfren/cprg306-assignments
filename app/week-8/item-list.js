"use client"

import Items from "./item";
import { useState } from "react";

export default function ItemList({items, onItemSelect}) {
  //useState for sorting by name or category. Initialized with sorting by name.
  const [sortBy, setSortBy] = useState("name");

  //Create an array with constructors from the JSON file.
  let shoppingItems = [...new Set(items.map((element) => ({...element,
    name: new String(element.name),
    quantity: new String(element.quantity),
    category: new String(element.category),
  })))];


  //Compares each element in the array to the next using the localeCompare() method. 
  //This method is similar to compareTo() in Java as they both compare the first element to the next lexicographically returning -1, 1 or 0.
  if (sortBy == "name") {
    shoppingItems = shoppingItems.sort((a, b) => a.name.localeCompare(b.name));
  }
  else if (sortBy == "category") {
    shoppingItems = shoppingItems.sort((a, b) => a.category.localeCompare(b.category));
  }
  
  
  //Styles for the button when enabled and disabled.
  let buttonStyle = "m-2 p-1 bg-green-500 hover:bg-green-300 active:bg-green-100 text-yellow-800 border-solid border-2 border-green-200 rounded-lg";
  let nameSortButton = buttonStyle;
  let categorySortButton = buttonStyle;
  let disabledButton = "m-2 p-1 bg-gray-400 text-white border-solid border-2 border-gray-200 rounded-lg";

  //When the array is sorted by name grey out the nameSortButton and vice versa for the categorySortButton.
  if (sortBy == "name") {
    nameSortButton = disabledButton;
  }
  else if (sortBy == "category") {
    categorySortButton = disabledButton;
  }

  //Check the array output in the console.
  //jsonItems.forEach(object => {console.log(object.name + "  " + object.quantity + "  " + object.category)});


  return (
    <div>
      <div>
        <button className={nameSortButton} 
          onClick={() => setSortBy("name")}
          >Sort by Name
        </button>
        <button className={categorySortButton}
          onClick={() => setSortBy("category")}
          >Sort by Category
        </button>
      </div>
      <div  className="flex flex-row flex-wrap">
        {/* Map all elements to a new array */}
        {shoppingItems.map((element) => ( 
          <Items
            onClick={onItemSelect}
            key={element.id}
            name={element.name}
            quantity={element.quantity}
            category={element.category}
          />
        ))}
      </div>
    </div>
  );
}