import React from "react";

import classes from "./UserList.module.css";
import Card from "../UI/Card";

const UsersList = (props) => {
  return (
    <Card cssClass={classes.users}>
      <ul>
        {props.users.map((user) => {
          return (
            <li>
              {user.name} ({user.age} years old)
            </li>
          );
        })}
      </ul>
    </Card>
  );
};

export default UsersList;
