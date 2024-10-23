import ItemList from "./item-list";

export default function Page() {
    return (
        <main className="text-center">
            <h1 className="text-green-300 text-4xl font-bold my-10">Shopping List</h1>
            <ItemList />
        </main>
    );
}