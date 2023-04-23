import { useEffect, useState } from "react";
import { supabase } from "../client";
import "../styles/Cart.css";

const Cart = () => {

  const [cartItems, setCartItems] = useState([]);
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');

  const [fullName, setFullName] = useState("");
  const [addressLine1, setAddressLine1] = useState("");
  const [addressLine2, setAddressLine2] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zipCode, setZipCode] = useState("");


  const [user, setUser] = useState("");
  const [cartTotal, setCartTotal] = useState(0);

  const [selectedOption, setSelectedOption] = useState(null);

  const [reload, setReload] = useState(false);

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Payment submitted!');
    // add code to submit payment information here
  };

  useEffect(() => {
    // sets user
    supabase.auth.onAuthStateChange((event, session) => {
      console.log(session);
      if (session) {
        setUser(session.user);
        const getCartItems = async () => {
          await supabase
            .from('Carts')
            .select()
            .eq('user_id', session.user.id)
            .then((response) => {
              console.log(response.data);
              const getCartTotal = () => {
                let sum = 0;
                response.data.forEach((item) => {
                  sum += (item.price * item.quantity);
                })
                setCartTotal(sum.toFixed(2));
              }
              setCartItems(response.data);
              getCartTotal();
            });
        }
        getCartItems();
      }
    });
  }, []);

  useEffect(() => {
    const getCartTotal = () => {
      let sum = 0;
      cartItems.forEach((item) => {
        sum += (item.price * item.quantity);
      })
      setCartTotal(sum.toFixed(2));
    }
    getCartTotal();
  }, [cartItems])

  const onCheckout = () => {

  }

  const removeItem = async (id) => {
    await supabase
      .from('Carts')
      .delete()
      .eq('product_id', id)
      .then((error) => {
        console.log(error);
        setCartItems(cartItems.filter((item) => item.id !== id));
      })
  }

  const changeQuantity = (item, ind, change) => {
    setReload(!reload);
    console.log(item.quantity);

    if (item.quantity === 0 && change === -1) {
      return;
    }

    let temp = cartItems.slice();
    temp[ind] = { ...item, quantity: parseInt(item.quantity) + change };
    setCartItems(temp);
    console.log(item.quantity);
  }

  return (
    <div className="cart-container">
      <div className="cart-sections">
        <div className="cart-tile">
          <h2 className="shopping-cart-h2">Shopping Cart</h2>

          {cartItems ? (
            <div>
              {cartItems.map((item, index) => (
                <div className="shopping-list-item-container">
                  <span className="cart-item shopping-cart-row" key={item.id}>
                    <div className="cart-item-name">{item.product_name}&nbsp;&nbsp; </div>
                    <div>{`$${item.price}`}</div>
                    {/* STYLE THIS */}
                  </span>
                  <span className="modifications key={item.id}">
                    <button onClick={() => changeQuantity(item, index, -1)}> - </button>
                    <span className="cart-item-quantity">{item.quantity}</span>
                    <button onClick={() => changeQuantity(item, index, 1)}> + </button>
                    <button className="cart-item-remove" onClick={() => removeItem(item.id)}>
                      X
                    </button>
                  </span>
                </div>
              ))}
            </div>
          ) : null}

          <div className="cart-total">Total: ${cartTotal}</div>
        </div>

        <div className="payment-and-delivery-tile">
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

        <div className="address-and-submit-tile">
          <div className="address-container">
            <h2 className="tile-header">Shipping Address</h2>
            <form className="shipping-form" onSubmit={handleSubmit}>
              {/* <label htmlFor="fullName">Full Name:</label> */}
              <input type="text" placeholder="Full Name" id="fullName" value={fullName} onChange={(e) => setFullName(e.target.value)} />

              {/* <label htmlFor="addressLine1">  Address</label> */}
              <input type="text" placeholder="Address" id="addressLine1" value={addressLine1} onChange={(e) => setAddressLine1(e.target.value)} />

              <br />
              <input placeholder="City" type="text" id="city" value={city} onChange={(e) => setCity(e.target.value)} />

              {/* <label htmlFor="state"> State</label> */}
              <input type="text" placeholder="State" id="state" value={state} onChange={(e) => setState(e.target.value)} />

              <br />
              {/* <label htmlFor="zipCode">Zip Code</label> */}
              <input type="text" placeholder="Zip Code" id="zipCode" value={zipCode} onChange={(e) => setZipCode(e.target.value)} />
            </form>
          </div>
        </div>

      </div>
    </div>
  )
}
export default Cart;

