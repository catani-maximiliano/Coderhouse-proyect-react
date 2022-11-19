
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'



const CartWidget = () => {
  //la lógica va siempre antes del return
  return (
    <div className="cart-widget">
      <FontAwesomeIcon icon={faCartShopping} size="2x" />
      <div>0</div>
    </div>
  );
};

export default CartWidget;