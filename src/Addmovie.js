import Button from '@mui/material/Button';
import { useState } from "react";
import { useHistory } from "react-router-dom";

export function Addmovie({ movies, setMovieList }) {

  const history = useHistory();
  const [name, setName] = useState("");
  const [poster, setImage] = useState("");
  const [rating, setRating] = useState("");
  const [summary, setSummary] = useState("");
  const styles = { fontSize: "24px" };
  return (
    <div className="movie-header">

      <input value={poster}
        onChange={(event) => (setImage(event.target.value))}
        style={styles} placeholder="Enter Movie URL" />

      <input value={name}
        onChange={(event) => (setName(event.target.value))}
        style={styles} placeholder="Enter Moview Name" />

      <input value={rating}
        onChange={(event) => (setRating(event.target.value))}
        style={styles} placeholder="Enter Ratings" />

      <input value={summary}
        onChange={(event) => (setSummary(event.target.value))}
        style={styles} placeholder="Enter Summary" />

      {/* <button onClick={()=>{
              const newMovie ={
                name,
                image,
                rating,
                summary,
              };
              console.log(newMovie)
              setMovieList([...movieList, newMovie]);
            }} >
              Add Movie</button> */}
              
      <Button onClick={() => {
        const newMovie = {
          name,
          poster,
          rating,
          summary,
        };
        console.log(newMovie);
        setMovieList([...movies, newMovie]);
        history.push("/movies");
      }}
        variant="outlined">Add Movie</Button>

    </div>
  );
}
