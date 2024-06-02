import './cart.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons'
import { faCircleMinus } from '@fortawesome/free-solid-svg-icons'
import { useContext } from 'react';
import mapIcon from './map-icon.png'
import { ProductsContext } from '../../ProductsContext';

function Cart() {
  const products = useContext(ProductsContext);
  let price1 = parseFloat(products[1].price);
  let price2 = parseFloat(products[2].price);
  let price3 = parseFloat(products[15].price);
  let price4 = parseFloat(products[0].price);
  let subtotal = price1 + price2 + price3 + price4;
  return (
    <div className='cart-div'>
      <div className='page-container container flex'>
        <div className='left-section'>
          <div className='top-left boxx'>
            <div className='delivery-header header flex sb'>
              <h3>Delivery Information</h3>
              <FontAwesomeIcon icon={faPenToSquare} className='iconn' />
            </div>
            <div className='delivery-body flex body'>
              <div className='map'>
                <img alt='five' src={mapIcon} className='map-image' />
              </div>
              <div className='contact'>
                <p>Phone: +1(204)123-1233</p>
                <p>Address: 123 Shopcart lane, MB</p>
              </div>
            </div>
          </div>
          <div className='bottom-left boxx'>
            <div className='review-header header'>
              <h3>Review your items</h3>
            </div>
            <div className='review-body body'>
              <div className='productt flex'>
                <div className='product-imagee'>
                  <img alt='one'src={products[0].image} />
                </div>
                <div className='product-details'>
                  <p>Foldsack No. 1 Backpack</p>
                  <p>Blue</p>
                  <p>{`$${products[0].price}`}</p>
                </div>
                <div className='quantityy flex'>
                  <FontAwesomeIcon icon={faCircleMinus} className='icon' />
                  <p className='count'>3</p>
                  <FontAwesomeIcon icon={faCirclePlus} className='icon' />
                </div>
              </div>
              <div className='productt flex'>
                <div className='product-imagee'>
                  <img alt='two' src={products[1].image} />
                </div>
                <div className='product-details'>
                  <p>Mens Casual Premium T-Shirts</p>
                  <p>L</p>
                  <p>{`$${products[1].price}`}</p>
                </div>
                <div className='quantityy flex'>
                  <FontAwesomeIcon icon={faCircleMinus} className='icon' />
                  <p className='count'>1</p>
                  <FontAwesomeIcon icon={faCirclePlus} className='icon' />
                </div>
              </div>
              <div className='productt flex'>
                <div className='product-imagee'>
                  <img alt='three' src={products[2].image} />
                </div>
                <div className='product-details'>
                  <p>Mens Cotton Jacket</p>
                  <p>M</p>
                  <p>{`$${products[2].price}`}</p>
                </div>
                <div className='quantityy flex'>
                  <FontAwesomeIcon icon={faCircleMinus} className='icon' />
                  <p className='count'>2</p>
                  <FontAwesomeIcon icon={faCirclePlus} className='icon' />
                </div>
              </div>
              <div className='productt flex'>
                <div className='product-imagee'>
                  <img alt='four' src={products[15].image} />
                </div>
                <div className='product-details'>
                  <p>Leather Moto Biker Jacket</p>
                  <p>S</p>
                  <p>{`$${products[16].price}`}</p>
                </div>
                <div className='quantityy flex'>
                  <FontAwesomeIcon icon={faCircleMinus} className='icon' />
                  <p className='count'>3</p>
                  <FontAwesomeIcon icon={faCirclePlus} className='icon' />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='right-section'>
          <div className='top-right boxx'>
            <div className='summary-header header'>
              <h3>Order summary</h3>
            </div>
            <form className='payment-form body'>
              <p>Payment method:</p>
              <input type='radio' id='online' name='payment' value='online' />
              <label htmlFor='online'>Online Payment</label><br />

              <input type='radio' id='cash' name='payment' value='cash' />
              <label htmlFor='cash'>Cash on delivery (Must have exact amount)</label><br />

              <input type='radio' id='pos' name='payment' value='pos' />
              <label htmlFor='pos'>Pos on delivery</label><br />
            </form>
            <div className='flex header promo-field'>
              <input type='text' className='promo flex space-between' placeholder='Add Promo' /><div className='apply-button'>Apply</div>
            </div>
            <div className='totals body'>
              <div className='cost'>
                <p>Subtotal</p>
                <p>${subtotal}</p>
              </div>
              <div className='cost'>
                <p>Delivery fee</p>
                <p>$10.99</p>
              </div>
              <div className='cost'>
                <p>Discount</p>
                <p className='discount'>-$10.99</p>
              </div>
              <div className='cost header'>
                <p>Taxes</p>
                <p>$10.99</p>
              </div>
              <div className='cost final'>
                <p>Total</p>
                <p>${10.99 + subtotal}</p>
              </div>
              <div className='buttonss'>
                <button className='primary-button'>Continue with PayPal</button>
                <button className='secondary'>Confirm order</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;