import { createContext, useState } from "react";

export const BooksContext = createContext();

export const BooksProvider = ({ children }) => {
    const [favBook, setFavBook] = useState([]);

    const addFavBook = (book) => {
        setFavBook((prevbook) => [...prevbook, book])
    }

    const removeFavBook = (bookISBN) => {
        setFavBook((prevbook) => prevbook.filter((book) => book.ISBN !== bookISBN))
    }

    return (
        <BooksContext.Provider value={{ favBook, addFavBook, removeFavBook }}>
            {children}
        </BooksContext.Provider>
    );
};
