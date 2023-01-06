import React from "react";
import { Link } from "react-router-dom";

const Nosotros = () => {
  return (
    <div>
      <h1 className="text-center text-4xl p-4"> QUIENES SOMOS</h1>
      <p className="text-center text-2xl p-4"> Pronto podrás ver acá ver quiénes somos y qué hacemos.</p>

      <Link to={"/"}>
        <div className="flex justify-center mb-4">
          <button className="text-center text-xl bg-zinc-200 p-4 rounded-xl hover:text-xl hover:bg-slate-300 " >Volver a HOME</button>
        </div>
      </Link>

    </div>
  );
};

export default Nosotros;
