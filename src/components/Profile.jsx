import "../styles/Profile.css"
import { useState, useEffect } from "react";
import { supabase } from "../client";
import { FaCreditCard } from "react-icons/fa";
import { useParams } from "react-router";

const Profile = () => {

    const [user, setUser] = useState(null);

    useEffect(() => {
        // sets user
        supabase.auth.onAuthStateChange((event, session) => {
            console.log(session);
            if (session) {
                setUser(session.user);
            }
        })
    }, []);

    const [showCreditCard, setShowCreditCard] = useState(false);
    const [showSecurityCode, setShowSecurityCode] = useState(false);
    const [card, setCard] = useState({
        number: "",
        cvv: "",
        exp: ""
    });

    const [address, setAddress] = useState({
        name: "",
        addressLine: "",
        city: "", 
        state: "",
        zip: ""
    });

    const saveAddress = async () => {
        await supabase
        .from('Address')
        .insert({user: user.id, address: address.addressLine, city: address.city, state: address.state, zip: address.zip})
        .select()
        .then((response) => {
            console.log(response);
            window.alert("Address saved.")
            // location.reload();
        })
    };

    const savePayment = async () => {
        await supabase
        .from('PaymentInfo')
        .insert({user: user.id, card_number: card.number, exp_date: card.exp, cvv: card.cvv})
        .select()
        .then((response) => {
            console.log(response);
            window.alert("Payment saved.")
            // location.reload();
        })
    }

    const onChange = (event) => {
        console.log(event.target.name + ": " + event.target.value);
        setCard((prev) => {
            return {
              ...prev,
              [event.target.name]: event.target.value,
            };
          });
    }

    const handleCreditCardToggle = () => {
        setShowCreditCard(!showCreditCard);
    };

    const handleSecurityCodeToggle = () => {
        setShowSecurityCode(!showSecurityCode);
    };

    return (
        <div className="profile-container">
            <div className="order-history-card">
                <h2>Order History</h2>
                <p>No orders to display</p>
            </div>
            <div className="payment-address-info-container">
                <div className="payment-info-card">
                    <h2>Payment Info</h2>
                    <div className="form-field" style={{marginTop: "2vh"}}>
                        <label htmlFor="creditCard">Credit Card</label>
                        <div className="input-group">
                            <input
                                type={showCreditCard ? "text" : "password"}
                                name="number"
                                value={card.number}
                                onChange={onChange}
                                placeholder="************1234"
                            />
                            <div className="icon-group" onClick={handleCreditCardToggle}>
                                <FaCreditCard />
                            </div>
                        </div>
                    </div>
                    <div className="form-field">
                        <label htmlFor="securityCode">Security Code</label>
                        <div className="input-group">
                            <input
                                type={showSecurityCode ? "text" : "password"}
                                name="cvv"
                                value={card.cvv}
                                onChange={onChange}
                                placeholder="123"
                            />
                            <div className="icon-group" onClick={handleSecurityCodeToggle}>
                                <FaCreditCard />
                            </div>
                        </div>
                    </div>
                    <div className="form-field">
                        <label htmlFor="expirationDate">Expiration Date</label>
                        <div className="input-group">
                            <input
                                name="exp"
                                value={card.exp}
                                onChange={onChange}
                                placeholder="07/25"
                            />
                        </div>
                    </div>
                    <div className="button-group">
                        <button className="update-button" onClick={savePayment} >Update</button>
                    </div>
                </div>
                <div className="address-info-card">
                    <h2>Address Info</h2>
                    <div className="form-field" style={{marginTop: "2vh"}}>
                        <label htmlFor="name">Name</label>
                        <div className="input-group">
                            <input type="text" name="name" placeholder="John Doe" onChange={(e) => setAddress({name: e.target.value})} />
                        </div>
                    </div>
                    <div className="form-field">
                        <label htmlFor="address">Address</label>
                        <div className="input-group">
                            <input type="text" name="address" placeholder="123 Main St." onChange={(e) => setAddress({addressLine: e.target.value})} />
                        </div>
                    </div>
                    <div className="form-field">
                        <label htmlFor="city">City</label>
                        <div className="input-group">
                            <input type="text" name="city" placeholder="Anytown" onChange={(e) => setAddress({city: e.target.value})} />
                        </div>
                    </div>
                    <div className="form-field">
                        <label htmlFor="state">State</label>
                        <div className="input-group">
                            <input type="text" name="state" placeholder="CA" onChange={(e) => setAddress({state: e.target.value})} />
                        </div>
                    </div>
                    <div className="form-field">
                        <label htmlFor="zip">Zip Code</label>
                        <div className="input-group">
                            <input type="text" name="zip" placeholder="12345" onChange={(e) => setAddress({zip: e.target.value})}/>
                        </div>
                    </div>
                    <div className="button-group">
                        <button className="update-button" onClick={saveAddress} >Update</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
