import React from "react";
import { useContext } from "react";
import { BooksContext } from "../context/BooksContext";
export default function ListaLectura({ entry }) {
    const { favBook, removeFavBook } = useContext(BooksContext);

    const handleClick = (ISBN) => () => {
        removeFavBook(ISBN);
    };

    return (
        <div className="flex flex-col items-center">
            <h3 className="text-2xl font-semibold underline mt-6 mb-2 min-w-60 text-center ">
                Lista de Lectura
            </h3>
            <ul>
                {favBook.map((entry, index) => {
                    return (
                        <React.Fragment key={index}>
                            <li className="m-2">
                                <img
                                    src={entry.cover}
                                    alt={`img${entry.title}`}
                                    className="w-28 h-auto"
                                />
                                <button
                                    onClick={handleClick(entry.ISBN)}
                                    className="w-full text-xs text-pretty text-center bg-emerald-500/50 hover:bg-emerald-800 text-white font-bold mt-2 py-2 px-4 rounded"
                                >
                                    Quitar de lista lectura
                                </button>
                            </li>
                        </React.Fragment>
                    );
                })}
            </ul>
        </div>
    );
}
