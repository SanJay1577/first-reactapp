import { useState } from "react";
// import Button from '@mui/material/Button';
import Badge from '@mui/material/Badge';
import IconButton from '@mui/material/IconButton';



export function Counter() {
  // const like = 0;
  const [like, setLike] = useState(0);
  const [dislike, setDislike] = useState(0);
  return (
    <div class="counter-app">
      {/* <button onClick={() => setLike(like + 1)}>👍 {like}</button> */}
       {/* <Button onClick={() => setLike(like + 1)} variant="outlined">👍 {like}</Button> */}
      
       <IconButton aria-label="like-button"
      color="primary"
      onClick={() => setLike(like + 1)}>
      <Badge badgeContent={like} color="primary">
      👍
     </Badge>
     
     </IconButton>

      {/* <button onClick={() => setDislike(dislike + 1)}>👎 {dislike}</button> */}
      {/* <Button onClick={() => setDislike(dislike + 1)} variant="outlined">👎 {dislike}</Button> */}
      <IconButton aria-label="dislike-button"
      color="primary"
       onClick={() => setDislike(dislike + 1)}>
      <Badge badgeContent={dislike} color="error">
       👎
     </Badge>
     </IconButton>

    </div>
  );
}
