import Cart from "../components/Cart/Cart";
import { motion } from 'framer-motion';

function CartPage() {
  return (
    <motion.section
      key='home'
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
      <Cart /> 
    </motion.section>
  );
}

export default CartPage;