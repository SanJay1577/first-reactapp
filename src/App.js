import "./App.css";
import {AddColor} from "./AddColor";
import Button from '@mui/material/Button';
import { MovieList } from "./MovieList";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { ThemeProvider, createTheme } from '@mui/material/styles';

import Brightness4Icon from '@mui/icons-material/Brightness4';

import { useState, useEffect } from "react";
import { Switch, Route, Redirect, useHistory } from "react-router-dom";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { Addmovie } from "./Addmovie";
import { TicTacToe } from "./TicTacToe";



export default function App() {


   
  const [movieList, setMovieList] = useState([]);

  const getMovies = ()=>{
    fetch("https://61e2dd193050a100176822d2.mockapi.io/movies", 
    {method:"GET"})
.then((data)=>data.json())
.then((movie)=>setMovieList(movie))
  }; 

  const deleteMovie = (id)=>{
    fetch(`https://61e2dd193050a100176822d2.mockapi.io/movies/${id}`, 
    {method:"DELETE"})
    .then((data)=>data.json())
    .then(()=>getMovies()); // to delete and refresh theh list
  }
 //remounted when route is changed so useEffect is trigged 
  useEffect(getMovies, []); 



 

  const history = useHistory();
  const [bg, setBg] = useState("dark")
  const theme = createTheme({
  palette: {
    mode: bg,
},
})
  
  return (
    
    <ThemeProvider theme = {theme}>
    

    <div className="App">

<AppBar position="static">
  <Toolbar>
  <Button color ="inherit" onClick={()=>{history.push("/")}}>Home</Button>
  <Button color ="inherit" onClick={()=>{history.push("/movies")}}>Movies</Button>
  <Button color ="inherit" onClick={()=>{history.push("/color")}}>Color Game</Button>
  <Button color ="inherit" onClick={()=>{history.push("/movie/add")}}>Add-Movie</Button>
  <Button color ="inherit" onClick={()=>{history.push("/films")}}>Films</Button>
  <Button color ="inherit" onClick={()=>{history.push("/tic-tac-toe")}}>TicTacToe</Button>
  <Button sx={{marginLeft: "auto"}} //to get the button right side end. 
  color ="inherit" 
   onClick={()=>{setBg(bg=== "light"? "dark": "light")}}>
     <Brightness4Icon/>
     </Button>
  </Toolbar>
</AppBar>
     
      {/* <nav>
        <Link to = "/">Home</Link>
        <Link to = "/movies">Movies</Link>
        <Link to = "/color">Color Game</Link>
        <Link to = "/movie/add">Add-Movie</Link>
        <Link to = "/films">Films</Link>

      </nav> */}
      <Switch>
      <Route exact path = "/">
            Welcome to Multi App
          </Route>

          <Route path = "/movies/:id">
              <MovieDetails movies={movieList}/>
          </Route>

      <Route path ="/movies">

        <div className="movie-content">
          {/* {colorlist.map((clr) => <ColorList clr={clr} />)} */}
          {movieList.map(({name, poster, rating, summary, id}, index)=><MovieList 
          // key ={index} // using key a unique value solves the child problem.. 
          key ={id}
          setMovieList={setMovieList}
        deleteButton ={
            <Button 
            color="error" onClick={()=>{
              deleteMovie(id);
            //   console.log("deleting movies...")
            //  // console.log(movieList);
            //   const deleteIndex = index;
            //  const remainingMovies = movieList.filter((movieList, idx) => (deleteIndex !== idx))
            //    console.log(remainingMovies);
            //    setMovieList(remainingMovies);
            
             }} 
            variant="outlined">Delete</Button>}
         id ={index}
        name={name} 
        poster={poster} 
        rating={rating}
        summary={summary}/>)}
        
        </div>
          </Route>

          <Route path = "/color">
       <AddColor/>
          </Route>
          <Route path ="/tic-tac-toe">
             <TicTacToe/>
          </Route>
          <Route path = "/movie/add">
            <Addmovie movies={movieList} setMovieList = {setMovieList}/>
          </Route>
          <Route path ="/films">
            <Redirect to ="/movies"/>
          </Route>
         
         <Route path ="**">
            <NotFound/>
         </Route>

        </Switch>
        

    

    </div>
    </ThemeProvider>

  )




}



function MovieDetails({movies}){
  console.log(movies)
  
const {id} = useParams();
const movie = movies[id];
const history = useHistory();


return(

    <div className = "trailer">
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
    <Button onClick={()=> history.goBack()}  
    variant="outlined">Back</Button>
   </div>
   </div>
 
);

}

function NotFound(){
  return(
    <div>
      <img src ="https://freefrontend.com/assets/img/html-funny-404-pages/CodePen-404-Page.gif" alt="404"/>
    </div>
  )
}


//Post -> Positive posting :
// update it locally and then then do the post Api Stuff : 
