import { useEffect, useState } from "react";
import { supabase } from "../client";
import "../styles/Cart.css";

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: "Product 1", price: 10.99 },
    { id: 2, name: "Product 2", price: 12.99 },
    { id: 3, name: "Product 3", price: 9.99 },
    { id: 4, name: "Product 4", price: 8.99 },
    { id: 5, name: "Product 5", price: 7.99 },
    { id: 6, name: "Product 6", price: 6.99 },
    { id: 7, name: "Product 7", price: 5.99 },
    { id: 8, name: "Product 8", price: 4.99 },
  ]);

  const removeItem = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const totalPrice = cartItems.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className="cart-container">
      <div className="cart-sections">
        <div className="cart-tile">
          <h2>Shopping Cart</h2>
          {cartItems.map((item) => (
            <div className="cart-item shopping-cart-row" key={item.id}>
              <div className="cart-item-name">{item.name}</div>
              <div>{`$${item.price}`}</div>
              <div className="cart-item-remove" onClick={() => removeItem(item.id)}>
                X
              </div>
            </div>
          ))}
          <div className="cart-total">Total: ${totalPrice.toFixed(2)}</div>
        </div>
        <div className="payment-tile">
          <h2>Payment</h2>
          {/* Payment options */}
        </div>
        <div className="delivery-tile">
          <h2>Delivery Method</h2>
          {/* Delivery options */}
        </div>
      </div>
    </div>
  );
};

export default Cart;
