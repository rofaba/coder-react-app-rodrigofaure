import React, { useState } from "react";
import { db } from "../../Firebase/firestore-config";
import { addDoc, collection } from "firebase/firestore";

const ContactForm = () => {
  const [inputName, setInputName] = useState("");
  const [inputEmail, setInputEmail] = useState("");

  const mensajeError = "* Campo requerido";
  const mensajeErrorEmail = "* Email no valido";

  const validarForm = (data) => {
    if (
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(
        data
      ) &
      (inputEmail !== "")
    ) {
      return "true";
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const emaildecontacto = {
      nombre: inputName,
      email: inputEmail,
    };
    const emailCollectionRef = collection(db, "emails");
    await addDoc(emailCollectionRef, emaildecontacto).then(({ id }) => {
      console.log("Datos de contacto guardados con ID: ", id);
    });
    setInputName("");
    setInputEmail("");
  };
  return (
    <form className="background py-4 flex flex-col" onSubmit={handleSubmit}>
      <input
        className="border w-64 text-slate-600 p-2 my-1 rounded-md"
        type="text"
        placeholder="Ingresa tu nombre"
        value={inputName}
        onChange={(e) => setInputName(e.target.value)}
      />
      {inputName === "" && (
        <span className="text-xs text-red-600 ">{mensajeError}</span>
      )}
      <input
        className="border w-64 text-slate-600 p-2 my-2 rounded-md"
        type="email"
        placeholder="Ingresa tu correo electrónico"
        value={inputEmail}
        onChange={(e) => setInputEmail(e.target.value)}
      />
      {validarForm(inputEmail) !== "true" && (
        <span className="text-xs text-red-600 "> {mensajeErrorEmail} </span>
      )}

      <button
        className="py-2 px-6 bg-orange-300 mt-4 text-white text-lg font-bold rounded-md hover:bg-orange-400"
        type="submit"
      >
        Guardar
      </button>
    </form>
  );
};

export default ContactForm;
