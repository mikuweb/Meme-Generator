import { useState } from "react";
import memesData from "../memesData";
export const Meme = () => {
  /**
   * Challenge: Get a random image from the `memesData` array
   * when the "new meme image" button is clicked.
   *
   * Log the URL of the image to the console. (Don't worry
   * about displaying the image yet)
   */
  const [memeImage, setMemeImage] = useState("");

  let url;
  const getMemeImage = () => {
    const memesArray = memesData.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    url = memesArray[randomNumber].url;
    setMemeImage(url);
  };

  return (
    <div className="meme-form">
      <div className="meme-flex">
        <input className="meme-input" type={"text"} placeholder={"Shut up"} />
        <input
          className="meme-input"
          type={"text"}
          placeholder={"and take my money"}
        />
      </div>
      <button onClick={getMemeImage} className="meme-btn">
        Get a new meme image
      </button>
      <img src={memeImage} className="meme-image"/>
    </div>
  );
};
