import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

// Styled components for the Cart Icon
const CartIconWrapper = styled.div`
  position: relative;
  display: inline-block;
`;

const Icon = styled.span`
  font-size: 24px;
  color: white;
`;

const CartCount = styled.span`
  position: absolute;
  top: -10px;
  right: -10px;
  background-color: red;
  color: white;
  border-radius: 50%;
  padding: 5px 10px;
  font-size: 14px;
`;

const CartIcon = ({ cartItemCount }) => {
  return (
    <CartIconWrapper>
      <Link to="/cart">
        <Icon role="img" aria-label="cart">🛒</Icon>
        {cartItemCount > 0 && <CartCount>{cartItemCount}</CartCount>}
      </Link>
    </CartIconWrapper>
  );
};

export default CartIcon;
