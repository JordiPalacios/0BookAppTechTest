import './App.css'
import books from './mock/books.json'

export default function BookApp() {
  return (
    <>
      <h1>BooksApp</h1>
      {books.library.map((entry, index) => (
        <div key={index}>
          <h3 className=' text-yellow-700'>{entry.book.title}</h3>
          <img className=' size-6' src={entry.book.cover} alt={`img${entry.book.title}`} />
          <article>{entry.book.synopsis}</article>
        </div>
      ))}
    </>
  )
}