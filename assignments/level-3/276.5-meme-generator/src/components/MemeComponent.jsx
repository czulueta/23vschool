import React from "react";

export default function MemeComponent(props){
  return(
    <div>
      <button onClick={props.randomMeme}>New Meme</button>
      <h1>{props.input.topText}</h1>
      <img src={props.input.img} />
      <h1>{props.input.bottomText}</h1>
    </div>
  )
}