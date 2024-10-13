import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { BlueButton } from '../components/Buttons.styles';

const SuccessWrapper = styled.div`
  max-width: 800px;
  margin: 60px auto;
  padding: 40px;
`;

const Title = styled.h1`
  margin-bottom: 20px;
`;

const Message = styled.p`
  margin-bottom: 30px;
  line-height: 1.6;
`;

const BackToStoreButton = styled(BlueButton).attrs({ as: Link })` `;

const OrderNumber = styled.p`
  margin-top: 30px;
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
      <OrderNumber>Order Reference: #{orderNumber}</OrderNumber>
      <Message>
        Your order has been successfully placed. We're preparing your items and will send you a confirmation email shortly.
      </Message>
      <BackToStoreButton to="/" onClick={handleContinueShopping}>
        Continue Shopping
      </BackToStoreButton>
    </SuccessWrapper>
  );
};

export default CheckoutSuccessPage;
