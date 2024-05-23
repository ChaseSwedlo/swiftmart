import Products from '../components/Products/Products';
import Herobanner from '../components/Herobanner/Herobanner';
import { motion } from 'framer-motion';

function Home() {
  return (
    <motion.section
      key='home'
      initial={{ opacity: 0}}
      animate={{ 
      opacity: 1, 
      transition: { duration: 0.3 }
    }}
    exit={{ 
      opacity: 0, 
      transition: { duration: 0.3 }
    }}
    >
      <Herobanner/>
      <Products />
     
    </motion.section>
  );
}

export default Home;