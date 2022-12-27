import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";

import HomePage from "./pages/home/HomePage";
import ShopPage from "./pages/ShopPage/ShopPage";
import ProductDetail from "./components/ProductDetail/ProductDetail";
import SignUp from "./pages/SignUp/SignUp";
import SignIn from "./pages/SignIn/SignIn";
import Cart from "./pages/Cart/Cart";
import Checkout from "./pages/Checkout/Checkout";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";

function App() {
  return (
    <div id="app-root" className="App">
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/shoppage" element={<ShopPage />} />
        <Route path="/detail/:id" element={<ProductDetail />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/signup" element={<SignUp></SignUp>}></Route>
        <Route path="/signin" element={<SignIn></SignIn>}></Route>
        <Route path="/cart/checkout" element={<Checkout></Checkout>}></Route>
        <Route path="*" element={<NotFoundPage></NotFoundPage>}></Route>
      </Routes>
    </div>
  );
}

export default App;
