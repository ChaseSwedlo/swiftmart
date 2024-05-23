import { FaStar } from 'react-icons/fa';

function Star(props) {
  return (
    <FaStar 
      className={`star ${props.gold ? 'gold' : 'grey'}`} 
      onClick={props.onClick}
    />
  );
}

export default Star;