import React from "react";
import { Route, Link } from "react-router-dom";

const Welcome = () => {
  return (
    <section>
      <Link to="/welcome/new-user">Welcome</Link>
      <Route exact path="/welcome/new-user">
        <p>Welcome New User</p>
      </Route>
    </section>
  );
};

export default Welcome;
