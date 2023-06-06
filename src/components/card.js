
export default function Card({ movielist, movie, setMovie }) {
    const removeMovie = (id) => {
        fetch(`http://localhost:3003/movies/${id}`, {
            method: 'DELETE'
        })
            .then((response) => response.json())
            .then((data) => {
                setMovie((prevMovies) => prevMovies.filter((movie) => movie.id !== id));
            })
            .catch((error) => {
                console.log('Error deleting movie:', error);
            });
    };

    return (
        <div className="col-xs-12 col-sm-4" >
            <div className="card">
                <div className="img-card">
                    <img src={movielist.image} alt="" />
                </div>
                <div className="card-content">
                    <h4 className="card-title">
                        {movielist.name}
                    </h4>
                    <span className="movieRating">{movielist.rating}</span>
                    <p className="">
                        {movielist.overview}
                    </p>
                </div>
                <div className="card-read-more d-flex justify-content-start">
                    <button onClick={() => removeMovie(movielist.id)} className="btn btn-danger">Delete</button>
                </div>
            </div>
        </div>
    )
}