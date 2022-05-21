import React, { useContext } from "react";
import { Moviesprovider } from "./Moviescontext";

const A = () => {
  const obj = useContext(Moviesprovider);

  return (
    <div>
      <h1>This is A Componenet</h1>
      <h4>Director Name is {obj.director}</h4>
    </div>
  );
};

export default A;
