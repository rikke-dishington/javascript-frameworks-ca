import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  border: 1px solid #ccc;
  padding: 20px;
  text-align: center;
`;

const ProductImage = styled.img`
  width: 100%;
  height: auto;
`;

const ProductTitle = styled.h2`
  font-size: 20px;
  margin-bottom: 10px;
`;

const Price = styled.p`
  font-size: 18px;
  color: green;
`;

const ProductCard = ({ product }) => {
  return (
    <Card>
      <ProductImage src={product.imageUrl} alt={product.title} />
      <ProductTitle>{product.title}</ProductTitle>
      <Price>${product.discountedPrice}</Price>
    </Card>
  );
};

export default ProductCard;
