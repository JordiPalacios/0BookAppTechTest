import { useEffect, useState } from "react";
import "./App.css";
import { ItemContainer, SectionContainer } from "./components/index";
import books from "./mock/books.json";

export default function BookApp() {
    const [genre, setGenre] = useState("Todos");
    const [booksAvailable, setBooksAvailable] = useState(books.library.length)
    const [booksList, setBooksList] = useState('0')

    const handleChange = (genderValue) => {
        let gender = genderValue.target.value;

        if (gender === "Fantasía") {
            setGenre("Fantasía");
        } else if (gender === "Ciencia ficción") {
            setGenre("Ciencia ficción");
        } else if (gender === "Zombies") {
            setGenre("Zombies");
        } else if (gender === "Terror") {
            setGenre("Terror");
        } else {
            setGenre("Todos");
        }
    };

    //useEffect para actualizar el número de libros disponibles
    useEffect(() => {
        setBooksAvailable(
            books.library.filter(entry => entry.book.genre === genre ||genre === "Todos").length
        )
    }, [genre])

    return (
        <>
            <h1 className="text-5xl font-semibold underline mb-6 text-emerald-500">
                BooksApp
            </h1>
            <h2>{`${booksAvailable} libros disponibles`}</h2>
            {/* <h4>{`${booksList} en la lista de lectura`}</h4> */}
            <h3 className="text-xl font-semibold mb-2">Filtrar por género</h3>
            <select
                className="px-2 py-1 rounded-lg bg-black/80 text-emerald-400"
                name="gender"
                id="1"
                onChange={handleChange}
            >
                <option className="text-emerald-300 bg-black/70" value="Todos">
                    Todos
                </option>
                <option
                    className="text-emerald-300 bg-black/70"
                    value="Fantasía"
                >
                    Fantasía
                </option>
                <option
                    className="text-emerald-300 bg-black/70"
                    value="Ciencia ficción"
                >
                    Ciencia Ficción
                </option>
                <option
                    className="text-emerald-300 bg-black/70"
                    value="Zombies"
                >
                    Zombies
                </option>
                <option className="text-emerald-300 bg-black/70" value="Terror">
                    Terror
                </option>
            </select>
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
