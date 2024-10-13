import React from 'react';
import { CartWrapper, CartItem, ItemInfo, ItemImage, ItemDetails, RemoveButton, Total, CheckoutButton } from './CartPage.styles';

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
