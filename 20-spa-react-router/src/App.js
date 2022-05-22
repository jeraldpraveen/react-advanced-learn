import { BrowserRouter, Route } from "react-router-dom";
import Welcome from "./pages/Welcome";
import Products from "./pages/Products";
import MainHeader from "./components/MainHeader";
import ProductDetails from "./pages/ProductDetails";

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
        <Route path="/product-details/:productId">
          <ProductDetails />
        </Route>
      </main>
    </BrowserRouter>
  );
}

export default App;
