import React, { useContext } from "react";
import logo from "../../assets/img/logo.png";
import CartWidget from "../CartWidget/CartWidget";
import "./NavBar.css";
import { Link } from "react-router-dom";
import data from "../../assets/data";
import { cartContext } from "../../Context/CartContext";

const NavBar = () => {
  const { qtycartproducts } = useContext(cartContext);

  return (
    <div className="flex bg-slate-600 text-slate-100 justify-center border-2 border-solid border-b-grey-300 h-36 mb-4">
      <nav className="flex flex-row items-center">
        <Link to="/">
          <div className="flex items-center hover:scale-105 duration-300">
            <img
              className="w-32 h-28 mx-4"
              alt="imagen de logo"
              src={logo}
            ></img>
            <p className="text-4xl italic text-orange-400 font-bold tracking-wide">
              {" "}
              REACT STORE{" "}
            </p>
          </div>
        </Link>

        <ul className=" flex items-center" style={{ margin: "30px" }}>
          <Link to="nosotros">
            <li className="mx-10 text-2xl font-semibold px-2 py-2 hover:text-orange-400 rounded-lg ">
              {" "}
              <h2> Nosotros </h2>{" "}
            </li>
          </Link>
          <div>
            <button className="peer px-2 py-2 font-semibold hover:text-orange-400 text-2xl rounded-lg relative">
              {" "}
              Categorias{" "}
            </button>

            {/* // categorías dinámicas (extra) */}

            <div className="categorias absolute capitalize text-slate-600 hidden peer-hover:flex hover:flex w-[130px] flex-col items-start bg-white drop-shadow-lg rounded-b-lg">
              {data.map((category) => (
                <Link
                  className="px-5 py-3 py-1 text-sm font-semibold hover:text-lg hover:text-orange-400 rounded-lg"
                  key={category.id}
                  to={`/category/${category.name}`}
                >
                  {category.name}
                </Link>
              ))}
            </div>
          </div>

          <li></li>

          <Link to="contacto">
            <li className="mx-10 text-2xl py-2 font-semibold hover:text-orange-400 rounded-lg ">
              {" "}
              <h2> Contacto </h2>{" "}
            </li>
          </Link>
        </ul>
      </nav>

      {qtycartproducts !== 0 ? (
        <CartWidget number={qtycartproducts} />
      ) : (
        <p></p>
      )}
    </div>
  );
};

export default NavBar;
