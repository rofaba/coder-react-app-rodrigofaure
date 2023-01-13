import { useContext } from "react";
import { Link } from "react-router-dom";
import { cartContext } from "../../Context/CartContext";

const Cart = () => {
  const { totalpagar, cartproducts, removeItem, clearCart } =
    useContext(cartContext);

  return (
    <div className="container px-4 mx-auto flex flex-col items-center">
      <h1 className="text-center font-sans font-semi-bold text-3xl p-4 text-slate-600">
        {" "}
        Carro de Compras
      </h1>

      {cartproducts.length === 0 ? (
        <div>
          <h2 className="text-3xl text-center text-orange-400">
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
        <div className="mt-12">
          <tr className="flex text-xl ml-2 text-orange-400 font-bold gap-6">
            <th className="px-10 m-4"> Codigo</th>
            <th className="px-10 m-4"> Imagen</th>
            <th className="px-10 m-4"> Nombre producto</th>
            <th className="px-10 m-4"> Fabricante</th>
            <th className="px-10 m-4"> Precio </th>
            <th className="px-10 m-4"> Cantidad </th>
            <th className="px-10 m-4"> Subtotal </th>
            <th className="px-10 m-4"> Action </th>
          </tr>

          {cartproducts.map((product) => (
            <tr className=" ">
              <td className=" ml-1 px-4 text-slate-600 font-semibold ">
                {product.id}{" "}
              </td>
              <td className="">
                {" "}
                <img
                  className="ml-12 w-16 h-16 flex items-middle "
                  src={product.thumbnail}
                  alt={product.title}
                ></img>{" "}
              </td>
              <td className="px-12 text-slate-600 font-semibold ">
                {product.name}{" "}
              </td>
              <td className="px-12 text-slate-600 font-semibold ">
                {product.brand}{" "}
              </td>
              <td className="px-12 text-slate-600 font-semibold text-start ">
                $ {product.price}
              </td>

              <td className="px-16 ml-16 text-slate-600 font-semibold  flex justify-center ">
                <span className="pt-1 text-xl"> {product.qty} </span>
              </td>

              <td className="ml-2 px-28 text-slate-600 font-semibold text-end ">
                $ {product.qty * product.price}
              </td>
              <td>
                {" "}
                <button
                  className="ml-12 p-2 text-white font-bold bg-orange-300 rounded-md hover:bg-white hover:text-red-600"
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
          <div classname="">
            <div className=" flex justify-end mt-12 py-4 pr-24 bg-slate-300 border border-solid border-1 shadow-lg border-orange-200 items-center text-2xl text-orange-400">
              <span className="pr-16 my-2 text-2xl font-semibold">
                {" "}
                Total a pagar : $ {totalpagar}{" "}
              </span>
              <div classname="flex flex-col">
                <div>
                  <Link to="/checkout">
                    <button className="py-2 px-6 mb-2 bg-orange-300 text-white text-lg font-bold rounded-md hover:bg-orange-400">
                      {" "}
                      Comprar{" "}
                    </button>
                  </Link>
                </div>
                <div>
                  <button
                    className="text-red-400 text-lg ml-2 font-bold rounded-md hover:text-orange-500 hover:underline"
                    onClick={() => {
                      clearCart();
                    }}
                  >
                    {" "}
                    Vaciar Carro{" "}
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="flex justify-end mr-24 mt-12">
              <Link to="/">
                <div className="">
                  <button className="py-2 px-4 mb-12 bg-orange-300 text-white text-lg font-bold rounded-md hover:bg-orange-400">
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
