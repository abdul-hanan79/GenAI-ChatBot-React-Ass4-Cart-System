// import React from 'react';
// import { CartProvider, useCartContext } from './context/CartContext';
// import Navbar from './components/Navbar';
// import ProductPage from './components/ProductPage';
// import Cart from './components/Cart';
// import LoginPage from './components/form/LoginForm';
// import Footer from './components/Footer';

// const MainContent = () => {
//   const { isAuthenticated } = useCartContext();

//   return (
//     <div>
//       <Navbar />
//       {isAuthenticated ? (
//         <>
//           <ProductPage />
//           <Cart />
//         </>
//       ) : (
//         <LoginPage />
//       )}
//       <Footer/>
//     </div>
//   );
// };

// const App = () => {
//   return (
//     <CartProvider>
//       <MainContent />
//     </CartProvider>
//   );
// };

// export default App;
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar"; // Example for the navigation bar
import ProductPage from "./pages/ProductPage";
import CartPage from "./pages/CartPage";
import LoginPage from "./pages/LoginPage";
import MyAccountPage from "./pages/MyAccountPage";
import NotFoundPage from "./pages/NotFoundPage"; // 404 Page
import { CartProvider } from "./context/CartContext"; // Assuming you have a Cart Context for managing authentication state

function App() {
  return (
    <CartProvider>
      {" "}
      {/* Provides context for authentication, cart, etc */}
      <Router>
        <Navbar /> {/* This will show on all pages */}
        <Routes>
          {/* <Route path="/" element={<HomePage />} /> */}
          <Route path="/" element={<ProductPage />} />
          <Route path="/products" element={<ProductPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/account" element={<MyAccountPage />} />
          {/* Account Route */}
          {/* Fallback route for 404 */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
