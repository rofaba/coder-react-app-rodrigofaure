import { React } from "react";
import { Link } from "react-router-dom";

const EndSale = ({ idventa, name, lastName }) => {
  return (
    <div className="container flex justify-center mx-auto py-4">
      <div className="w-1/2 bg-white rounded shadow-2xl p-8 items-start">
        <h1 className="text-center text-orange-400 text-2xl font-bold mb-8">
          Compra finalizada exitosamente
        </h1>
        <div className="flex flex-col items-start ">
          <p className="text-lg text-slate-600 font-semi-bold py-4 px-6 ">
            {" "}
            Estimado(a) {name} {lastName}{" "}
          </p>
          <p className=" text-lg text-slate-600 py-2 px-6 ">
            {" "}
            Su compra se ha completado de manera satisfactoria.{" "}
          </p>
          <p className=" text-lg text-slate-600 py-2 px-6 ">
            Le sugerimos que guarde su número de compra para seguimiento del
            despacho.
          </p>
          <p className="text-lg text-slate-600 py-2 px-6 mb-12">
            {" "}
            Agradecemos su preferencia{" "}
          </p>
        </div>

        <div className="flex items-start mb-4 bg-slate-100 px-4">
          <p className="text-lg font-bold text-orange-400 mb-2 py-4">
            Número de Compra:{" "}
          </p>
          <p className="text-xl text-slate-600 font-bold mx-auto py-4 ">
            {idventa}
          </p>
        </div>
        <Link to={"/"}>
          <div className="flex justify-center mb-4">
            <p className="text-orange-400 text-2xl pt-2 mt-8 underline font-semibold hover:font-bold ">
              {" "}
              Volver a la tienda{" "}
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default EndSale;
