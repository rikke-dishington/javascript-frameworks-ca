import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ProductWrapper, ImageContainer, ProductImage, ProductInfo, ProductTitle, PriceContainer, DiscountedPrice, OriginalPrice, Discount, ProductDescription, AddToCartButton, ReviewsSection, ReviewsTitle, ReviewItem, ReviewHeader, ReviewerName, ReviewRating, ReviewDescription, NoReviews } from './ProductPage.styles';

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
