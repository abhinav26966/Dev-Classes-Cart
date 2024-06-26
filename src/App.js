import './App.css';
import { a, b } from './components/Products/Products';
import Products from './components/Products/Products';
import { useRef, useState } from 'react';
import CartContext from './context/CartContext';
import Cart from './components/Cart/Cart';
import CartComponent from './components/CartComponent/CartComponent';

function App() {
  let [cart, setCart] = useState({});
  const cartRef = useRef();

  function increaseQuantity(product) {
    const newCart = { ...cart };
    if (!newCart[product.id]) {
      newCart[product.id] = { ...product, quantity: 0 };
    }
    newCart[product.id].quantity += 1;
    setCart(newCart);
    cartRef.current.addToCart(product);
  }

  function decreaseQuantity(product) {
    const newCart = { ...cart };
    if (!newCart[product.id]) return;
    newCart[product.id].quantity -= 1;
    if (newCart[product.id].quantity <= 0) {
      delete newCart[product.id];
    }
    setCart(newCart);
    cartRef.current.decreaseQuantity(product);
  }

  return (
    <CartContext.Provider value={{ cart, increaseQuantity, decreaseQuantity }}>
      <div className="App">
        <CartComponent />
        <Products />
        <Cart ref={cartRef} />
      </div>
    </CartContext.Provider>
  );
}

export default App;
