import BookItem from "./BookItem";
import ItemContainer from "./ItemContainer";

export default function BooksList({ booksList, genre }) {

    return (
        <>
            {booksList
                .filter(
                    (entry) => entry.book.genre === genre || genre === "Todos"
                )
                .map((entry, index) => (
                    <ItemContainer key={index}>
                        <BookItem entry={entry.book} />
                    </ItemContainer>
                ))}
        </>
    );
}
