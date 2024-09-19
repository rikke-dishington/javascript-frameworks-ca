import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const ProductPage = ({ addToCart }) => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    async function fetchProduct() {
      const response = await fetch(`https://v2.api.noroff.dev/online-shop/${id}`);
      const data = await response.json();
      setProduct(data);
    }
    fetchProduct();
  }, [id]);

  if (!product) return <p>Loading...</p>;

  const discount = product.price - product.discountedPrice;

  return (
    <div>
      <img src={product.imageUrl} alt={product.title} />
      <h1>{product.title}</h1>
      <p>{product.description}</p>
      <p>Price: ${product.discountedPrice}</p>
      {discount > 0 && <p>Discount: ${discount}</p>}
      <button onClick={() => addToCart(product)}>Add to Cart</button>
      <h3>Reviews</h3>
      {product.reviews.length > 0 ? (
        <ul>
          {product.reviews.map(review => (
            <li key={review.id}>{review.description}</li>
          ))}
        </ul>
      ) : (
        <p>No reviews available.</p>
      )}
    </div>
  );
};

export default ProductPage;
