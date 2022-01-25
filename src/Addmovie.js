import { HistoryToggleOff } from '@mui/icons-material';
import Button from '@mui/material/Button';
import { useState,  } from "react";
import { useHistory } from "react-router-dom";
import {useFormik} from "formik";
import * as yup from 'yup';


export const movieValidationSchema = yup.object({
  
  name:yup.string().required("Why not fill this name? "),

  summary:yup.string().required("Why not fill this summary? ")
  .min(10, "Need minim ten values"),

  poster:yup.string().required("Why not fill this poster? ")
  .min(5,"Need more digits"),

  rating:yup.number().required("Why not fill this rating? "),

  trailer:yup.string().required("Why not fill this trailer? "),

});

export function Addmovie() {

  
const {handleSubmit, values, handleChange, handleBlur, touched, errors} =  useFormik({
  initialValues : {
    name:"", 
    poster:"",
    rating:"",
    summary:"",
    trailer:""},
 
  validationSchema: movieValidationSchema,
  onSubmit:(newMovie)=>{
    console.log("onSubmit", newMovie)
    addMovie(newMovie);
  },
  
});

  
  const styles = { fontSize: "24px" };

 

  const addMovie = (newMovie) => {


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
        Add Movie
        </Button>

    </form>
  );
}


// export function Addmovie() {

  
//   const [name, setName] = useState("");
//   const [poster, setImage] = useState("");
//   const [rating, setRating] = useState("");
//   const [summary, setSummary] = useState("");
//   const [trailer, setTrailer] = useState("");
//   const styles = { fontSize: "24px" };

 

//   const addMovie = () => {
//   const newMovie = {
//     name,
//     poster,
//     rating,
//     summary,
//     trailer
  
//   // console.log(newMovie);
//   // setMovieList([...movies, newMovie]);
//   // history.push("/movies");
// };

// // //Import Things in Post:
// // 1.Method Post 
// // 2.Body data & JSON data
// // 3.Header JSON data 

// fetch(`https://61e2dd193050a100176822d2.mockapi.io/movies/`,{
//       method:"POST",
//       body:JSON.stringify(newMovie),
//       headers:{
//         "Content-Type":"application/json"
//       },
   
//  })
// .then((data)=>data.json())
// .then(()=>history.push("/movies"));
 

// }; 


// const history = useHistory();


//   return (
//     <div className="movie-header">

//       <input value={poster}
//         onChange={(event) => (setImage(event.target.value))}
//         style={styles} placeholder="Enter Movie URL" />

//       <input value={name}
//         onChange={(event) => (setName(event.target.value))}
//         style={styles} placeholder="Enter Moview Name" />

//       <input value={rating}
//         onChange={(event) => (setRating(event.target.value))}
//         style={styles} placeholder="Enter Ratings" />

//       <input value={summary}
//         onChange={(event) => (setSummary(event.target.value))}
//         style={styles} placeholder="Enter Summary" />

//         <input value={trailer}
//         onChange={(event) => (setTrailer(event.target.value))}
//         style={styles} placeholder="Enter trailer" />

     
              
//       <Button onClick={addMovie}
//           variant="outlined">Add Movie</Button>

//     </div>
//   );
// }
