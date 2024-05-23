import { useState } from "react";
import Button from "./Button";

export default function BookItem({ entry }) {
    const [favBook, setFavBook] = useState(false);

    const onFavChange = () => {
        setFavBook(!favBook);
    }

    return (
        <>
            <h3 className=" text-2xl font-semibold text-white/80">
                {entry.title}
            </h3>
            <img
                className="max-w-xs h-auto p-4"
                src={entry.cover}
                alt={`img${entry.title}`}
            />
            <article>{entry.synopsis}</article>
            <p>{favBook ? "Añadido a favoritos" : "No añadido a favoritos"}</p>
            <Button onFavChange={onFavChange}>
                Añadir libro a favoritos
            </Button>
        </>
    );
}
