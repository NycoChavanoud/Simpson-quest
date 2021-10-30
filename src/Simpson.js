import React from "react";

function Simpson({ simpson }) {
  return (
    simpson && (
      <>
        <img src={simpson.image} alt={simpson.character}></img>
        <h3>{simpson.character} said : </h3>
        <p>{simpson.quote}</p>
      </>
    )
  );
}

export default Simpson;
