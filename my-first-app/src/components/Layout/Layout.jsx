import React from 'react';
import { Link } from 'react-router-dom';
import { Header, Nav, NavLinks, CartIcon, CartCount, Main, Footer } from './Layout.styles';

const Layout = ({ children, cartItemsCount }) => {
  return (
    <>
      <Header>
        <Nav>
          <NavLinks>
            <Link to="/">Home</Link>
            <Link to="/contact">Contact</Link>
          </NavLinks>
          <Link to="/cart">
            <CartIcon>
              🛒
              {cartItemsCount > 0 && <CartCount>{cartItemsCount}</CartCount>}
            </CartIcon>
          </Link>
        </Nav>
      </Header>
      <Main>{children}</Main>
      <Footer>
        <p>&copy; {new Date().getFullYear()} eCom</p>
      </Footer>
    </>
  );
};

export default Layout;
