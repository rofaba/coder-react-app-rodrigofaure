import { Link } from "react-router-dom";

const CartWidget = (props) => {
  return (
    <Link to="/cart">
      <div className="flex items-center mt-4 ml-[-12px] pt-6 hover:scale-105 duration-300 ">
        <span className="flex items-center justify-center w-8 h-8 text-2xl text-white font-semibold bg-orange-400 rounded-full">
          {" "}
          {props.number}{" "}
        </span>
      </div>
    </Link>
  );
};
export default CartWidget;
