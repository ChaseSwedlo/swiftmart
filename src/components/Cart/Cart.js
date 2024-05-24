import './cart.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons'
import { faCircleMinus } from '@fortawesome/free-solid-svg-icons'
import mapIcon from './map-icon.png'
import productOne from './map-icon.png'
import productTwo from './map-icon.png'
import productThree from './map-icon.png'
import productFour from './map-icon.png'

function Cart() {
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
                  <img alt='one'src={productOne} />
                </div>
                <div className='product-details'>
                  <p>Product name</p>
                  <p>size/variation</p>
                  <p>$9.99</p>
                </div>
                <div className='quantity flex'>
                  <FontAwesomeIcon icon={faCircleMinus} className='icon' />
                  <p className='count'>3</p>
                  <FontAwesomeIcon icon={faCirclePlus} className='icon' />
                </div>
              </div>
              <div className='productt flex'>
                <div className='product-imagee'>
                  <img alt='two' src={productTwo} />
                </div>
                <div className='product-details'>
                  <p>Product name</p>
                  <p>size/variation</p>
                  <p>$9.99</p>
                </div>
                <div className='quantity flex'>
                  <FontAwesomeIcon icon={faCircleMinus} className='icon' />
                  <p className='count'>1</p>
                  <FontAwesomeIcon icon={faCirclePlus} className='icon' />
                </div>
              </div>
              <div className='productt flex'>
                <div className='product-imagee'>
                  <img alt='three' src={productThree} />
                </div>
                <div className='product-details'>
                  <p>Product name</p>
                  <p>size/variation</p>
                  <p>$9.99</p>
                </div>
                <div className='quantity flex'>
                  <FontAwesomeIcon icon={faCircleMinus} className='icon' />
                  <p className='count'>2</p>
                  <FontAwesomeIcon icon={faCirclePlus} className='icon' />
                </div>
              </div>
              <div className='productt flex'>
                <div className='product-imagee'>
                  <img alt='four' src={productFour} />
                </div>
                <div className='product-details'>
                  <p>Product name</p>
                  <p>size/variation</p>
                  <p>$9.99</p>
                </div>
                <div className='quantity flex'>
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
                <p>$10.99</p>
              </div>
              <div className='cost'>
                <p>Delivery fee</p>
                <p>$10.99</p>
              </div>
              <div className='cost'>
                <p>Discount</p>
                <p>-$10.99</p>
              </div>
              <div className='cost header'>
                <p>Taxes</p>
                <p>$10.99</p>
              </div>
              <div className='cost final'>
                <p>Total</p>
                <p>$100.99</p>
              </div>
              <div className='buttonss'>
                <button className='primary'>Continue with PayPal</button>
                <button className='secondary'>Confirm order</button>
              </div>
            </div>
          </div>
          {/* <div className='bottom-right box'></div> */}
        </div>
      </div>
    </div>
  );
}

export default Cart;