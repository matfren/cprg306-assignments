export default function Items({name, quantity, category, onSelect}) {

    return (
        <div className="m-3 p-3 border-solid border-2 border-green-700 bg-green-950">
            <p className="text-center text-xl w-48" onClick={onSelect}>{name}</p>
            <p>Quantity: {quantity}</p>
            <p>Category: {category}</p>
        </div>
    );
    
}