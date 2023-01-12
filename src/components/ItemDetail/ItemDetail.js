import React from "react";
import "./ItemDetail.css";
import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";

const ItemDetail = (props) => {
  
const {indice, onAdd, producto} = props;


  return (
    <div className="detail flex justify-center leading-7 w-1/3 bg-slate-300 shadow-2xl my-4 py-4">
      <div className="flex flex-col w-4/5 h-4/5  bg-slate-50 p-4 rounded-lg">
         <div className="flex justify-center"><img className="border-4 p-2 w-3/6 h-3/6" src={producto.images[0]} alt="{producto.title}"/>
        </div>
        <h3 className="font-bold"> Id : {producto.id} </h3>
        <h3 className="font-bold"> Título : {producto.title} </h3>
        <h3 className="font-bold"> Precio : $ {producto.price} </h3>
        <p className="text-base"> Descripción: {producto.description} </p>
        <br></br>
      <div >
       < ItemCount producto = { producto } stock={producto.stock} onAdd={onAdd} indice={indice}/>

       <Link to={`/category/${producto.category}`}>
              <div className="flex justify-center mb-4">
                <p className=" text-orange-400 text-xl pt-2 font-semibold hover:font-bold "> Volver a categoria <span className="capitalize">{producto.category} </span></p>
              
              </div>
        </Link>
       </div>
      </div>
    </div>
  );
};

export default ItemDetail;
