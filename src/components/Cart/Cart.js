import { useContext } from "react";
import { Link } from "react-router-dom";
import { cartContext } from "../../Context/CartContext";

const Cart = () => {
  const { totalpagar, cartproducts, removeItem, clearCart } =
    useContext(cartContext);

  return (
    <div>
      <h1 className="text-center font-sans font-semi-bold text-3xl p-4 text-slate-600">
        {" "}
        Carro de Compras
      </h1>

      {cartproducts.length === 0 ? (
        <div>
          <h2 className="text-2xl text-center text-orange-400 font-bold">
            {" "}
            El carrito de compras no tiene productos
          </h2>
          <Link to="/">
            <div className="flex justify-center">
              <button className="py-2 px-4 mt-16 mb-64 mx-auto bg-orange-300 text-white text-lg font-bold rounded-md hover:bg-orange-400">
                {" "}
                Ir a la Tienda{" "}
              </button>
            </div>
          </Link>
        </div>
      ) : (
        <div className=" gap-12 py-6 px-16 justify-center">
          <tr className=" text-xl text-orange-400 font-bold">
            <th className="px-16"> Codigo</th>
            <th className="px-16"> Imagen</th>
            <th className="px-16"> Nombre producto</th>
            <th className="px-16"> Fabricante</th>
            <th className="px-16"> Precio </th>
            <th className="px-16"> Cantidad </th>
            <th className="px-16"> Subtotal </th>
            <th className="px-16"> Action </th>
          </tr>

          {cartproducts.map((product) => (
            <tr className="grid-col-3 items-center  ">
              <td className="px-16 text-slate-600 font-semibold ">
                {product.id}{" "}
              </td>
              <td className="px-16">
                {" "}
                <img
                  className=" w-16 h-16 mt-6 flex items-middle "
                  src={product.thumbnail}
                  alt={product.title}
                ></img>{" "}
              </td>
              <td className="px-16 text-slate-600 font-semibold ">
                {product.name}{" "}
              </td>
              <td className="px-16 text-slate-600 font-semibold ">
                {product.brand}{" "}
              </td>
              <td className="px-16 text-slate-600 font-semibold text-start ">
                $ {product.price}
              </td>

              <td className="px-16 text-slate-600 font-semibold  flex justify-center ">
                {/* <button className="px-6 text-2xl font-bold text-orange-400">  -  </button> */}

                <span className="pt-1 text-xl"> {product.qty} </span>

                {/* <button className="px-6 text-2xl font-bold text-orange-400">  +  </button> */}
              </td>

              <td className="px-16 text-slate-600 font-semibold text-end ">
                $ {product.qty * product.price}
              </td>
              <td>
                {" "}
                <button
                  className="ml-14 p-2 text-white font-bold bg-orange-300 rounded-md hover:bg-orange-400"
                  onClick={() => {
                    removeItem(product.id);
                  }}
                >
                  {" "}
                  Eliminar{" "}
                </button>
              </td>
            </tr>
          ))}
          <div>
            <div className=" flex justify-end mt-8 py-4 px-8 bg-slate-200 items-center text-2xl text-orange-400">
              <span className="pr-16 my-2  font-semibold">
                {" "}
                Total a pagar : $ {totalpagar}{" "}
              </span>

              <Link to="/checkout">
                <button className="px-6 py-2 bg-orange-300 text-white text-lg font-bold mr-12 ml-1 rounded-md hover:bg-orange-400">
                  {" "}
                  Comprar{" "}
                </button>
              </Link>
              <button
                className="px-6 py-2 bg-orange-300 text-white text-lg font-bold mr-6 ml-1 rounded-md hover:bg-orange-400"
                onClick={() => {
                  clearCart();
                }}
              >
                {" "}
                Vaciar Carro{" "}
              </button>
            </div>
          </div>

          <br></br>

          <div>
            <div className="flex justify-end mr-24">
              <Link to="/">
                <div className="">
                  <button className="py-2 px-4 mx-auto bg-orange-300 text-white text-lg font-bold rounded-md hover:bg-orange-400">
                    {" "}
                    Agregar más productos{" "}
                  </button>
                </div>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
