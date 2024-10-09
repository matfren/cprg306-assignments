"use client"

import {useState} from "react";

export default function NewItem() {

    const [quantity, setQuantity] = useState(1);

    let buttonStyle = "m-2 bg-green-500 hover:bg-green-300 text-yellow-800 border-solid border-2 border-green-200 rounded-lg";
    let incrementButton = buttonStyle;
    let decrementButton = buttonStyle;
    let disabledButton = "m-2 bg-gray-400 text-white border-solid border-2 border-gray-200 rounded-lg";

    if (quantity == 20) {
        incrementButton = disabledButton;
    }
    else if (quantity == 1) {
        decrementButton = disabledButton;
    }

    const increment = () => {
        if (quantity < 20) {
            setQuantity(quantity + 1);
        }
    };

    const decrement = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    return (
        <div  className="flex flex-col flex-wrap w-5 m-10"> 
            <p className="m-3 p-3 border-solid border-2 border-green-700 bg-green-950">Quantity: {quantity}</p>
            <button className={incrementButton} 
                onClick={increment}>Increment
            </button>
            <button className={decrementButton}
                onClick={decrement}>Decrement
            </button>
        </div>
    );
}