import "./App.css";
import {AddColor} from "./AddColor";
import Button from '@mui/material/Button';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { ThemeProvider, createTheme } from '@mui/material/styles';

import Brightness4Icon from '@mui/icons-material/Brightness4';

import { useState } from "react";
import { Switch, Route, Redirect, useHistory } from "react-router-dom";
import { Addmovie } from "./Addmovie";
import { TicTacToe } from "./TicTacToe";
import { MoviePage } from "./MoviePage";
import { MovieDetails } from "./MovieDetails";
import { EditMovie } from "./EditMovie";



export default function App() {

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
              <MovieDetails />
          </Route>

      <Route path ="/movies">

          <MoviePage/>

          </Route>

          <Route path = "/color">
       <AddColor/>
          </Route>
          <Route path ="/tic-tac-toe">
             <TicTacToe/>
          </Route>
          <Route path = "/movie/add">
            <Addmovie/>
          </Route>
          <Route path ="/movie/edit/:id">
             <EditMovie/>
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



function NotFound(){
  return(
    <div>
      <img src ="https://freefrontend.com/assets/img/html-funny-404-pages/CodePen-404-Page.gif" alt="404"/>
    </div>
  )
}


