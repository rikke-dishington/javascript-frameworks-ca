import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { BlueButton, RedButton } from '../components/Buttons.styles';

const CartWrapper = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
`;

const CartItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #ddd;
  padding: 10px 0;
`;

const ItemInfo = styled.div`
  display: flex;
  align-items: center;
`;

const ItemImage = styled.img`
  width: 50px;
  height: 50px;
  object-fit: cover;
  margin-right: 10px;
`;

const ItemDetails = styled.div``;

const RemoveButton = styled(RedButton)``;

const Total = styled.p`
  font-size: 1.2rem;
  font-weight: bold;
  margin-top: 20px;
`;

const CheckoutButton = styled(BlueButton).attrs({ as: Link })`
  display: inline-block;
 `;

const CartPage = ({ cart, removeFromCart }) => {
  const total = cart.reduce((sum, item) => sum + item.discountedPrice * item.quantity, 0);

  return (
    <CartWrapper>
      <h1>Your Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cart.map(item => (
            <CartItem key={item.id}>
              <ItemInfo>
                <ItemImage src={item.imageUrl} alt={item.title} />
                <ItemDetails>
                  <h3>{item.title}</h3>
                  <p>Quantity: {item.quantity}</p>
                  <p>${(item.discountedPrice * item.quantity).toFixed(2)}</p>
                </ItemDetails>
              </ItemInfo>
              <RemoveButton onClick={() => removeFromCart(item.id)}>Remove One</RemoveButton>
            </CartItem>
          ))}
          <Total>Total: ${total.toFixed(2)}</Total>
          <CheckoutButton to="/checkout">Proceed to Checkout</CheckoutButton>
        </>
      )}
    </CartWrapper>
  );
};

export default CartPage;
