import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ProductProvider } from './context/ProductContext';
import HomePage from './pages/HomePage';
import ProductDetailPage from './pages/ProductDetailPage';
import AddProductPage from './pages/AddProductPage';
import EditProductPage from './pages/EditProductPage';
import './App.css'; 

const App: React.FC = () => {
  return (
    <ProductProvider>
      <Router>
        <div className="app-wrapper">                    
          <div className="main-content">
            <Routes>             
              <Route path="/" element={<HomePage />} />                          
              <Route path="/products/:id" element={<ProductDetailPage />} />                       
              <Route path="/add" element={<AddProductPage />} />             
              <Route path="/edit/:id" element={<EditProductPage />} />                          
              
            </Routes>
          </div>
        </div>
      </Router>
    </ProductProvider>
  );
};

export default App;