import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { BlueButton } from '../components/Buttons.styles';

const Card = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 16px;
  margin: 16px;
  width: 250px; // Adjust as needed
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
`;

const ProductImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 8px;
`;

const ProductTitle = styled.h3`
  margin: 8px 0;
  font-size: 18px;
`;

const ProductPrice = styled.p`
  font-weight: bold;
  color: #000;
`;

const ViewProductButton = styled(BlueButton)`
  width: 100%;
  margin-top: 10px;
`;

const ProductCard = ({ product }) => {
  return (
    <Card>
      <ProductImage src={product.imageUrl} alt={product.title} />
      <ProductTitle>{product.title}</ProductTitle>
      <ProductPrice>${product.price.toFixed(2)}</ProductPrice>
      <ViewProductButton as={Link} to={`/product/${product.id}`}>
        View Product
      </ViewProductButton>
    </Card>
  );
};

export default ProductCard;
