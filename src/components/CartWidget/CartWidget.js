import carro from "../../assets/img/shoppingCart.svg";
import { Link } from 'react-router-dom';


const CartWidget = (props) => {
  return (
    <Link to="/cart">
      <div className="flex items-center mt-4 pt-6 hover:scale-105 duration-300">
     
        <img
          className="w-16 h-16 px-1"
          
          alt="imagen de carro"
          src={carro}
        ></img>
        <span className="flex justify-center mx-2 pt-1 w-10 h-10 text-2xl text-white oldstyle-nums bg-orange-400 rounded-full"> {props.number} </span>
      </div>
    </Link>
  );
};
export default CartWidget;
