import { Link } from "react-router-dom";

const Contact = () => {
    return (  
<div>
      <h1 className="text-center text-4xl p-4"> CONTACTANOS</h1>
      <p className="text-center text-2xl p-4"> Acá pronto encontrarás información sobre como contactarnos. Estamos para ayudarte
      </p>

      <Link to={"/"}>
      <div className="flex justify-center mb-4">
          <button className="text-center text-xl bg-zinc-200 p-4 rounded-xl hover:text-xl hover:bg-slate-300 " >Volver a HOME</button>
      </div>
      </Link>
    </div>




    );
}
 
export default Contact;