import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { BlueButton } from '../components/Buttons.styles';

const CheckoutWrapper = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
`;

const Title = styled.h1`
  margin-bottom: 20px;
`;

const CartSummary = styled.div`
  margin-bottom: 20px;
`;

const Total = styled.p`
  font-weight: bold;
`;

const CheckoutButton = styled(BlueButton)``;

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
