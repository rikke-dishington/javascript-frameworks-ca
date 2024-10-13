import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ProductCard from '../components/ProductCard';

const PageWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;

const SearchBar = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid;
  border-radius: 5px;
`;

const ProductList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
  padding: 20px 0;
`;

const Homepage = () => {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://api.noroff.dev/api/v1/online-shop');
        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }
        const data = await response.json();
        console.log('Fetched products:', data); // Add this line for debugging
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  const filteredProducts = products.filter(product =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <PageWrapper>
      <h1>Our Products</h1>
      <SearchBar 
        type="text" 
        placeholder="Search products..." 
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <ProductList>
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </ProductList>
    </PageWrapper>
  );
};

export default Homepage;
