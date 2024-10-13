import React, { useState } from 'react';
import { SuccessWrapper, Title, Message, BackToStoreButton, OrderNumber } from './CheckoutSuccessPage.style';

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
