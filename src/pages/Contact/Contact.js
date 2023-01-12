import { Link } from "react-router-dom";

const Contact = () => {
    return (  
<div className=" flex flex-col items-center">
      <h1 className="text-3xl text-center font-semibold text-slate-600 py-8"> Contáctanos </h1>
      <p className="text-2xl py-2 text-slate-600 max-w-prose"> ¡Hola! Estamos aquí para ayudarte con todas tus necesidades  </p>
      <p className="text-2xl py-2 text-slate-600 max-w-prose" > Si tienes alguna pregunta o sugerencia déjanos tu correo electrónico </p>
      <p className="text-2xl py-2 text-slate-600 max-w-prose mb-8" > ¡Te contactaremos a la brevedad!</p>
      
    <form>
        <div className="flex flex-col items-center">
            <label className="text-lg text-slate-600 font-semibold"> Ingresa tu correo electrónico </label>
            <input className="border w-60 py-2 px-3 text-slate-600 text-left mb-20" placeholder="juanperez@mail.com" type="email" name="correo" required/>
            
            <button > Enviar </button>
        
        </div>

    </form>
      <div className="flex justify-end mb-20">
              <Link to="/">
                <div className="">
                  <button className="py-2 px-6 mx-auto bg-orange-300 text-white text-lg font-bold rounded-md hover:bg-orange-400">
                    {" "}
                    Volver a la Tienda {" "}
                  </button>
                </div>
              </Link>
      </div>
    </div> 




    );
}
 
export default Contact;