import { useContext, useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ProductsContext } from '../../ProductsContext';
import { FaArrowLeft } from "react-icons/fa";
import Star from '../Products/Star';
import './product.css';
import { motion } from 'framer-motion';

const Product = () => {
  const [quantity, setQuantity] = useState(1);
  const [randomProducts, setRandomProducts] = useState([]);
  const starsArray = Array.from({ length: 5 });
  const { slug } = useParams();
  const products = useContext(ProductsContext);
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    const otherProducts = products.filter(p => p.slug !== slug);
    const getRandomProducts = (products, count) => {
      const shuffled = products.sort(() => 0.5 - Math.random());
      return shuffled.slice(0, count);
    };
    setRandomProducts(getRandomProducts(otherProducts, 4));
  }, [products, slug]);

  useEffect(() => {
    const product = products.find(p => p.slug === slug);
    if (!product) {
      navigate('/');
    }
  }, [products, slug, navigate]);

  const increment = () => {
    setQuantity(quantity + 1);
  }

  const decrement = () => {
    setQuantity(quantity - 1);
  }

  const product = products.find(p => p.slug === slug);

  function trimTitle(title, maxLength = 30) {
    if (title.length > maxLength) {
      return title.slice(0, maxLength - 3) + '...';
    }
    return title;
  }

  return product ? (
    <motion.div className='container'
      key='product'
        initial={{ opacity: 0, x: -50}}
        animate={{ 
          opacity: 1, 
          x: 0,
          transition: { duration: 0.3}
        }}
        exit={{ 
          opacity: 0, 
          x: -50,
          transition: { duration: 0.3 }
        }}>
      <div className='go-back'>
        <button onClick={goBack}><FaArrowLeft />Go Back</button>
      </div>
      <section className='product-section flex'>
        <div className='product-image'>
          <figure>
            <img alt={product.title} src={product.image}/>
          </figure>
        </div>
        <div className='product-information'>
          <div>
          <h2>{product.title}</h2>
          <div className='flex'>
            {starsArray.map((_, index) => (
              <Star 
                key={index} 
                gold={index < product.rating.rate} 
              />
            ))}
            <p className='rating'>{`(${product.rating.count})`}</p>
          </div>
          <h3>{`$${product.price}`}</h3>
          <p className='cat'>Category:<span>{` ${product.category}`}</span></p>
          </div>
          <div className='quantity'>
            <button onClick={decrement} disabled={quantity < 2}>-</button>
              <input type='text'value={quantity} readOnly/>
            <button onClick={increment} disabled={quantity > 9}>+</button>
          </div>
          <div className='buttons'>
            <button>
              Add to Cart
            </button>
            <button>
              Buy Now
            </button>
          </div>
        </div>
      </section>
      <div className='product-description'>
        <h2>Description<span>{`Reviews(${product.rating.count})`}</span></h2>
        <div className='line'></div>
        <p>{product.description}</p>
      </div>
      <section>
        <h2 className='other-products-title'>Other products you may like</h2>
        <div className='line'></div>
        <div className='other-products'>
          {randomProducts.map((prod) => (
            <Link key={prod.id} to={`/products/${prod.slug}`} className='other-product-link'>
              <div className='other-product'>
                <figure>
                  <img alt={prod.title} src={prod.image} />
                </figure>
                <h3>{trimTitle(prod.title)}</h3>
                <p>{`$${prod.price}`}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </motion.div>
  ) : (<h3>No Product found</h3>)
};

export default Product;