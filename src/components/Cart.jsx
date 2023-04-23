import { useEffect, useState } from "react";
import { supabase } from "../client";
import "../styles/Cart.css";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    // Get cart data when component mounts
    const cartData = localStorage.getItem("shopping_cart");
    if (cartData){
      setCartItems(JSON.parse(cartData));
    }
  })

  const removeItem = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const totalPrice = cartItems.reduce((acc, item) => acc + item.disc_price, 0);

  return (
    <div className="cart-container">
      <div className="cart-sections">
        <div className="cart-tile">
          <h2>Shopping Cart</h2>
          {cartItems.map((item) => (
            <div className="cart-item shopping-cart-row" key={item.id}>
              <div className="cart-item-name">{item.name}</div>
              <div>{`$${item.disc_price}`}</div>
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
