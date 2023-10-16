import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar";
import Shop from "./pages/shop/Shop";
import Cart from "./pages/cart/Cart";
import { ShopContextProvider } from "./context/shop-context";
import Footer from "./component/Footer";

function App() {
  return (
    <ShopContextProvider>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Shop/>}></Route>
        <Route path="/cart"element={<Cart/>}></Route>
      </Routes>
      <Footer/>
    </Router>
    </ShopContextProvider>
  );
}

export default App;
