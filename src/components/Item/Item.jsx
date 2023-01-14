import { Link } from "react-router-dom";

const Item = (props) => {
  const { productId, name, price, pictureURL, stock } = props;

  return (
    <div className="bg-white border-6  p-3 shadow-2xl hover:scale-105 duration-300">
      <div className="w-64 h-96 border-2 p-2 rounded-lg text-center">
        <h3 className="text-orange-400 font-bold capitalize py-2"> {name} </h3>
        <h3 className="py-2"> Precio: $ {price} </h3>

        <div className="flex justify-center">
          <img className="w-40 h-40 rounded-sm " src={pictureURL} alt={name} />
        </div>

        <Link to={`/item/${productId}`}>
          <button className="w-36 bg-orange-300 border-2 text-white font-bold py-1 rounded-md my-4 hover:bg-orange-400  ">
            {" "}
            Ver Detalles{" "}
          </button>
        </Link>

        <p className="mb-2"> {stock} Unidades disponibles </p>
      </div>
    </div>
  );
};

export default Item;
