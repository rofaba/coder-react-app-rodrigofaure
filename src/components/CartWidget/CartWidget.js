import carro from "../../assets/img/carrito.jpeg";
import { Link } from 'react-router-dom';


const CartWidget = (props) => {
  return (
    <Link to="/cart">
      <div className="flex items-center pt-6">
     
        <img
          style={{ width: "100px", height: "100px"}}
          alt="imagen de carro"
          src={carro}
        ></img>
        <span className="flex justify-center pt-1 w-10 h-10 text-2xl text-white oldstyle-nums bg-orange-400 rounded-full"> {props.number} </span>
      </div>
    </Link>
  );
};
export default CartWidget;
