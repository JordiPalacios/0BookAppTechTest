import { useState } from "react";

export default function Button({ children, onFavChange }) {
    const [favBook, setFavBook] = useState(false);

    const handleClick = () => {
        const newFavBook = !favBook
        setFavBook(newFavBook);
        onFavChange(newFavBook);
    }

    return (
        <button
            onClick={handleClick}
            className="bg-emerald-700/60 hover:bg-emerald-700 text-white font-bold mt-2 py-2 px-4 rounded"
        >
            {children}
        </button>
    );
}
