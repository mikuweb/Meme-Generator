import { useState } from "react";
import { Meme } from "./components/Meme";
import { Nav } from "./components/Nav";
import "./style.css";

function App() {

const getMemeImage = () => {
    const memesArray = memesData.data.memes
    const randomNumber = Math.floor(Math.random() * memesArray.length)
    // memesArray[randomNumber].url  <-- this line is incomplete!
    
}

  return (
    <div>
      <Nav />
      <Meme />
    </div>
  );
}

export default App;
