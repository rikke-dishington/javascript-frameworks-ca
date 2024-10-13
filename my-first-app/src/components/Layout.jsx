import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Header = styled.header`
  background-color: var(--color-dark-blue);
  color: var(--color-white);
  padding: 1rem;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 1rem;

  a {
    color: white;
    text-decoration: none;
    transition: color 0.3s;

    &:hover {
      color: #61DAFB;
    }
  }
`;

const CartIcon = styled.div`
  position: relative;
  cursor: pointer;
  font-size: 24px;
`;

const CartCount = styled.span`
  position: absolute;
  top: -10px;
  right: -10px;
  background-color: var(--color-white);
  color: var(--color-dark-grey);
  border-radius: 50%;
  padding: 0.2rem 0.5rem;
  font-size: 0.8rem;
`;

const Main = styled.main`
  max-width: 1200px;
  margin: 2rem auto;
  padding: 0 1rem;
`;

const Footer = styled.footer`
  background-color: var(--color-dark-blue);
  color: var(--color-white);
  padding: 1rem;
  text-align: center;
`;

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
