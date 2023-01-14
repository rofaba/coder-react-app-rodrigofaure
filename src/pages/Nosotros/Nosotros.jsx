import React from "react";
import { Link } from "react-router-dom";

const Nosotros = () => {
  return (
    <div className=" flex flex-col px-96 mx-24">
      <h1 className="text-3xl text-center font-semibold text-slate-600 py-8"> Quiénes somos </h1>
      <p className="text-2xl py-2  text-slate-600 max-w-prose"> Somos una tienda departamental en línea para encontrar todo lo que necesites </p>
      <p className="text-2xl py-2  text-slate-600 max-w-prose" >Ofrecemos una amplia variedad de productos de calidad a precios competitivos</p>
      <p className="text-2xl py-2  text-slate-600 max-w-prose mb-20" >Disfruta la comodidad de comprar en línea sin salir de casa, envíos rápidos y seguros</p>
      <p className="text-2xl py-2  text-slate-600 max-w-prose mb-12" > ¡Haz tu mejor compra ahora!</p>

      <div className="flex justify-end mb-20">
              <Link to="/">
                <div className="">
                  <button className="py-2 px-6 mr-72 bg-orange-300 text-white text-lg font-bold rounded-md hover:bg-orange-400">
                    {" "}
                    Ir a la Tienda {" "}
                  </button>
                </div>
              </Link>
      </div>
    </div>
  );
};

export default Nosotros;
