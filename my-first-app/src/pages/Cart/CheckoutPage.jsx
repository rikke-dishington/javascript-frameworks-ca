import React from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckoutWrapper, Title, CartSummary, Total, CheckoutButton } from './CheckoutPage.styles';

const CheckoutPage = ({ cart, clearCart }) => {
  const navigate = useNavigate();
  const total = cart.reduce((sum, item) => sum + item.discountedPrice * item.quantity, 0);

  const handleCheckout = () => {
    clearCart();
    navigate('/checkout-success');
  };

  return (
    <CheckoutWrapper>
      <Title>Checkout</Title>
      <CartSummary>
        {cart.map(item => (
          <div key={item.id}>
            <p>{item.title} - Quantity: {item.quantity} - ${(item.discountedPrice * item.quantity).toFixed(2)}</p>
          </div>
        ))}
      </CartSummary>
      <Total>Total: ${total.toFixed(2)}</Total>
      <CheckoutButton onClick={handleCheckout}>Complete Purchase</CheckoutButton>
    </CheckoutWrapper>
  );
};

export default CheckoutPage;
