import { Link } from "react-router-dom";
import ContactForm from "../../components/ContactForm/ContactForm";

const Contact = () => {
  return (
    <div className=" flex flex-col px-96 mx-24">
      <h1 className="text-3xl text-center font-semibold text-slate-600 py-8">
        {" "}
        Zona de Contacto{" "}
      </h1>
      <p className="flex-start text-2xl py-2 text-slate-600 max-w-prose text-start">
        {" "}
        ¡Hola! Estamos aquí para ayudarte con todas tus necesidades{" "}
      </p>
      <p className="text-2xl py-2 text-slate-600 max-w-prose">
        {" "}
        Si tienes alguna pregunta, reclamo o sugerencia déjanos tu nombre y
        correo electrónico{" "}
      </p>
      <p className="text-2xl py-2 text-slate-600 max-w-prose mb-4">
        {" "}
        ¡Te contactaremos a la brevedad!
      </p>

      <ContactForm />

      <div className="flex justify-end mt-8 mb-20">
        <Link to="/">
          <button className="py-2 px-6 mx-auto bg-orange-300 text-white text-lg font-bold rounded-md hover:bg-orange-400">
            {" "}
            Volver a la Tienda{" "}
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Contact;
