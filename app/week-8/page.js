"use client";

import ItemList from "./item-list";
import NewItem from "./new-item";
import itemsData from "./items.json";
import { useState } from "react";
import MealIdeas from "./meal-ideas";

export default function Page() {

    //Repurpose the shoppingItems variable into part of the new use state.
    const [items, setItems] = useState(
        itemsData.map((element) => ({...element,
            name: new String(element.name),
            quantity: new String(element.quantity),
            category: new String(element.category),
        }))    
    );
    const handleAddItem = (item) => {
        setItems([...items, item]);
    }

    const [selectedItemName, setSelectedItemName] = useState();
    const handleItemSelect = () => {
        setSelectedItemName(ingredient);
    }

    return (
        <main className="text-center">
            <h1 className="text-green-300 text-4xl font-bold my-10">Shopping List</h1>
            <NewItem
               onAddItem={handleAddItem}
            />
            <ItemList
                //Property for item-list.js
                items={items}
                //When an item is selected call handleItemSelect to set name of ingredient and get meal ideas.
                onClick={handleItemSelect}
            />
            <MealIdeas
                ingredient={selectedItemName}
            />
        </main>
    );
}

