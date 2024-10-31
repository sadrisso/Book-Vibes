

const Book = ({ book }) => {

    const { bookName, author, image, rating, publisher, } = book

    return (

        <div className="card bg-base-100 border">
            <figure className="px-10 pt-10">
                <img
                    src={image}
                    alt="Shoes"
                    className="rounded-xl w-[500px] h-[300px]" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{bookName}</h2>
                <p>{publisher}</p>
                <div className="flex justify-between items-center">
                    <p>{author}</p>
                    <p>{rating}</p>
                </div>
                <div className="card-actions">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>

    );
};

export default Book;