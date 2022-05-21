import "./App.css";
import A from "./components/A";
import B from "./components/B";
import Moviescontext from "./components/Moviescontext";

function App() {
  return (
    <div className="App">
      <h1>ContextAPI</h1>
      <Moviescontext>
        <A />
        <B />
      </Moviescontext>
    </div>
  );
}

export default App;
