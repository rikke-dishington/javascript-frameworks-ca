import React from 'react';
import { Link } from 'react-router-dom';

const CheckoutSuccessPage = () => {
  return (
    <div>
      <h1>Thank you for your purchase!</h1>
      <p>Your order was successful.</p>
      <Link to="/">Go back to the store</Link>
    </div>
  );
};

export default CheckoutSuccessPage;
