import bg from '../Media/404.jpg';
import { Link } from  'react-router-dom';
import { motion } from 'framer-motion';

function NotFound() {
  return (
    <motion.section 
      className='full-page'
      key='404'
      initial={{ opacity: 0}}
      animate={{ 
      opacity: 1, 
      transition: { duration: 0.2 }
    }}
    exit={{ 
      opacity: 0, 
      transition: { duration: 0.2 }
    }}
    >
      <div>
        <figure>
          <img alt='404' src={bg}/>
        </figure>
        <Link to="/" className="home-link">
          <button>
            Back home
          </button>
        </Link>
      </div>
    </motion.section>
  )
}

export default NotFound