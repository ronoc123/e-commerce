import { Link, Routes, Route } from "react-router-dom";
import HomePage from "./pages/sharedLayout/HomePage";
import SharedPage from "./pages/sharedLayout/SharedPage";
import CheckOutPage from "./pages/sharedLayout/CheckOutPage";
import ProductPage from "./pages/sharedLayout/ProductPage";
import SingleProductPage from "./pages/SingleProductPage";
import CartPage from "./pages/sharedLayout/CartPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<SharedPage />}>
        <Route index element={<HomePage />}></Route>
        <Route path="product" element={<ProductPage />} />
        <Route path="products/:id" element={<SingleProductPage />} />
        <Route path="checkout" element={<CheckOutPage />} />
        <Route path="cart" element={<CartPage />} />
      </Route>
    </Routes>
  );
}

export default App;
