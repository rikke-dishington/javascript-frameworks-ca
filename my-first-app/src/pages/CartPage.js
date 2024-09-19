import React from 'react';

const CartPage = ({ cartItems, removeFromCart }) => {
  const totalPrice = cartItems.reduce((total, product) => total + product.discountedPrice, 0);

  return (
    <div>
      <h1>Your Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cartItems.map(item => (
            <div key={item.id}>
              <h2>{item.title}</h2>
              <p>Price: ${item.discountedPrice}</p>
              <button onClick={() => removeFromCart(item.id)}>Remove</button>
            </div>
          ))}
          <h3>Total: ${totalPrice}</h3>
          <button>Checkout</button>
        </div>
      )}
    </div>
  );
};

export default CartPage;
