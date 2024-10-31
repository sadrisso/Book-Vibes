import bannerImg from '../../../boi-poka-Book-Vibe-Resources/img/books.jpg'

const Banner = () => {
    return (
        <div>
            <div className="hero bg-base-200 h-[600px] my-8">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img
                        src={bannerImg}
                        className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-7xl font-bold w-2/3 mb-10">Books to freshen up your bookshelf</h1>
                        <button className="btn bg-[#23BE0A] text-white text-xl">View The List</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;