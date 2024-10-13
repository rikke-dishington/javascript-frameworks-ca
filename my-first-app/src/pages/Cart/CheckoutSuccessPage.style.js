import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { BlueButton } from '../../components/Button/Buttons.styles';

const SuccessWrapper = styled.div`
  max-width: 800px;
  margin: 60px auto;
  padding: 40px;
`;

const Title = styled.h1`
  margin-bottom: 20px;
`;

const Message = styled.p`
  margin-bottom: 30px;
  line-height: 1.6;
`;

const BackToStoreButton = styled(BlueButton).attrs({ as: Link })` `;

const OrderNumber = styled.p`
  margin-top: 30px;
`;

export { SuccessWrapper, Title, Message, BackToStoreButton, OrderNumber };