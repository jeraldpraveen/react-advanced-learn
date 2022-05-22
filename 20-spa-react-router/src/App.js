import { BrowserRouter, Route } from "react-router-dom";
import Welcome from "./pages/Welcome";
import Products from "./pages/Products";
import MainHeader from "./components/MainHeader";

function App() {
  return (
    <BrowserRouter>
      <MainHeader />
      <main>
        <Route exact path="/">
          <h1>Home</h1>
        </Route>
        <Route path="/welcome">
          <Welcome />
        </Route>
        <Route path="/products">
          <Products />
        </Route>
      </main>
    </BrowserRouter>
  );
}

export default App;
