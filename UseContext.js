import React, { createContext, useState, useContext } from 'react';


const CartContext = createContext();
export function CartProvider() {
  const [cart, setCart] = useState([]);
  const addToCart = (item) => {
    setCart([...cart, item]);
  };
  const removeFromCart = (index) => {
    const updatedCart = [...cart];
    updatedCart.splice(index, 1);
    setCart(updatedCart);
  };
  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      <Cart/>
      <ProductList/>
    </CartContext.Provider>
  );
}
function Cart() {
    const { cart, removeFromCart } = useContext(CartContext)
    return (
      <div className="cart">
        <h2>Shopping Cart</h2>
        <ul>
          {cart.map((item, index) => (
            <li key={index}>
              {item.name} - ${item.price}
              <button onClick={() => removeFromCart(index)}>Remove</button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
  function ProductList() {
    const { addToCart } = useContext(CartContext)
    const products = [
      { id: 1, name: 'Product 1', price: 10 },
      { id: 2, name: 'Product 2', price: 20 },
      { id: 3, name: 'Product 3', price: 30 },
    ];
    return (
      <div>
        <h2>Products</h2>
        <ul>
          {products.map(product => (
            <li>
              {product.name} - ${product.price}
              <button onClick={() => addToCart(product)}>Add to Cart</button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
