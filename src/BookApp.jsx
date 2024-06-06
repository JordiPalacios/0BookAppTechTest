import { useContext, useEffect, useState } from "react";
import "./App.css";
import {
    FilterButton,
    SectionContainer,
    BooksList,
    ListaLectura,
} from "./components/index";
import books from "./mock/books.json";
import { BooksContext } from "./context/BooksContext";

export default function BookApp() {
    const [genre, setGenre] = useState("Todos");
    const [booksAvailable, setBooksAvailable] = useState(books.library.length);
    const [booksList, setBooksList] = useState("0");
    const { favBook } = useContext(BooksContext);

    let allBooksAvailable;

    //useEffect para actualizar el número de libros disponibles
    useEffect(() => {
        setBooksList(favBook.length);

        allBooksAvailable =
            books.library.filter(
                (entry) => entry.book.genre === genre || genre === "Todos"
            ).length - booksList;

        if (allBooksAvailable < 0) {
            allBooksAvailable = 0;
        }

        setBooksAvailable(allBooksAvailable);
    }, [genre, booksList, favBook.length]);

    return (
        <>
            <h1 className="text-5xl font-semibold underline mb-6 text-emerald-500">
                BooksApp
            </h1>
            <div className="flex flex-col items-start mx-20">
                <h2 className="text-lg">
                    <span className="font-semibold text-xl text-emerald-400">
                        {booksAvailable}
                    </span>{" "}
                    libros disponibles
                </h2>
                <h4>
                    <span className="font-semibold text-lg text-emerald-200">
                        {booksList}
                    </span>{" "}
                    en la lista de lectura
                </h4>
                <div className="flex flex-row items-stretch justify-center gap-4">
                    <h3 className="text-xl font-semibold mb-2">
                        Filtrar por género
                    </h3>
                    <FilterButton genre={genre} setGenre={setGenre} />
                </div>
            </div>
            <div className="flex flex-row items-start justify-between">
                <SectionContainer sectionClassName="text-white/90">
                    <BooksList booksList={books.library} genre={genre} />
                </SectionContainer>
                <SectionContainer sectionClassName={"text-emerald-300/90"}>
                    <ListaLectura />
                </SectionContainer>
            </div>
        </>
    );
}
