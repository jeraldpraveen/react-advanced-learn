import React, { useContext } from "react";
import { Moviesprovider } from "./Moviescontext";

const B = () => {
  const obj = useContext(Moviesprovider);

  const changeDirectorHandler = () => {
    obj.changeDirector("Nelson");
  };

  return (
    <div style={{ backgroundColor: "pink" }}>
      <h1>This is B Componenet</h1>
      <h4>Movie Name is {obj.movie}</h4>
      <button type="button" onClick={changeDirectorHandler}>
        Change Director Name
      </button>
    </div>
  );
};

export default B;
