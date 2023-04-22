import "../styles/Profile.css"
import { useState } from "react";
import { FaCreditCard } from "react-icons/fa";

const Profile = () => {
    const [creditCard, setCreditCard] = useState("************1234");
    const [showCreditCard, setShowCreditCard] = useState(false);
    const [securityCode, setSecurityCode] = useState("123");
    const [showSecurityCode, setShowSecurityCode] = useState(false);

    const handleCreditCardToggle = () => {
        setShowCreditCard(!showCreditCard);
    };

    const handleSecurityCodeToggle = () => {
        setShowSecurityCode(!showSecurityCode);
    };

    return (
        <div className="container">
            <div className="order-history-card">
                <h2>Order History</h2>
                <p>No orders to display</p>
            </div>
            <div className="payment-address-info-container">
                <div className="payment-info-card">
                    <h2>Payment Info</h2>
                    <div className="form-field">
                        <label htmlFor="creditCard">Credit Card</label>
                        <div className="input-group">
                            <input
                                type={showCreditCard ? "text" : "password"}
                                name="creditCard"
                                value={creditCard}
                                onChange={(e) => setCreditCard(e.target.value)}
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
                                name="securityCode"
                                value={securityCode}
                                onChange={(e) => setSecurityCode(e.target.value)}
                                placeholder="123"
                            />
                            <div className="icon-group" onClick={handleSecurityCodeToggle}>
                                <FaCreditCard />
                            </div>
                        </div>
                    </div>
                    <div className="button-group">
                        <button className="update-button">Update</button>
                    </div>
                </div>
                <div className="address-info-card">
                    <h2>Address Info</h2>
                    <div className="form-field">
                        <label htmlFor="name">Name</label>
                        <div className="input-group">
                            <input type="text" name="name" placeholder="John Doe" />
                        </div>
                    </div>
                    <div className="form-field">
                        <label htmlFor="address">Address</label>
                        <div className="input-group">
                            <input type="text" name="address" placeholder="123 Main St." />
                        </div>
                    </div>
                    <div className="form-field">
                        <label htmlFor="city">City</label>
                        <div className="input-group">
                            <input type="text" name="city" placeholder="Anytown" />
                        </div>
                    </div>
                    <div className="form-field">
                        <label htmlFor="state">State</label>
                        <div className="input-group">
                            <input type="text" name="state" placeholder="CA" />
                        </div>
                    </div>
                    <div className="form-field">
                        <label htmlFor="zip">Zip Code</label>
                        <div className="input-group">
                            <input type="text" name="zip" placeholder="12345" />
                        </div>
                    </div>
                    <div className="button-group">
                        <button className="update-button">Update</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
