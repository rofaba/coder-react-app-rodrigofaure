import React from "react";

import { useContext, useState } from "react";
import { Link } from "react-router-dom";

import { cartContext } from "../../Context/CartContext";

import { getFirestor, db } from "../../Firebase/firestore-config";
import { doc, addDoc, collection, serverTimestamp } from "firebase/firestore";

import EndSale from "../EndSale/EndSale";

const Checkout = () => {
  const { cartproducts, totalpagar, qtycartproducts, clearCart } =
    useContext(cartContext);

  const [idventa, setIdventa] = useState("");

  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [mediopago, setMediopago] = useState("tc");
  const [emailconf, setEmailconf] = useState("");

  const datosComprador = {
    nombre: name,
    apellido: lastName,
    email: email,
    direccion: address,
    mediopago: mediopago,
  };
  const endingSell = async () => {
    const ventasCollectionRef = collection(db, "ventas");
    const venta = await addDoc(ventasCollectionRef, {
      datosComprador,
      items: cartproducts,
      date: serverTimestamp(),
      total: totalpagar,
    });
    setIdventa(venta.id);
    clearCart();
  };

  const mensajeError = "* Campo requerido";
  const mensajeErrorEmail = "* Email no valido";

  const validarForm = (data) => {
    if (
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(
        data
      ) &
      (email !== "")
    ) {
      return "true";
    }
  };

  return (
    <div className="background min-h-screen py-4 bg-slate-200 ">
      {idventa ? (
        <EndSale idventa={idventa} name={name} lastName={lastName} />
      ) : (
        <div className="w-full max-w-6xl  mx-auto rounded-md shadow-2xl flex flex-row py-4 overflow-hidden">
          <div className="w-1/2 bg-slate-50 rounded p-8 m-4">
            <h1 className="block w-full text-center text-slate-600 text-2xl font-bold mb-6">
              {" "}
              Datos para la compra{" "}
            </h1>

            <form
              onSubmit={(ev) => {
                ev.preventDefault();
              }}
            >
              <div className="flex flex-col mb-4">
                <label className="mb-2 font-bold text-lg text-slate-600">
                  {" "}
                  Nombre{" "}
                </label>
                <input
                  className="border py-2 px-3 text-slate-600 text-left"
                  placeholder="Juan"
                  type="text"
                  name="nombre"
                  value={name}
                  required
                  onChange={(ev) => setName(ev.target.value)}
                />
                {name === "" && (
                  <p className="text-xs text-red-600 ">{mensajeError}</p>
                )}
              </div>
              <div className="flex flex-col mb-4">
                <label className="mb-2 font-bold text-lg text-slate-600">
                  {" "}
                  Apellido{" "}
                </label>
                <input
                  className="border py-2 px-3 text-grey-800 text-left"
                  placeholder="Pérez"
                  type="text"
                  name="apellido"
                  value={lastName}
                  required
                  onChange={(ev) => setLastName(ev.target.value)}
                />
                {lastName === "" && (
                  <p className="text-xs text-red-600 "> {mensajeError} </p>
                )}
              </div>
              <div className="flex flex-col mb-4">
                <label className="mb-2 font-bold text-lg text-slate-600">
                  {" "}
                  Email{" "}
                </label>
                <input
                  className="border py-2 px-3 text-slate-600 text-left"
                  placeholder="juanperez@mail.com"
                  type="email"
                  name="email"
                  value={email}
                  required
                  onChange={(ev) => setEmail(ev.target.value)}
                />
                {validarForm(email) !== "true" && (
                  <p className="text-xs text-red-600 "> {mensajeErrorEmail} </p>
                )}
              </div>
              <div className="flex flex-col mb-4">
                <label className="mb-2 font-bold text-lg text-slate-600">
                  {" "}
                  Confirmar email{" "}
                </label>
                <input
                  className="border py-2 px-3 text-slate-600 text-left"
                  placeholder="juanperez@mail.com"
                  type="email"
                  name="email"
                  value={emailconf}
                  required
                  onChange={(ev) => setEmailconf(ev.target.value)}
                />
                {(validarForm(emailconf) !== "true" || emailconf !== email) && (
                  <p className="text-xs text-red-600 "> {mensajeErrorEmail} </p>
                )}
              </div>
              <div className="flex flex-col mb-4">
                <label className="mb-2 font-bold text-lg text-slate-600">
                  {" "}
                  Dirección{" "}
                </label>
                <input
                  className="border py-2 px-3 text-slate-600 text-left"
                  placeholder="Ingresa acá tu dirección de despacho"
                  type="text"
                  name="direccion"
                  value={address}
                  required
                  onChange={(ev) => setAddress(ev.target.value)}
                />
                {address === "" && (
                  <p className="text-xs text-red-600 "> {mensajeError} </p>
                )}
              </div>
              <div className="flex flex-col mb-4">
                <label className="mb-2 font-bold text-lg text-slate-600">
                  {" "}
                  Forma de pago{" "}
                </label>
                <select
                  className="border py-2 px-3 text-slate-600"
                  value={mediopago}
                  onChange={(ev) => setMediopago(ev.target.value)}
                >
                  <option name="mediopago" value="tc">
                    {" "}
                    Tarjeta de Crédito{" "}
                  </option>
                  <option name="mediopago" value="td">
                    {" "}
                    Tarjeta de Débito{" "}
                  </option>
                  <option name="mediopago" value="mp">
                    {" "}
                    MercadoPago{" "}
                  </option>
                </select>
              </div>
            </form>
            <button
              className="block bg-orange-300 hover:bg-orange-400 text-white text-lg mx-auto px-3 py-0.5 rounded-md disabled:bg-orange-200"
              disabled={
                !name ||
                !lastName ||
                !address ||
                validarForm(email) !== "true" ||
                email !== emailconf
              }
              onClick={endingSell}
            >
              Realizar compra
            </button>
          </div>
          <div className="w-1/2 bg-white rounded p-8 m-4">
            <h1 className="w-full text-center text-slate-600 text-2xl font-bold mb-8">
              {" "}
              Resumen de compra{" "}
            </h1>
            <div className="flex flex-col items-center ">
              <p className="mb-2  py-4 px-6 flex-auto text-lg text-orange-400 font-semibold">
                {" "}
                Cantidad de Productos ( {qtycartproducts} ){" "}
              </p>

              <div className="mb-2  py-4 px-6 flex-auto text-slate-600 text-start">
                {cartproducts.map((product) => (
                  <div className="flex justify-between text-base text-slate-600 py-1">
                    {" "}
                    {product.qty} {product.name}{" "}
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-row items-center mb-1">
              <p className="mb-2  py-4 px-6 flex-auto text-lg text-slate-600">
                {" "}
                Envío{" "}
              </p>
              <p className="mb-2  py-4 px-6 flex-auto text-lg text-orange-400 font-bold text-end">
                {" "}
                Gratis{" "}
              </p>
            </div>
            <div className="flex mt-1 items-center pb-1 border-b-2 border-gray-100 mb-5"></div>
            <div className="flex flex-row items-center mb-4">
              <p className="mb-2  py-4 px-6 flex-auto font-bold text-xl text-gray-600">
                {" "}
                Total a pagar{" "}
              </p>
              <p className="mb-2 py-4 px-6 flex-auto font-bold text-xl text-gray-600 text-end">
                {" "}
                <spam className="text-orange-400"> $ </spam> {totalpagar}{" "}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Checkout;
