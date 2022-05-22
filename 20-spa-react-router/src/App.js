import { BrowserRouter, Route } from "react-router-dom";
import Welcome from "./pages/Welcome";
import Products from "./pages/Products";

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/">
        <h1>Home</h1>
      </Route>
      <Route path="/welcome">
        <Welcome />
      </Route>
      <Route path="/products">
        <Products />
      </Route>
    </BrowserRouter>
  );
}

export default App;
