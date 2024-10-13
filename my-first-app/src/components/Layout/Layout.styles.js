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
    color: var(--color-white);
    text-decoration: none;
    transition: color 0.3s;

    &:hover {
      color: var(--color-white);
      text-decoration: underline;
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

export { Header, Nav, NavLinks, CartIcon, CartCount, Main, Footer };