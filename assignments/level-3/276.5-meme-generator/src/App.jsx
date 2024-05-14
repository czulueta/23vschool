import React, { useState, useEffect } from 'react'
import InputForm from "./components/InputForm.jsx"
import MemeComponent from "./components/MemeComponent.jsx"
import List from "./components/List.jsx"
import axios from "axios"
import {v4 as uuidv4} from "uuid"
import "./app.css"


function App() {
  const [input, setInput] = useState({
    topText:"",
    bottomText:"",
    img:"",
    id:""
  })
  const [finishedMemes, setFinishedMemes] = useState([])

  const [memeImgs, setMemeImgs] = useState([])
  console.log(finishedMemes, "this is your new console log cesar")

  function handleChange(e){
    const { name, value } = e.target
    setInput(prev => ({
      ...prev,
      [name]: value
    }))
  }
  useEffect(() => {
    axios.get("https://api.imgflip.com/get_memes")
    .then(res => setMemeImgs(res.data.data.memes))
    .catch(err => console.log(err))
  },[])
  
  function handleSubmit(e){
    e.preventDefault();
    setFinishedMemes(prev => ([
      ...prev,
      {...input, id: uuidv4()}
    ]))
  }
  function handleSaveEdit(id, update){
    setFinishedMemes(prev => {
      return prev.map(meme => meme.id != id ? meme : update)
    })
  }
  function randomMeme(){
    const random = Math.floor(Math.random() * 100)
    setInput(prev => ({
        ...prev,
        img: memeImgs[random].url
    }))
  }
  function handleDelete(id){
    setFinishedMemes(prev => prev.filter(meme => meme.id !== id))
  }

  const memeList = finishedMemes.map( (meme, index) =>{
    return(
      <List 
        key = {index}
        topText= {meme.topText}
        bottomText = {meme.bottomText}
        img = {meme.img}
        handleSaveEdit={handleSaveEdit}
        handleDelete={handleDelete}
        id={meme.id}
       />
      
    )
  })
  return (
    <div className="app-container">
      <header className="header-app">
        <h1 className="header-title">Meme Generator</h1>
        <h3 className="header-subtitle">React Course Capstone</h3>
      </header>
      {/* form two inputs and a button submit */}
      <InputForm input={input} handleChange={handleChange} handleSubmit={handleSubmit}/>
      {/* component displaying meme image with title */}
      <MemeComponent randomMeme={randomMeme} input={input}/>
      {/* List of new Memes created */}
      {/* <List memes={finishedMemes}/> */}
      {memeList}
    </div>
  )
}

export default App
