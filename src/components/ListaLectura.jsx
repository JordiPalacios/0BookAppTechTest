import { useContext } from "react";
import { BooksContext } from "../context/BooksContext";
import Button from "./Button";
export default function ListaLectura({ entry }) {
    const { favBook, removeFavBook } = useContext(BooksContext);
    // const isFavBook = favBook.some((book) => book.ISBN === entry.ISBN)

    // const handleClick = () => {
    //     { isFavBook ? removeFavBook(entry.target.ISBN) : null}
    // }

    return (
        <div className="flex flex-col items-center">
            <h3 className="text-2xl font-semibold underline mt-6 mb-2 min-w-60 text-center ">
                Lista de Lectura
            </h3>
            <ul>
                {favBook.map((entry) => {
                    return (
                        <>
                            <li className="m-2">
                                <img
                                    src={entry.cover}
                                    alt={`img${entry.title}`}
                                    className="w-28 h-auto"
                                />
                                <button className="w-full text-xs text-pretty text-center p-1">
                                    {favBook ? "Quitar de lista lectura" : null}
                                </button>
                            </li>
                        </>
                    );
                })}
            </ul>
        </div>
    );
}
