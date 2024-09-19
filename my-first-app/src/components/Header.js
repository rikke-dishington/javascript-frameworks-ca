import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import CartIcon from './CartIcon';  // Import CartIcon

// Styled components for the Header
const HeaderWrapper = styled.header`
  background-color: #333;
  color: white;
  padding: 10px;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NavList = styled.ul`
  list-style-type: none;
  display: flex;
  gap: 20px;
  margin: 0;
  padding: 0;
`;

const NavItem = styled.li`
  a {
    color: white;
    text-decoration: none;
  }
`;

const Header = ({ cartItemCount }) => {
  return (
    <HeaderWrapper>
      <Nav>
        <NavList>
          <NavItem><Link to="/">Home</Link></NavItem>
          <NavItem><Link to="/contact">Contact</Link></NavItem>
        </NavList>
        {/* Cart Icon with the number of cart items */}
        <CartIcon cartItemCount={cartItemCount} />
      </Nav>
    </HeaderWrapper>
  );
};

export default Header;
