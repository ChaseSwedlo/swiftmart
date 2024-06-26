import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { ProductsProvider } from './ProductsContext';
import { AnimatePresence } from 'framer-motion';
import { DialogProvider } from './DialogContext';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Dialog from './components/Dialog/Dialog';
import Home from './pages/Home';
import ProductPage from './pages/ProductPage';
import NotFound from './pages/NotFound';
import CartPage from './pages/CartPage';

function App() {
  const location = useLocation();
  return (
    <ProductsProvider>
      <DialogProvider>
        <Header />
        <Dialog />
        <main>
          <AnimatePresence mode='wait'>
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<Home />} />
              <Route path='/products/:slug' element={<ProductPage />}/>
              <Route path='/cart' element={<CartPage />}/>
              <Route path="*" element={<NotFound />} />
            </Routes>
          </AnimatePresence>
        </main>
        <Footer/>
      </DialogProvider>
    </ProductsProvider>
  );
}

export default App;