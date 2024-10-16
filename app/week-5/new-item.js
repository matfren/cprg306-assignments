"use client"

import {useState} from "react";

export default function NewItem() {

    //State variable for quantity that starts with the integer 1.
    const [quantity, setQuantity] = useState(1);
    //State variable for name that starts null.
    const [name, setName] = useState("");
    //State variable for category which is initially set to Produce.
    const [category, setCategory] = useState("Produce");

    //Prevents the default submission event. Create item object containing the three states then log it in the console. Afterwards reset to default values.
    const handleSubmit = (submitEvent) => {
        //Prevent default script from running.
        submitEvent.preventDefault();
        //Create item variable.
        let item = {quantity, name, category};
        //If item is null then alert user the field is empty. With valid input run normally. 
        //This works in place of the required attribute since it's not checked on pressing the submit button.
        if (item.name == "") {
            alert("Please enter a valid name for your item.");
        }
        else {
            console.log(item);
            alert(item.quantity + " - " + item.name + " in the " + item.category + " category.");
            setQuantity(1);
            setName("");
            setCategory("Produce");
        }
    };

    //Styles for the button when enabled and disabled.
    let buttonStyle = "m-2 p-1 bg-green-500 hover:bg-green-300 active:bg-green-100 text-yellow-800 border-solid border-2 border-green-200 rounded-lg";
    let incrementButton = buttonStyle;
    let decrementButton = buttonStyle;
    let disabledButton = "m-2 p-1 bg-gray-400 text-white border-solid border-2 border-gray-200 rounded-lg";

    
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
                <label>
                    Enter your Item:
                    <input required className="text-black bg-green-100" type="text"  placeholder="Bananas" value={name}  onChange={sn => setName(sn.target.value)}/>
                </label>
                <label>
                    Select a Category:
                    <select className="text-black bg-green-100" value={category} onChange={sc =>setCategory(sc.target.value)}>
                        <option value="Produce">Produce</option>
                        <option value="Dairy">Dairy</option>
                        <option value="Bakery">Bakery</option>
                        <option value="Meat">Meat</option>
                        <option value="Frozen Foods">Frozen Foods</option>
                        <option value="Canned Goods">Canned Goods</option>
                        <option value="Dry Goods">Dry Goods</option>
                        <option value="Beverages">Beverages</option>
                        <option value="Snacks">Snacks</option>
                        <option value="Household">Household</option>
                        <option value="Other">Other</option>
                    </select>
                </label>
                <label className="p-2 text-center border-solid border-2 border-green-700 bg-green-950">Quantity:{quantity}</label>
                <div className="flex flex-row">
                    <button className={decrementButton} type="button"
                        onClick={decrement}>Decrement
                    </button>
                    <button className={incrementButton} type="button"
                        onClick={increment}>Increment
                    </button>
                </div>
                <button className={buttonStyle} type="submit" onClick={handleSubmit}>Submit</button>
            </form>
        </main>
        
    );
}