import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ItemCount = ({ producto, indice, stock, onAdd }) => {
  console.log(producto)
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
  } else {
    buttonContent = "Agregar al Carro";
  }

  if (finishbuy === false) {
    contador === 0 || contador > stock
      ? (disableButton = true)
      : (disableButton = false);

        disableButton === false
        ? buttonClass = "rounded-md text-xl p-2 w-60 m-5 bg-orange-300 text-white font-bold hover:bg-orange-400"
        : buttonClass = "rounded-md  text-xl p-2 w-72 m-5 bg-zinc-100";
    
  } else {
    buttonClass =
      "rounded-md text-white font-bold text-2xl p-2 w-60 m-5 bg-orange-300 text-white font-bold hover:bg-orange-400";
    buttonContent = "Terminar Compra";
  }

  //cambia asignaciones para caso de comprar vs terminar en cada producto
  const ejecuteOrder66 = () => {
    if (finishbuy === false) {
      onAdd(producto, contador);
      setFinishbuy(true);
      setHidecounter("hidden");
    } else {
      navigate("/cart");
    }
  };

  return (
    <div className=" flex flex-col justify-start items-center">
      <p > Stock disponible: {stock} </p>

      <div className="flex my-2">
        <div className={hidecounter}>
          <div className="flex">
              <button className=" text-4xl py-2 px-4 text-orange-400 font-semibold hover:bg-slate-100" onClick={removeItem}>
                    {" "}
                  - {" "}
              </button>
              <p className="text-4xl text-slate-600 px-4 pt-6"> {contador} </p>
              <button className={" text-4xl py-2 px-4  text-orange-400 font-semibold hover:bg-slate-100"} onClick={addItem}>
                    {" "}
                  + {" "}
              </button>
          </div>
        </div>

        <button
          disabled={disableButton}
          className={buttonClass}
          onClick={() => {
            ejecuteOrder66();
          }}
        >
          {buttonContent}
        </button>
      </div>
    </div>
  );
};

export default ItemCount;
