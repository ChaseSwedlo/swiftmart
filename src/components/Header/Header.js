import './header.css';
import { FaAngleDown, FaLocationArrow, FaPhone, FaStroopwafel, FaShoppingCart } from "react-icons/fa";
import { FaUser } from "react-icons/fa6";
import { useContext } from 'react';
import DialogContext from '../../DialogContext';
import { Link } from 'react-router-dom';

function Header() {
  const { setIsDialogShown } = useContext(DialogContext);

  const handleSignUpClick = () => {
    setIsDialogShown(true);
  };

  return (
    <header>
      <section className='top-header'>
        <div className='container flex sb'>
          <div className='left-top-header flex'>
            <FaPhone className='phone'/>
            <p>+12049382834</p>
          </div>
          <div className='middle-top-header flex'>
            <FaLocationArrow className='locate'/>
            <p>Find a store near you</p>
          </div>
          <div className='right-top-header flex'>
            <p>ENG</p>
            <FaAngleDown className='down'/>
            <p>CAD</p>
            <FaAngleDown className='down'/>
          </div>
        </div>
      </section>
      <div className='container'>
        <section className='main-header flex sb'>
          <Link to={`/`} className='logo flex'>
            <FaStroopwafel className='fa-logo'/>
            <h1>SwiftMart</h1>
          </Link>
          <div className='flex header-buttons'>
            <FaUser/>
            <p onClick={handleSignUpClick}>Sign Up</p>
            <Link to={'/cart'} className='flex cart-button'>
              <FaShoppingCart/>
              <p>Cart</p>
            </Link>
          </div>
        </section>
      </div>
    </header>
  );
}

export default Header;