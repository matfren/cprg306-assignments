export default function Items({name, quantity, category, onSelect}) {

    let buttonStyle = "m-2 p-1 bg-green-800 hover:bg-green-300 focus:bg-green-100 focus:text-black text-white border-solid border-2 border-green-200";

    return (
        <div>
            <button className={buttonStyle} onClick={onSelect}>
                <p className="text-center text-xl w-48">{name}</p>
                <p>Quantity: {quantity}</p>
                <p>Category: {category}</p>
            </button>
        </div>
    );
    
}