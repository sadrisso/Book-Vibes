import { Link } from "react-router-dom";


const Book = ({ book }) => {

    const {bookId, bookName, author, image, rating, publisher, tags, category } = book

    return (

        <Link to={`book/${bookId}`}>
            <div className="card bg-base-100 border p-6">
                <figure className="px-10 pt-10 bg-gray-100 pb-10 ">
                    <img
                        src={image}
                        alt="Shoes"
                        className="rounded-xl h-[166px]" />
                </figure>
                <div className="card-body border">
                    <div className="flex justify-center gap-4">
                        {tags.map((tag, i) => <button key={i} className="btn btn-sm">{tag}</button>)}
                    </div>
                    <h2 className="card-title mt-5">{bookName}</h2>
                    <p>{publisher}</p>
                    <div className="divider"></div>
                    <div className="flex justify-between">
                        <div>
                            <p>{author}</p>
                        </div>
                        <div>
                            <p>{rating}</p>
                        </div>
                    </div>
                    <div className="flex justify-between items-left">
                        <div className="badge badge-outline">{category}</div>
                        <div className="badge badge-outline">{category}</div>
                    </div>
                </div>
            </div>
        </Link>

    );
};

export default Book;