import React from "react";
import "./ItemDetail.css";
import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = (props) => {
const {indice, onAdd, producto} = props;


  return (
    <div className="detail flex justify-center leading-7 w-1/3 bg-slate-300 shadow-2xl p-4">
      <div className="flex flex-col w-4/5 h-4/5  bg-slate-50 p-4 rounded-lg">
         <div className="flex justify-center"><img className="border-4 p-2 w-3/6 h-3/6" src={producto.images[0]} alt="{producto.title}"/>
        </div>
        <h3 className="font-bold"> Id : {producto.id} </h3>
        <h3 className="font-bold"> Título : {producto.title} </h3>
        <h3 className="font-bold"> Precio : $ {producto.price} </h3>
        <p className="text-base"> Descripción: {producto.description} </p>
        <br></br>
        
       

        < ItemCount producto = { producto } stock={producto.stock} onAdd={onAdd} indice={indice}/>
       
      </div>
    </div>
  );
};

export default ItemDetail;
