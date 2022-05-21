import React, { Component } from "react";

export const Moviesprovider = React.createContext();

class Moviescontext extends Component {
  constructor() {
    super();
    this.state = {
      director: "Shankar",
      movie: "Boys",
    };
  }

  render() {
    return (
      <Moviesprovider.Provider value={{ ...this.state }}>
        {this.props.children}
      </Moviesprovider.Provider>
    );
  }
}

export default Moviescontext;
