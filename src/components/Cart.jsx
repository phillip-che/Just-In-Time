import { useEffect, useState } from "react";
import { supabase } from "../client";
import "../styles/Cart.css";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');

  let [user, setUser] = useState("");

  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Payment submitted!');
    // add code to submit payment information here
  };

  useEffect(() => {

    // Get cart data when component mounts
    const cartData = localStorage.getItem("shopping_cart");
    if (cartData) {
      setCartItems(JSON.parse(cartData));
    }

    // sets user
    supabase.auth.onAuthStateChange((event, session) => {
      console.log(session);
      if (session) {
        setUser(session.user);
      }
    })

    const getCartItems = async () => {
      await supabase
        .from('Carts')
        .select()
        .eq('user_id', user.id)
        .then((response) => {
          console.log(response.data);
          setCartItems(response.data);
        });
    }
    getCartItems();
  }, []);

  const totalPrice = (cartItems || []).reduce((acc, item) => acc + item.disc_price, 0);

  const onCheckout = () => {

  }

  const removeItem = async (id) => {
    await supabase
      .from('Carts')
      .delete()
      .eq('product_id', id)
      .then({ response, error } = () => {
        setCartItems(cartItems.filter((item) => item.id !== id));
      })
  }

  return (
    <div className="cart-container">
      <div className="cart-sections">
        <div className="cart-tile">
          <h2>Shopping Cart</h2>
          {(cartItems || []).map((item) => (
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
          <h2 className="tile-header">Payment</h2>
          <form className="payment-form" onSubmit={handleSubmit}>
            <label htmlFor="cardNumber">Card Number:</label>
            <input type="text" id="cardNumber" value={cardNumber} onChange={(e) => setCardNumber(e.target.value)} />

            <label htmlFor="expiryDate">Expiry Date:</label>
            <input type="text" id="expiryDate" value={expiryDate} onChange={(e) => setExpiryDate(e.target.value)} />

            <label htmlFor="cvv">CVV:</label>
            <input type="text" id="cvv" value={cvv} onChange={(e) => setCvv(e.target.value)} />

            <button type="submit">Submit Payment</button>
          </form>
        </div>
        <div className="delivery-tile">
          <h2 className="tile-header">Delivery Method</h2>
          <div className="delivery-options-container">
            <div className="option">
              <input
                type="radio"
                id="pick-up"
                name="delivery-option"
                value="pick-up"
                checked={selectedOption === "pick-up"}
                onChange={handleOptionChange}
              />
              <label htmlFor="pick-up">Pick up at store</label>
            </div>
            <div className="option">
              <input
                type="radio"
                id="deliver"
                name="delivery-option"
                value="deliver"
                checked={selectedOption === "deliver"}
                onChange={handleOptionChange}
              />
              <label htmlFor="deliver">Deliver to home</label>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
export default Cart;

