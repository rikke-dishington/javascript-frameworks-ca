import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const slideUp = keyframes`
  from { transform: translateY(20px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
`;

const SuccessWrapper = styled.div`
  max-width: 800px;
  margin: 60px auto;
  padding: 40px;
  background-color: #f8f9fa;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  animation: ${fadeIn} 0.6s ease-out;
`;

const Title = styled.h1`
  font-size: 3rem;
  color: #343a40;
  margin-bottom: 20px;
  font-weight: 700;
  animation: ${slideUp} 0.6s ease-out;
`;

const Message = styled.p`
  font-size: 1.2rem;
  color: #495057;
  margin-bottom: 30px;
  line-height: 1.6;
  animation: ${slideUp} 0.6s ease-out 0.2s backwards;
`;

const BackToStoreButton = styled(Link)`
  display: inline-block;
  background-color: #343a40;
  color: white;
  text-decoration: none;
  padding: 12px 24px;
  font-size: 1rem;
  border-radius: 6px;
  transition: all 0.3s ease;
  animation: ${slideUp} 0.6s ease-out 0.4s backwards;

  &:hover {
    background-color: #212529;
    transform: translateY(-2px);
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  }
`;

const OrderNumber = styled.p`
  font-size: 1rem;
  color: #6c757d;
  margin-top: 30px;
  animation: ${slideUp} 0.6s ease-out 0.6s backwards;
`;

const Divider = styled.hr`
  border: none;
  border-top: 1px solid #dee2e6;
  margin: 30px 0;
`;

const CheckoutSuccessPage = ({ clearCart }) => {
  const [orderNumber] = useState(() => Math.floor(100000 + Math.random() * 900000));
  const [isCleared, setIsCleared] = useState(false);

  const handleContinueShopping = () => {
    if (!isCleared) {
      clearCart();
      setIsCleared(true);
    }
  };

  return (
    <SuccessWrapper>
      <Title>Thank You!</Title>
      <Message>
        Your order has been successfully placed. We're preparing your items and will send you a confirmation email shortly.
      </Message>
      <BackToStoreButton to="/" onClick={handleContinueShopping}>
        Continue Shopping
      </BackToStoreButton>
      <Divider />
      <OrderNumber>Order Reference: #{orderNumber}</OrderNumber>
    </SuccessWrapper>
  );
};

export default CheckoutSuccessPage;
