import React from "react";
import { Link } from "react-router-dom";

const Item = ( props) => {
  
const {productId, name, price, pictureURL, stock} = props

  return (
    <div className="bg-white border-6  p-3 shadow-2xl hover:scale-105 duration-300">
      <div className="w-64 h-96 border-2 p-2 rounded-lg text-center">
        <h3 className="font-bold"> {name} </h3>
        <h3> Precio: {price} </h3>
        <br></br>
        <div className="flex justify-center">
        <img className="w-40 h-40" src={pictureURL} alt={name} /> 
        </div>
       
        <Link to={`/${productId}`}>
              <button className = "w-32 bg-orange-300 border-2 text-white font-bold rounded-md  p-1 mt-8 m-4 hover:bg-orange-400  " > Ver Detalles </button>
        </Link>
        
        <p> Stock Disponible: {stock} </p>
      </div>
    </div>
  );
};

export default Item;
