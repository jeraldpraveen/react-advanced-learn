import React, { useState } from "react";
import "./App.css";
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UserList";

function App() {
  const [userList, setUserList] = useState([{ name: "Jerald", age: 28 }]);

  const onAddHandler = (enteredName, eneteredAge) => {
    setUserList((prevState) => {
      return [
        ...prevState,
        { name: enteredName, age: eneteredAge, id: Math.random().toString() },
      ];
    });
  };

  return (
    <>
      <AddUser onAdd={onAddHandler} />
      <UsersList users={userList} />;
    </>
  );
}

export default App;
