import { useContext } from "react";
import logo from "../../assets/img/logo.png";
import carro from "../../assets/img/shoppingCart.svg";
import CartWidget from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";
import categoriesdata from "../../assets/categoriesdata";
import { cartContext } from "../../Context/CartContext";

const NavBar = () => {
  const { qtycartproducts } = useContext(cartContext);

  return (
    <div className="flex bg-slate-600 text-slate-100 justify-center h-40 mb-4">
      <nav className="flex flex-row items-center">
        <Link to="/">
          <div className="flex items-center hover:scale-105 duration-300">
            <img
              className="w-32 h-28 mx-16"
              alt="imagen de logo"
              src={logo}
            ></img>
            <p className="text-4xl text-orange-400 font-semibold tracking-wide">
              {" "}
              REACT STORE{" "}
            </p>
          </div>
        </Link>

        <ul className=" flex items-center m-30">
          <Link to="nosotros">
            <li className="mx-10 text-2xl font-semibold px-2 py-2 hover:text-orange-400 rounded-lg ">
              {" "}
              <h2> Nosotros </h2>{" "}
            </li>
          </Link>
          <div>
            <button className="peer px-2 font-semibold hover:text-orange-400 text-2xl rounded-lg relative">
              {" "}
              Categorias{" "}
            </button>

            <div className="categorias absolute capitalize text-slate-600 hidden peer-hover:flex hover:flex w-[140px] flex-col items-start bg-slate-50 rounded-b-lg">
              {categoriesdata.map((category) => (
                <Link
                  className="scroll-smooth text-sm font-semibold px-5 py-3 hover:text-lg hover:text-orange-400 rounded-lg"
                  key={category.id}
                  to={`/category/${category.name}`}
                >
                  {category.name}
                </Link>
              ))}
            </div>
          </div>

          <Link to="contacto">
            <li className="mx-10 text-2xl py-2 font-semibold hover:text-orange-400 rounded-lg ">
              {" "}
              <h2> Contacto </h2>{" "}
            </li>
          </Link>
        </ul>
      </nav>

      <Link to="/cart">
        <div className="flex items-center pt-12 hover:scale-110 duration-300">
          <img
            className="w-16 h-16 px-1"
            alt="imagen de carro"
            src={carro}
          ></img>
        </div>
      </Link>

      {qtycartproducts !== 0 ? (
        <CartWidget number={qtycartproducts} />
      ) : (
        <p></p>
      )}
    </div>
  );
};
export default NavBar;
