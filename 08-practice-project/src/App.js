import "./App.css";
import AddUser from "./components/Users/AddUser";
import UserList from "./components/Users/UserList";

function App() {
  return (
    <>
      <AddUser />
      <UserList users={[]} />;
    </>
  );
}

export default App;
