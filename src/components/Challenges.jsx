import { useState } from "react";

export const Challenges = () => {
  const [contact, setContact] = useState({
    firstName: "John",
    lastName: "Doe",
    phone: "+1 (719) 555-1212",
    email: "itsmyrealname@example.com",
    isFavorite: false,
  });
  /**
   * Challenge: Use a ternary to determine which star image filename
   * should be used based on the `contact.isFavorite` property
   *
   * `true` => "star-filled.png"
   * `false` => "star-empty.png"
   *
   * Then use the starIcon value to display the correct image
   */

  //   let starIcon = // Your code here

  const toggleFavorite = ()  => {
    setContact(prevState => 
        ({...prevState,
            isFavorite : !prevState.isFavorite
        }) 
        )
  }

  return (
    <main>
      <article className="card">
        <div>☺</div>
        <div className="card--info">
          <div onClick={toggleFavorite}>{contact.isFavorite ? "🌟" : "☆"}</div>
          <h2 className="card--name">
            {contact.firstName} {contact.lastName}
          </h2>
          <p className="card--contact">{contact.phone}</p>
          <p className="card--contact">{contact.email}</p>
        </div>
      </article>
    </main>
  );
};
