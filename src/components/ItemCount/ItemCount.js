import { useState } from "react";
import {useNavigate } from "react-router-dom"
const ItemCount = ({ producto, indice, stock, onAdd }) => {
  const [contador, setContador] = useState(indice);
  const [finishbuy, setFinishbuy] = useState(false);
  const [hidecounter, setHidecounter] = useState("flex");

  const navigate = useNavigate();

  const addItem = () => {
    setContador(contador + 1);
  };
  const removeItem = () => {
    if (contador > 0) {
      setContador(contador - 1);

    }
  };

  // Disable Button
  let disableButton;
  let buttonClass;
  let buttonContent;

  if (contador > stock) {
    buttonContent = "Stock máximo superado";
   } else { buttonContent = "Agregar al Carro"}
   
if(finishbuy === false) {

  contador === 0 || contador > stock ? (disableButton = true) : (disableButton = false);

  if (disableButton === false) {
      buttonClass = "rounded-xl  text-xl p-2 w-72 m-5 bg-orange-300 text-white font-bold hover:bg-orange-400"
    } else {
      buttonClass = "rounded-xl  text-xl p-2 w-72 m-5 bg-zinc-100";
   
  }

} else {
  buttonClass = "rounded-xl  text-white font-bold text-2xl p-2 w-72 m-5 bg-orange-300 text-white font-bold hover:bg-orange-400";
  buttonContent = "Terminar Compra"
}

//cambia asignaciones para caso de comprar vs terminar en cada producto
const ejecuteOrder66 = ()=> {
  if (finishbuy === false ) {
      onAdd(producto, contador)
      setFinishbuy(true)
      setHidecounter("hidden")

    } else {
      navigate("/cart");
}
}

  return (
    <div className=" flex flex-col justify-center items-center">
    
      <p> Stock disponible: {stock} </p>
        

      <div className = {hidecounter}>
        <button className=" w-24 text-5xl " onClick={removeItem}>
          {" "}
          -{" "}
        </button>
        <h1 className="text-4xl pt-3"> {contador} </h1>
        <button className= {" w-24 text-5xl "} onClick={addItem}>
          {" "}
          +{" "}
        </button>
      </div>

      <button 
        disabled={disableButton}
        className={buttonClass}
        onClick = { () => { ejecuteOrder66() }
        }
                >
       {buttonContent}
     </button>

      </div>
  );
};

export default ItemCount;
