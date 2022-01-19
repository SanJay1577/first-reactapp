import Button from '@mui/material/Button';
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";

export function MovieDetails() {


  const { id } = useParams();
  // const movie = movies[id];
  const history = useHistory();

  const [movie, setMovie] = useState([]);

  const getMovie = () => {
    fetch(`https://61e2dd193050a100176822d2.mockapi.io/movies/${id}`,
      { method: "GET" })
      .then((data) => data.json())
      .then((mv) => setMovie(mv));
  };

  useEffect(getMovie, []);

  return (

    <div className="trailer">
      <iframe
        width="80%" height="523" src={movie.trailer}
        title="YouTube video player" frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen>
      </iframe>

      <div className="movieList">
        <h2 className="user-name"> {movie.name} </h2>
        <p>{movie.rating}⭐</p>
        <p>{movie.summary}</p>
        <Button onClick={() => history.goBack()}
          variant="outlined">Back</Button>
      </div>
    </div>

  );

}
