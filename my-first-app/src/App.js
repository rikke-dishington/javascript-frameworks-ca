import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Homepage from './pages/Homepage';
import ProductPage from './pages/ProductPage';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';  // Import CheckoutPage
import CheckoutSuccessPage from './pages/CheckoutSuccessPage';  // Import CheckoutSuccessPage
import ContactPage from './pages/ContactPage';
import GlobalStyle from './GlobalStyles';  // Import GlobalStyles

function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  const removeFromCart = (productId) => {
    setCartItems(cartItems.filter(item => item.id !== productId));
  };

  const clearCart = () => {
    setCartItems([]);  // Clear the cart after successful checkout
  };

  const cartItemCount = cartItems.length;  // Calculate the total number of items in the cart

  return (
    <Router>
      <GlobalStyle />  {/* Add GlobalStyle at the root of the app */}
      <Layout>
        {/* Pass cartItemCount as a prop to Header */}
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/products/:id" element={<ProductPage addToCart={addToCart} />} />
          <Route path="/cart" element={<CartPage cartItems={cartItems} removeFromCart={removeFromCart} />} />
          <Route path="/checkout" element={<CheckoutPage cartItems={cartItems} clearCart={clearCart} />} />
          <Route path="/checkout-success" element={<CheckoutSuccessPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
