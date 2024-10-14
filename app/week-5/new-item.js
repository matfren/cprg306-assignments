"use client"

import {useState} from "react";

export default function NewItem() {
    
    //State variable for quantity that starts with the integer 1.
    const [quantity, setQuantity] = useState(1);
    //State variable for name that starts blank.
    const [name, setName] = useState("");
    //State variable for category which is initially set to Produce.
    const [category, setCategory] = useState("Produce");





    //Prevents the default submission event. Create item object containing the three states then log it in the console.
    const handleSubmit = (submitEvent) => {
        submitEvent.preventDefault();
        const item = {quantity, name, category};
        console.log(item);
        alert(item);
        //***RESET ITEM HERE
    };

    
    //Styles for the button when enabled and disabled.
    let buttonStyle = "m-2 bg-green-500 hover:bg-green-300 text-yellow-800 border-solid border-2 border-green-200 rounded-lg";
    let incrementButton = buttonStyle;
    let decrementButton = buttonStyle;
    let disabledButton = "m-2 bg-gray-400 text-white border-solid border-2 border-gray-200 rounded-lg";

    
    //Checks if the quantity matches the minimum or maximum and applies style when they reach those amounts. 
    if (quantity == 20) {
        incrementButton = disabledButton;
    }
    else if (quantity == 1) {
        decrementButton = disabledButton;
    }

    //Increments with a maximum amount of 20.
    const increment = () => {
        if (quantity < 20) {
            setQuantity(quantity + 1);
        }
    };

    //Decrements with a minimum amount of 1.
    const decrement = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    return (
        <main> 
            <form className="flex flex-col flex-wrap w-5 m-10">
                <input type="text" placeholder="Enter Name" onChange={setName} required/>
                <select className="bg-cyan-400">
                    <option disable selected hidden>Category</option>
                    <option value={setCategory}>Produce</option>
                    <option value={setCategory}>Dairy</option>
                    <option value={setCategory}>Bakery</option>
                    <option value={setCategory}>Meat</option>
                    <option value={setCategory}>Frozen Foods</option>
                    <option value={setCategory}>Canned Goods</option>
                    <option value={setCategory}>Dry Goods</option>
                    <option value={setCategory}>Beverages</option>
                    <option value={setCategory}>Snacks</option>
                    <option value={setCategory}>Household</option>
                    <option value={setCategory}>Other</option>
                </select>
                <label className="m-3 p-3 border-solid border-2 border-green-700 bg-green-950">Quantity:{quantity}</label>
                <div>
                    <button className={incrementButton} 
                        onClick={increment}>Increment
                    </button>
                    <button className={decrementButton}
                        onClick={decrement}>Decrement
                    </button>
                </div>
                <button className={buttonStyle} onClick={handleSubmit}>Submit</button>
            </form>
        </main>
        
    );
}