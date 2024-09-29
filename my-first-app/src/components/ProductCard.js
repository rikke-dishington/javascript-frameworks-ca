import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Card = styled.div`
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  transition: box-shadow 0.3s;

  &:hover {
    box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  }
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

const ViewProductButton = styled(Link)`
  background-color: #4CAF50;
  color: white;
  padding: 10px 15px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  transition-duration: 0.4s;
  cursor: pointer;
  border-radius: 5px;

  &:hover {
    background-color: #45a049;
  }
`;

const ProductCard = ({ product }) => {
  return (
    <Card>
      <ProductImage src={product.imageUrl} alt={product.title} />
      <ProductTitle>{product.title}</ProductTitle>
      <ProductPrice>${product.discountedPrice.toFixed(2)}</ProductPrice>
      <ViewProductButton to={`/product/${product.id}`}>View product</ViewProductButton>
    </Card>
  );
};

export default ProductCard;
