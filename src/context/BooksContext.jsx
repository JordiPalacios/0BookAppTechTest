import { createContext, useState } from "react";

export const BooksContext = createContext();

export const BooksProvider = ({ children }) => {
    const [favBook, setFavBook] = useState(false);

    return (
        <BooksContext.Provider value={{ favBook, setFavBook }}>
            {children}
        </BooksContext.Provider>
    );
};
