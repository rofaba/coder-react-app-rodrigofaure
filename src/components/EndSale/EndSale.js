import { React } from "react";
import { Link } from "react-router-dom";

const EndSale = ({ idventa, name, lastName }) => {
  return (
    <div className="w-4/6 h-auto mx-auto bg-white rounded-md shadow-xl flex flex-col items-center py-4">
      <div className="w-2/3 bg-white rounded p-8 m-4 items-center">
        <h1 className="w-full text-center text-orange-400 text-2xl text-slate-600 font-bold mb-8">
          Compra finalizada exitosamente
        </h1>
        <div className="flex flex-col items-center ">
          <p className="py-4 px-6 flex-auto text-lg text-slate-600">
            {" "}
            Estimado(a) {name} {lastName}{" "}
          </p>
          <p className=" py-2 px-6 text-lg text-slate-600">
            {" "}
            Su compra se ha completado de manera satisfactoria.{" "}
          </p>
          <p className=" py-2 px-6 text-lg text-slate-600">
            Le sugerimos que guarde su número de compra para seguimiento del
            despacho.
          </p>
          <p className="mb-1  py-4 flex-auto text-slate-600 text-lg ">
            {" "}
            Agradecemos su preferencia{" "}
          </p>
        </div>
        <div className="flex mt-1 items-center pb-1 border-b-2 border-gray-100 mb-5"></div>
        <div className="flex flex-row items-center mb-4">
          <p className="mb-2  py-4 flex-auto font-bold text-lg text-slate-600 ">
            Número de Compra:{" "}
          </p>
          <p className="mb-2 py-4 flex-auto font-bold text-xl text-slate-600 text-end">
            {idventa}
          </p>
        </div>
        <Link to={"/"}>
          <div className="flex justify-center mb-4">
            <p className=" text-orange-400 text-2xl pt-2 underline  font-semibold hover:font-bold ">
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
