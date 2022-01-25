import { HistoryToggleOff } from '@mui/icons-material';
import Button from '@mui/material/Button';
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import {useFormik} from "formik";
import * as yup from 'yup';
import { movieValidationSchema } from './Addmovie';


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

   
const {handleSubmit, values, handleChange, handleBlur, touched, errors} =  useFormik({
  initialValues : movie,
 
  validationSchema: movieValidationSchema,
  onSubmit:(updatedMovie)=>{
    console.log("onSubmit", updatedMovie)
    editMovie(updatedMovie);
  },
  
});

 

  const editMovie = (updatedMovie) => {


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

const styles = { fontSize: "24px" };

const history = useHistory();


  return (
    <div className="movie-header">

<form onSubmit={handleSubmit} className="movie-header">

<input 
 id = "poster"
 name ="poster"
 type = "poster" 
 value={values.poster}
 onChange={handleChange}
 onBlur={handleBlur}
 placeholder="Enter Movie URL" 
 style={styles}/>

 {touched.poster && errors.poster ? errors.poster : ""}

<input 
id = "name"
name ="name"
type = "name" 
value={values.name}
onChange={handleChange}
onBlur={handleBlur}
style={styles}
placeholder="Enter Moview Name" />

 {touched.name && errors.name ? errors.name : ""}

<input 
 id = "rating"
 name ="rating"
 type = "rating" 
 value={values.rating}
 onChange={handleChange}
 onBlur={handleBlur}
 style={styles}
placeholder="Enter Ratings" />

{touched.rating && errors.rating ? errors.rating : ""}

<input 
 id = "summary"
 name ="summary"
 type = "summary" 
 value={values.summary}
 onChange={handleChange}
 onBlur={handleBlur}
 style={styles}
placeholder="Enter Summary" />

{touched.summary && errors.summary ? errors.summary : ""}

  <input 
   id = "trailer"
   name ="trailer"
   type = "trailer" 
   value={values.trailer}
   onChange={handleChange}
   onBlur={handleBlur}
   style={styles}
   placeholder="Enter trailer" />

 {touched.trailer && errors.trailer ? errors.trailer : ""}


        
<Button 
 type="submit"
 variant="outlined">
  Edit Movie
  </Button>

</form>

    </div>
  );
}
