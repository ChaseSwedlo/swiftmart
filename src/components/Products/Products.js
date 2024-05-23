import React, { useContext, useState } from 'react';
import './products.css';
import Star from './Star';
import { Link } from 'react-router-dom';
import { ProductsContext } from '../../ProductsContext';

function trimTitle(title, maxLength = 23) {
  if (title.length > maxLength) {
    return title.slice(0, maxLength - 3) + '...';
  }
  return title;
}

function Products() {
  const starsArray = Array.from({ length: 5 });
  const products = useContext(ProductsContext);
  const [activeCategory, setActiveCategory] = useState('all');

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
  };

  const filteredProducts = activeCategory === 'all' 
    ? products 
    : products.filter(product => {
        if (activeCategory === 'clothing') {
          return product.category.includes('clothing');
        }
        return product.category === activeCategory;
      });

  return (
    <>
    <section className="products">
      <div className="container">
        <div className='flex sb products-title'>
          <h2>Products</h2>
          <div className='filters'>
            <button 
              onClick={() => handleCategoryClick('all')} 
              className={activeCategory === 'all' ? 'active' : ''}
            >
              All
            </button>
            <button 
              onClick={() => handleCategoryClick('clothing')} 
              className={activeCategory === 'clothing' ? 'active' : ''}
            >
              Clothing
            </button>
            <button 
              onClick={() => handleCategoryClick('electronics')} 
              className={activeCategory === 'electronics' ? 'active' : ''}
            >
              Electronics
            </button>
            <button 
              onClick={() => handleCategoryClick('jewelery')} 
              className={activeCategory === 'jewelery' ? 'active' : ''}
            >
              Jewelery
            </button>
          </div>
        </div>
        <div className='products-grid'>
          {filteredProducts.map(product => 
            <Link to={`/products/${product.slug}`} className='product center' key={product.id}>
              <figure>
                <img alt={product.title} src={product.image} />
              </figure>
              <div className='product-info'>
                <h3 className='flex sb'>
                  {trimTitle(product.title)}
                  <span className='price'>{`$${product.price}`}</span>
                </h3>
                <div className='flex'>
                  {starsArray.map((_, index) => (
                    <Star 
                      key={index} 
                      gold={index < product.rating.rate} 
                    />
                  ))}
                  <p>{`(${product.rating.count})`}</p>
                </div>
                <p>{product.category}</p>
                <button className='add-to-cart'>
                  Add to Cart
                </button>
              </div>
            </Link>
          )}
        </div>
      </div>
    </section>
    </>
  );
}

export default Products;
