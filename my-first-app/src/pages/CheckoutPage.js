import React from 'react';
import { useNavigate } from 'react-router-dom';

const CheckoutPage = ({ cartItems, clearCart }) => {
  const navigate = useNavigate();

  // Calculate the total price of items in the cart
  const totalPrice = cartItems.reduce(
    (total, product) => total + product.discountedPrice, 
    0
  );

  // Handle the checkout process
  const handleCheckout = () => {
    clearCart(); // Clear the cart after successful checkout
    navigate('/checkout-success'); // Redirect to success page
  };

  return (
    <div>
      <h1>Checkout</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cartItems.map((item) => (
            <div key={item.id}>
              <h2>{item.title}</h2>
              <p>Price: ${item.discountedPrice}</p>
            </div>
          ))}
          <h3>Total: ${totalPrice.toFixed(2)}</h3>
          <button onClick={handleCheckout}>Checkout</button>
        </div>
      )}
    </div>
  );
};

export default CheckoutPage;
