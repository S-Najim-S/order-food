import { useState } from "react";
import "./App.css";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import CartProvider from "./store/CartProvider";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  const orderHandler = () => {
    console.log("Hello world");
    setCartIsShown(false);
  };
  return (
    <CartProvider>
      {cartIsShown && (
        <Cart onCancel={hideCartHandler} onOrder={orderHandler} />
      )}

      <Header onClick={showCartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
