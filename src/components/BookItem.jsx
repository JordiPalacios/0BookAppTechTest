import Button from "./Button";
import { BooksContext } from "../context/BooksContext";
import { useContext } from "react";

export default function BookItem({ entry }) {
    const { favBook, addFavBook, removeFavBook } = useContext(BooksContext);
    const isFavBook = favBook.some((book) => book.ISBN === entry.ISBN);

    const onFavChange = () => {
        {
            isFavBook ? removeFavBook(entry.ISBN) : addFavBook(entry);
        }
    };

    return (
        <>
            <div
                className={`flex flex-col items-center justify-between ${
                    isFavBook
                        ? "opacity-30 hover:cursor-not-allowed"
                        : "opacity-100 "
                }`}
            >
                <h3 className=" text-2xl font-semibold text-white/80">
                    {entry.title}
                </h3>
                <img
                    className="max-w-xs h-auto p-4"
                    src={entry.cover}
                    alt={`img${entry.title}`}
                />
                <article>{entry.synopsis}</article>
            </div>
            <Button onFavChange={onFavChange}>
                {isFavBook
                    ? "Quitar de lista lectura"
                    : "Añadir a lista lectura"}
            </Button>
        </>
    );
}
