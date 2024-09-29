import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const CheckoutWrapper = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
`;

const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 20px;
`;

const CartSummary = styled.div`
  margin-bottom: 20px;
`;

const Total = styled.p`
  font-size: 1.2rem;
  font-weight: bold;
`;

const CheckoutButton = styled.button`
  background-color: #4CAF50;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;

  &:hover {
    background-color: #45a049;
  }
`;

const CheckoutPage = ({ cart, clearCart }) => {
  const navigate = useNavigate();
  const total = cart.reduce((sum, item) => sum + item.discountedPrice * item.quantity, 0);

  const handleCheckout = () => {
    // Here you would typically process the payment
    // For now, we'll just clear the cart and redirect to the success page
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
