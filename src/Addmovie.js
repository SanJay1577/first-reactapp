import { HistoryToggleOff } from '@mui/icons-material';
import Button from '@mui/material/Button';
import { useState,  } from "react";
import { useHistory } from "react-router-dom";

export function Addmovie() {

  
  const [name, setName] = useState("");
  const [poster, setImage] = useState("");
  const [rating, setRating] = useState("");
  const [summary, setSummary] = useState("");
  const [trailer, setTrailer] = useState("");
  const styles = { fontSize: "24px" };

 

  const addMovie = () => {
  const newMovie = {
    name,
    poster,
    rating,
    summary,
    trailer
  
  // console.log(newMovie);
  // setMovieList([...movies, newMovie]);
  // history.push("/movies");
};

// //Import Things in Post:
// 1.Method Post 
// 2.Body data & JSON data
// 3.Header JSON data 

fetch(`https://61e2dd193050a100176822d2.mockapi.io/movies/`,{
      method:"POST",
      body:JSON.stringify(newMovie),
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

     
              
      <Button onClick={addMovie}
          variant="outlined">Add Movie</Button>

    </div>
  );
}
