import { useState } from "react";
import { Challenges } from "./components/Challenges";
import { Meme } from "./components/Meme";
import { Nav } from "./components/Nav";
import "./style.css";

function App() {

  return (
    <div>
      <Nav />
      <Meme />
    </div>
  );
}

export default App;
