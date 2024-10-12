import React from 'react';
import { CartProvider, useCartContext } from './context/CartContext';
import Navbar from './components/Navbar';
import ProductPage from './components/ProductPage';
import Cart from './components/Cart';
import LoginPage from './components/form/LoginForm';
import Footer from './components/Footer';


const MainContent = () => {
  const { isAuthenticated } = useCartContext();

  return (
    <div>
      <Navbar />
      {isAuthenticated ? (
        <>
          <ProductPage />
          <Cart />
        </>
      ) : (
        <LoginPage />
      )}
      <Footer/>
    </div>
  );
};

const App = () => {
  return (
    <CartProvider>
      <MainContent />
    </CartProvider>
  );
};

export default App;
