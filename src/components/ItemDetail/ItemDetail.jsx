import React from "react";
import "./ItemDetail.css";
import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";
import noEncontrado from "../../assets/img/noEncontrado.jpeg"

const ItemDetail = (props) => {
  const { indice, onAdd, producto } = props;

  return (
    <>
      {!producto.id ? (
        <div className="flex flex-col items-center">
           <img
                className="py-8"
                src={noEncontrado}
                alt="producto no encontrado"
              />
          <div className="flex justify-center mb-20">
            <Link to="/">
              <div className="">
                <button className="py-2 px-6 mx-auto bg-orange-300 text-white text-lg font-bold rounded-md hover:bg-orange-400">
                  {" "}
                  Volver a la Tienda{" "}
                </button>
              </div>
            </Link>
          </div>
        </div>
      ) : (
        <div className="detail flex justify-center leading-7 w-1/3 bg-slate-300 shadow-2xl my-4 py-4">
          <div className="flex flex-col w-4/5 h-4/5  bg-slate-50 p-4 rounded-sm">
            <div className="flex flex-col items-center">
              <h3 className="text-2xl p-2 p-4 text-orange-400 font-bold capitalize">
                {" "}
                {producto.title}{" "}
              </h3>
              <img
                className="w-3/6 h-3/6 m-2"
                src={producto.images[0]}
                alt="{producto.title}"
              />
            </div>

            <h3 className="text-xl font-bold text-slate-600 mx-auto py-4">
              {" "}
              Precio : $ {producto.price}{" "}
            </h3>
            <p className="text-lg text-slate-600 max-w-prose px-16 pb-4">
              {" "}
              Descripción: {producto.description}{" "}
            </p>
            <div className="flex flex-col items-center justify-center">
              <ItemCount
                producto={producto}
                stock={producto.stock}
                onAdd={onAdd}
                indice={indice}
              />

              <Link to={`/category/${producto.category}`}>
                <div className="flex justify-center mb-4">
                  <p className=" text-orange-400 text-xl pt-2 underline font-semibold hover:font-bold ">
                    {" "}
                    Volver a categoria{" "}
                    <span className="capitalize">{producto.category} </span>
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ItemDetail;
