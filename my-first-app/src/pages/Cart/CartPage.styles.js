import styled from 'styled-components';
import { BlueButton, RedButton } from '../../components/Button/Buttons.styles';
import { Link } from 'react-router-dom';

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

export { CartWrapper, CartItem, ItemInfo, ItemImage, ItemDetails, RemoveButton, Total, CheckoutButton };