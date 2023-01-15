import React, { useState } from "react";
import { db } from "../../Firebase/firestore-config";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import swal from "sweetalert";
import "./ContactForm.css";

const ContactForm = () => {
  const [inputName, setInputName] = useState("");
  const [inputEmail, setInputEmail] = useState("");
  const [inputMessage, setInputMessage] = useState("");

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
      mensaje: inputMessage,
      fecha: serverTimestamp(),
    };
    const emailCollectionRef = collection(db, "emails");
    await addDoc(emailCollectionRef, emaildecontacto).then(({ id }) => {
      swal("Datos guardados!", "Te contactaremos pronto!", "success");
    });
    setInputName("");
    setInputEmail("");
    setInputMessage("");
  };
  return (
    <form
      className="background py-4 flex flex-col items-justify"
      onSubmit={handleSubmit}
    >
      <input
        className="border w-1/2 text-slate-600 p-2  my-1 rounded-md"
        type="text"
        placeholder="Ingresa tu nombre"
        value={inputName}
        required
        onChange={(e) => setInputName(e.target.value)}
      />
      {inputName === "" && (
        <span className="text-xs text-red-400 ">{mensajeError}</span>
      )}
      <input
        className="border w-1/2 text-slate-600 p-2 my-2 rounded-md"
        type="email"
        placeholder="Ingresa tu correo electrónico"
        value={inputEmail}
        required
        onChange={(e) => setInputEmail(e.target.value)}
      />
      {validarForm(inputEmail) !== "true" && (
        <span className="text-xs text-red-400 "> {mensajeErrorEmail} </span>
      )}

      <textarea
        className="border w-1/2 text-slate-600 p-2 my-2 rounded-md"
        type="text"
        placeholder="Déjanos tu mensaje"
        value={inputMessage}
        required
        onChange={(e) => setInputMessage(e.target.value)}
      />

      <button
        className="py-2 px-6 bg-orange-300 mt-8 text-white text-lg font-bold rounded-md hover:bg-orange-400"
        type="submit"
      >
        Guardar Datos
      </button>
    </form>
  );
};

export default ContactForm;
