import React, { Component } from "react";

export const Moviesprovider = React.createContext();

class Moviescontext extends Component {
  constructor() {
    super();
    this.state = {
      director: "Shankar",
      movie: "Boys",
      changeMovie: this.changeMovie,
      changeDirector: this.changeDirector,
    };
  }

  changeMovie = (newMovie) => {
    this.setState({ movie: newMovie });
  };

  changeDirector = (newDirector) => {
    this.setState({ director: newDirector });
  };

  render() {
    return (
      <Moviesprovider.Provider value={{ ...this.state }}>
        {this.props.children}
      </Moviesprovider.Provider>
    );
  }
}

export default Moviescontext;
