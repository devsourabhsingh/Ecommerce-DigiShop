import "./App.css";
import Home from "./FashionHome/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap-icons/font/bootstrap-icons.min.css";
import "react-loading-skeleton/dist/skeleton.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NewProductListing from "./Products/NewProductListing";
import ProductDetail from "./Products/ProductDetail";
import GetAllCart from "./FashionHome/GetAllCart";
import { SkeletonTheme } from "react-loading-skeleton";

function App() {
  
  return (
    <div className="App">
      <SkeletonTheme>
        <Router>
          <Home />
          <Routes>
            <Route path="/" element={<NewProductListing />} />
            <Route path="/product/:productId" element={<ProductDetail />} />
            <Route path="/getallcart" element={<GetAllCart />} />
            <Route> 404 Not Found </Route>
          </Routes>
        </Router>
      </SkeletonTheme>
    </div>
  );
}

export default App;
