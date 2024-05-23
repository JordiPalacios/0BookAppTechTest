import { useEffect, useState } from "react";
import "./App.css";
import {
    FilterButton,
    ItemContainer,
    SectionContainer,
} from "./components/index";
import books from "./mock/books.json";

export default function BookApp() {
    const [genre, setGenre] = useState("Todos");
    const [booksAvailable, setBooksAvailable] = useState(books.library.length);
    const [booksList, setBooksList] = useState("0");

    //useEffect para actualizar el número de libros disponibles
    useEffect(() => {
        setBooksAvailable(
            books.library.filter(
                (entry) => entry.book.genre === genre || genre === "Todos"
            ).length
        );
    }, [genre]);

    return (
        <>
            <h1 className="text-5xl font-semibold underline mb-6 text-emerald-500">
                BooksApp
            </h1>

            <div className="flex flex-col items-start mx-20">
                <h2 className="text-lg">
                    <span className="font-semibold text-xl">
                        {booksAvailable}
                    </span>{" "}
                    libros disponibles
                </h2>
                {/* <h4>{`${booksList} en la lista de lectura`}</h4> */}
                <div className="flex flex-row items-stretch justify-center gap-4">
                    <h3 className="text-xl font-semibold mb-2">
                        Filtrar por género
                    </h3>
                    <FilterButton genre={genre} setGenre={setGenre} />
                </div>
            </div>

            <SectionContainer sectionClassName="text-white/90">
                {books.library
                    .filter(
                        (entry) =>
                            entry.book.genre === genre || genre === "Todos"
                    )
                    .map((entry, index) => (
                        <ItemContainer key={index}>
                            <h3 className=" text-2xl font-semibold text-white/80">
                                {entry.book.title}
                            </h3>
                            <img
                                className="max-w-xs h-auto p-4"
                                src={entry.book.cover}
                                alt={`img${entry.book.title}`}
                            />
                            <article>{entry.book.synopsis}</article>
                        </ItemContainer>
                    ))}
            </SectionContainer>
        </>
    );
}
