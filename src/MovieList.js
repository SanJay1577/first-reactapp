import { useState,useEffect } from "react";
import { Counter } from "./Counter";
// import Button from '@mui/material/Button';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import {useHistory} from "react-router-dom";


//props
export function MovieList({ name, poster, rating, summary, editButton, deleteButton, id}) {
  const [show, setShow] = useState(false);

  const styles = { color: rating >= 8 ? "teal" : "crimson", fontSize: "20px",};
  const history = useHistory();

 
  // const descriptionStyles = { display: show ? "block" : "none" };
  
  //  if(rating>8){
  //   styles.color = "green";
  //  }
  const [movieList, setMovieList] = useState([]);

  

  
  return (
    <div class="card-container">
      <div class="card">

        <h2 className="user-name"> {name} </h2>

        <img src={poster} alt="shark" />
        <p style={styles}>Ratings : {rating}⭐
        <IconButton aria-label="cart" onClick={() => setShow(!show)} color="primary">
           {show ? <ExpandLessIcon/> : <ExpandMoreIcon/>} 
        </IconButton>
       
         
        <IconButton aria-label="cart" color="primary" 
        onClick ={()=> history.push(`/movies/${id}`)} >
           <InfoIcon/>
        </IconButton>

     

        </p>
        
        {show ? <p>Summary: {summary}</p> : ""}
        {/* conditional styling */}
        {/* <p style = {descriptionStyles}>Summary: {summary}</p> */}
        {/* <button onClick={() => setShow(!show)}>Toggle discription</button> */}
       
        {/* <Button onClick={() => setShow(!show)} variant="outlined">Toggle discription <ExpandMoreIcon/></Button> */}
        {deleteButton} {editButton}
        <Counter />
      </div>
    </div>
  );
}
