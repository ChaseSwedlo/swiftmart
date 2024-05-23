import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

const ProductsContext = createContext();

const createSlug = (title) => {
  return title
    .trim()
    .toLowerCase()
    .replace(/[.,/\s-]+/g, '-')
    .replace(/^-+|-+$/g, '');
};

const formatPrice = (price) => {
  return price.toFixed(2);
};

const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://fakestoreapi.com/products');
        const productsWithSlugs = response.data.map(product => ({
          ...product,
          slug: createSlug(product.title),
          price: formatPrice(product.price),
        }));
        console.log(productsWithSlugs);
        setProducts(productsWithSlugs);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };
    fetchProducts();
  }, []);

  return (
    <ProductsContext.Provider value={products}>
      {children}
    </ProductsContext.Provider>
  );
};

export { ProductsContext, ProductsProvider };

