import Button from '@mui/material/Button';
import { MovieList } from "./MovieList";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
//Post -> Positive posting :
// update it locally and then then do the post Api Stuff : 
export function MoviePage() {

  const [movies, setMovieList] = useState([]);
  const history = useHistory();

  const getMovies = () => {
    fetch("https://61e2dd193050a100176822d2.mockapi.io/movies",
      { method: "GET" })
      .then((data) => data.json())
      .then((movie) => setMovieList(movie));
  };

  const deleteMovie = (id) => {
    fetch(`https://61e2dd193050a100176822d2.mockapi.io/movies/${id}`,
      { method: "DELETE" })             
      .then((data) => data.json())
      .then(() => getMovies()); // to delete and refresh theh list
  };
  //remounted when route is changed so useEffect is trigged 
  useEffect(getMovies, []);
  return (
    <div>
      <div className="movie-content">
        {/* {colorlist.map((clr) => <ColorList clr={clr} />)} */}
        {movies.map(({ name, poster, rating, summary, id }, index) => <MovieList
          // key ={index} // using key a unique value solves the child problem.. 
          key={id}
          setMovieList={setMovieList}
          deleteButton={<Button
            color="error" onClick={() => {
              deleteMovie(id);
              //   console.log("deleting movies...")
              //  // console.log(movieList);
              //   const deleteIndex = index;
              //  const remainingMovies = movieList.filter((movieList, idx) => (deleteIndex !== idx))
              //    console.log(remainingMovies);
              //    setMovieList(remainingMovies);
            }}
            variant="outlined">Delete</Button>}
            editButton={<Button
              color="error" onClick={() => {
                history.push(`/movie/edit/${id}`)}}
               variant="outlined">Edit</Button>}
          id={id}
          name={name}
          poster={poster}
          rating={rating}
          summary={summary} />)}

      </div>
    </div>
  );
}
