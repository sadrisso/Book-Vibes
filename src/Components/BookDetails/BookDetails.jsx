import { useParams } from "react-router-dom";


const BookDetails = () => {

    const {bookId} = useParams();

    console.log(bookId)
    return (
        <div>
            Book details
        </div>
    );
};

export default BookDetails;