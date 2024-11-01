import { useLoaderData, useParams } from "react-router-dom";


const BookDetails = () => {

    const { bookId } = useParams();
    const id = parseFloat(bookId)
    const data = useLoaderData();

    const selectedBook = data.find((book) => book.bookId === id);
    const { bookName, bookId: currentBookId, image, review, totalPages, publisher, yearOfPublishing, author, tags } = selectedBook

    return (
        <div className="hero h-[700px] mb-5">
            <div className="hero-content flex-col lg:flex-row">
                <div className="p-28 bg-slate-200 rounded-2xl py-40">
                    <img
                        src={image}
                        className="max-w-sm rounded-lg shadow-2xl h-[360px] w-[270px]" />
                </div>
                <div className="">
                    <h1 className="text-5xl font-bold mb-3">{bookName}</h1>
                    <p>By : {author}</p>
                    <div className="divider"></div>
                    <p className="py-6"><strong>Review : </strong> {review}</p>
                    <div>
                        {tags.map((tag, i) => <button key={i} className="btn mr-4">{tag}</button>)}
                    </div>
                    <div className="divider"></div>
                    <div className="space-y-3">
                        <p><strong>Book id</strong> : {currentBookId}</p>
                        <p><strong>Publisher</strong> : {publisher}</p>
                        <p><strong>Year of publishing</strong> : {yearOfPublishing}</p>
                        <p><strong>Number of pages</strong> : {totalPages}</p>
                    </div>
                    <div className="mt-5">
                        <button className="btn btn-outline mr-4">Read</button>
                        <button className="btn btn-info">WishList</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;