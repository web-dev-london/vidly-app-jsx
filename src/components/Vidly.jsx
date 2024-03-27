import React, { useState } from 'react';
import { listOfMovies } from '../services/fakeMovieService';



const Vidly = () => {
    const [movies, setMovies] = useState(listOfMovies);

    const handleDelete = (movie) => {
        const newMovies = movies.filter(el => el._id !== movie._id);
        setMovies(newMovies)
        return movies;
    }

    const movieContents =
        movies.map(movie => <tr key={movie._id}>
            <td>{movie.title}</td>
            <td>{movie.genre.name}</td>
            <td>{movie.numberInStock}</td>
            <td>{movie.dailyRentalRate}</td>
            <td><button onClick={() => handleDelete(movie)} className="btn btn-danger btn-sm">Delete</button></td>
        </tr>)

    function countLength() {
        if (movies.length === 0) {
            return `There are no movies in the list`
        } else {
            return `Showing ${movies.length} movies in the list.`
        }
    }

    return (
        <>
            <p>{countLength()}</p>
            <table className="table">
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Genre</th>
                        <th>Stock</th>
                        <th>Rate</th>
                    </tr>
                </thead>
                <tbody>
                    {movieContents}
                </tbody>
            </table>
        </>
    )
}

export default Vidly