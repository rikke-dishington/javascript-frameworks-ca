import React, { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard';
import styled from 'styled-components';

const PageWrapper = styled.div`
  padding: 20px;
`;

const ProductList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
`;

const Homepage = () => {
  const [products, setProducts] = useState([]);  // Initialize as an empty array
  const [loading, setLoading] = useState(true);  // Optional loading state
  const [error, setError] = useState(null);      // Optional error state

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch('https://v2.api.noroff.dev/online-shop');
        const data = await response.json();
        console.log(data);  // Check the data to make sure it's an array
        setProducts(data);  // Assuming the API response is an array of products
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    }

    fetchProducts();
  }, []);

  if (loading) {
    return <p>Loading products...</p>;
  }

  if (error) {
    return <p>Error loading products: {error}</p>;
  }

  return (
    <PageWrapper>
      <h1>Our Products</h1>
      <ProductList>
        {Array.isArray(products) && products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </ProductList>
    </PageWrapper>
  );
};

export default Homepage;
