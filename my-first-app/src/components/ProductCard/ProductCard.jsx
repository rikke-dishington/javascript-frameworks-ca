import React from 'react';
import { Link } from 'react-router-dom';
import { Card, ProductImage, ProductTitle, ProductPrice, ViewProductButton } from './ProductCard.styles';

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
