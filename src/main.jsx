import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import BookApp from "./BookApp";
import { BooksProvider } from "./context/BooksContext";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <BooksProvider>
            <BookApp />
        </BooksProvider>
    </React.StrictMode>
);
