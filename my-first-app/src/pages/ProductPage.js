import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { BlueButton } from '../components/Buttons.styles';

const ProductWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  display: flex;
  gap: 40px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const ImageContainer = styled.div`
  flex: 1;
`;

const ProductImage = styled.img`
  width: 100%;
  height: auto;
  max-height: 500px;
  object-fit: cover;
  border-radius: 8px;
`;

const ProductInfo = styled.div`
  flex: 1;
`;

const ProductTitle = styled.h1`
  margin-bottom: 10px;
`;

const PriceContainer = styled.div`
  display: flex;
  align-items: baseline;
  gap: 10px;
  margin-bottom: 20px;
`;

const DiscountedPrice = styled.p`
  font-weight: bold;
`;

const OriginalPrice = styled.p`
  color: var(--color-light-grey);
  text-decoration: line-through;
`;

const Discount = styled.span`
  color: var(--color-dark-red);
  font-weight: bold;
`;

const ProductDescription = styled.p`
  margin-bottom: 20px;
  line-height: 1.6;
`;

const AddToCartButton = styled(BlueButton)``;

const ReviewsSection = styled.div`
  margin-top: 40px;
  padding: 20px 0;
  border-top: 1px solid #ddd;
`;

const ReviewsTitle = styled.h2`
  margin-bottom: 20px;
  color: var(--color-dark-grey);
`;

const ReviewItem = styled.div`
  border: 1px solid;
  border-radius: 8px;
  padding: 15px;
  margin-bottom: 15px;
`;

const ReviewHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;

const ReviewerName = styled.span`
  font-weight: bold;
`;

const ReviewRating = styled.span`
  font-weight: bold;
`;

const ReviewDescription = styled.p`
  color: var(--color-light-grey);
  line-height: 1.6;
`;

const NoReviews = styled.p`
  font-style: italic;
`;

const ProductPage = ({ addToCart }) => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`https://api.noroff.dev/api/v1/online-shop/${id}`);
        if (!response.ok) {
          throw new Error('Failed to fetch product');
        }
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error('Error fetching product:', error);
      }
    };

    fetchProduct();
  }, [id]);

  const handleAddToCart = () => {
    if (product) {
      addToCart(product);
    }
  };

  if (!product) {
    return <div>Loading...</div>;
  }

  const discountPercentage = product.price > product.discountedPrice
    ? Math.round((1 - product.discountedPrice / product.price) * 100)
    : 0;

  return (
    <ProductWrapper>
      <ImageContainer>
        <ProductImage src={product.imageUrl} alt={product.title} />
      </ImageContainer>
      <ProductInfo>
        <ProductTitle>{product.title}</ProductTitle>
        <PriceContainer>
          <DiscountedPrice>${product.discountedPrice.toFixed(2)}</DiscountedPrice>
          {discountPercentage > 0 && (
            <>
              <OriginalPrice>${product.price.toFixed(2)}</OriginalPrice>
              <Discount>{discountPercentage}% OFF</Discount>
            </>
          )}
        </PriceContainer>
        <ProductDescription>{product.description}</ProductDescription>
        <AddToCartButton onClick={handleAddToCart}>Add to Cart</AddToCartButton>
        
        <ReviewsSection>
          <ReviewsTitle>Customer Reviews</ReviewsTitle>
          {product.reviews && product.reviews.length > 0 ? (
            product.reviews.map((review, index) => (
              <ReviewItem key={index}>
                <ReviewHeader>
                  <ReviewerName>{review.username}</ReviewerName>
                  <ReviewRating>Rating: {review.rating}/5</ReviewRating>
                </ReviewHeader>
                <ReviewDescription>{review.description}</ReviewDescription>
              </ReviewItem>
            ))
          ) : (
            <NoReviews>No reviews yet.</NoReviews>
          )}
        </ReviewsSection>
      </ProductInfo>
    </ProductWrapper>
  );
};

export default ProductPage;
