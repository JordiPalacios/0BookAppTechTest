import { useState } from "react";
import "./App.css";
import BooksFilter from "./components/BooksFilter";
import ItemContainer from "./components/ItemContainer";
import SectionContainer from "./components/SectionContainer";
import books from "./mock/books.json";

export default function BookApp() {
    const [gender, setGender] = useState("Todos")

    const GENDER = [
        {
            name: "Todos",
        },
        {
            name: "Hombre",
        },
        {
            name: "Mujer",
        },
        {
            name: "Otros",
        },
    ];
  
    const handleClick = (genderValue) => {
      let gender = genderValue.target.value

      if (gender === "Hombre") {
        setGender("Hombre");
    } else if (gender === "Mujer") {
        setGender("Mujer");
    } else if (gender ==="Otros") {
        setGender("Otros");
    } else {
        setGender("Todos");
    }
  }

    return (
        <>
            <h1 className="text-5xl font-semibold underline mb-6 text-emerald-500">
                BooksApp
            </h1>
              {GENDER.map((entry, index) => (
                <button key={index} onClick={handleClick} value={entry.name}>
                  {entry.name}
                </button>
              ))}
            <BooksFilter genderValue={gender} />
            <SectionContainer sectionClassName="text-white/90">
                {books.library.map((entry, index) => (
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
