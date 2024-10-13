import styled from 'styled-components';
import { BlueButton } from '../../components/Button/Buttons.styles';

const CheckoutWrapper = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
`;

const Title = styled.h1`
  margin-bottom: 20px;
`;

const CartSummary = styled.div`
  margin-bottom: 20px;
`;

const Total = styled.p`
  font-weight: bold;
`;

const CheckoutButton = styled(BlueButton)``;

export { CheckoutWrapper, Title, CartSummary, Total, CheckoutButton };