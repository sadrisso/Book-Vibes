import { useEffect, useState } from "react";
import Book from "../Book/Book";


const Books = () => {

    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetch("booksData.json").then((res) => res.json()).then((data) => setBooks(data))
    }, []);

    return (
        <div>
            <h1 className="text-5xl text-center font-bold">Books: {books.length}</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
                {books.map((book, i) => <Book key={i} book={book}/>)}
            </div>
        </div>
    );
};

export default Books;