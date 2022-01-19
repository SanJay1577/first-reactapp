import { HistoryToggleOff } from '@mui/icons-material';
import Button from '@mui/material/Button';
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";


export function EditMovie() {
    const { id } = useParams();
  // const movie = movies[id];
  const history = useHistory();

  const [movie, setMovie] = useState(null);

  const getMovie = () => {
    fetch(`https://61e2dd193050a100176822d2.mockapi.io/movies/${id}`,
      { method: "GET" })
      .then((data) => data.json())
      .then((mv) => setMovie(mv));
  };

  useEffect(getMovie, []);
    return movie ? <UpdateMovie movie={movie}/> : ""; 
    
}


// To solve the race between the UpdateForm Loading we use conditional rendering 

  function UpdateMovie({movie}){

  const [name, setName] = useState(movie.name);
  const [poster, setImage] = useState(movie.poster);
  const [rating, setRating] = useState(movie.rating);
  const [summary, setSummary] = useState(movie.summary);
  const [trailer, setTrailer] = useState(movie.trailer);
  const styles = { fontSize: "24px" };

 

  const editMovie = () => {
  const updatedMovie = {
    name,
    poster,
    rating,
    summary,
    trailer
  
  // console.log(updatedMovie);
  // setMovieList([...movies, updatedMovie]);
  // history.push("/movies");
};

// //Import Things in Post:
// 1.Method Post 
// 2.Body data & JSON data
// 3.Header JSON data 

fetch(`https://61e2dd193050a100176822d2.mockapi.io/movies/${movie.id}`,{
      method:"PUT",
      body:JSON.stringify(updatedMovie),
      headers:{
        "Content-Type":"application/json"
      },
   
 })
.then((data)=>data.json())
.then(()=>history.push("/movies"));
 

}; 


const history = useHistory();


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

        <input value={trailer}
        onChange={(event) => (setTrailer(event.target.value))}
        style={styles} placeholder="Enter trailer" />

     
              
      <Button onClick={editMovie}
          variant="outlined">Save Changes</Button>

    </div>
  );
}
