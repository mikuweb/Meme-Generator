import { useState } from "react";
import memesData from "../memesData";
export const Meme = () => {
  /**
   * Challenge: Update our state to save the meme-related
   * data as an object called `meme`. It should have the
   * following 3 properties:
   * topText, bottomText, randomImage.
   *
   * The 2 text states can default to empty strings for now,
   * amd randomImage should default to "http://i.imgflip.com/1bij.jpg"
   *
   * Next, create a new state variable called `allMemeImages`
   * which will default to `memesData`, which we imported above
   *
   * Lastly, update the `getMemeImage` function and the markup
   * to reflect our newly reformed state object and array in the
   * correct way.
   */

  // const [memeImage, setMemeImage] = useState("http://i.imgflip.com/1bij.jpg");
  const [meme, setMeme] = useState({
    topText: "TOP",
    bottomText: "Bottom",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });

  const [allMemeImages, setAllMemeImages] = useState(memesData);

  let url;
  const getMemeImage = () => {
    const memesArray = allMemeImages.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    url = memesArray[randomNumber].url;
    setMeme((preMeme) => ({
      ...preMeme,
      randomImage: url,
    }));
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

      <div className="meme-image-container">
        <img src={meme.randomImage} className="meme-image" />
        <p className="meme-image-top">{meme.topText}</p>
        <p className="meme-image-bottom">{meme.bottomText}</p>
      </div>
    </div>
  );
};
