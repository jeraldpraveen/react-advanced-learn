import React, { useContext } from "react";
import { Moviesprovider } from "./Moviescontext";

const A = () => {
  const obj = useContext(Moviesprovider);

  const changeMovieHandler = () => {
    obj.changeMovie("Doctor");
  };

  return (
    <div style={{ backgroundColor: "greenyellow" }}>
      <h1>This is A Componenet</h1>
      <h4>Director Name is {obj.director}</h4>

      <button type="button" onClick={changeMovieHandler}>
        Change Movie Name
      </button>
    </div>
  );
};

export default A;
