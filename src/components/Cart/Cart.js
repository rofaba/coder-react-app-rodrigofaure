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
        <h2 className="text-center p-6 text-orange-400 font-bold">
          {" "}
          El carrito de compras no tiene productos
        </h2>
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
            <tr className="grid-col-3 items-center ">
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

              <td className="px-16 text-slate-600 font-semibold  flex justify-center">
                {product.qty}
              </td>
              <td className="px-16 text-slate-600 font-semibold text-end ">
                $ {product.qty * product.price}
              </td>
              <td>
                {" "}
                <button
                  className="ml-14 p-2 text-white font-bold bg-orange-300 hover:bg-orange-400"
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
            <div className=" flex justify-end my-8 py-4 px-8 bg-slate-200 items-center text-2xl text-orange-400">
              <span className="pr-20 m-2 font-semibold">
                {" "}
                Total a pagar $ {totalpagar}{" "}
              </span>

              <Link to="/checkout">
                <button className="px-6 py-2 bg-orange-300 text-white text-lg font-bold mx-1 hover:bg-orange-400">
                  {" "}
                  Comprar{" "}
                </button>
              </Link>
            </div>
          </div>

          <br></br>

          <div>
            <div className="flex justify-around mb-4">
              <Link to="/checkout">
                <button className="p-4 bg-slate-200 mx-2 disable">
                  {" "}
                  Check Out{" "}
                </button>
              </Link>
            </div>
          </div>
        </div>
      )}
      <div className="">
        <Link to="/">
          <div className="flex justify-center mb-4">
            <button className="p-4 bg-slate-200"> Seguir comprando </button>
          </div>
        </Link>
        <button
          className="p-2 bg-orange-300 text-white text-base font-bold mx-1 hover:bg-orange-400"
          onClick={clearCart}
        ></button>
      </div>
    </div>
  );
};

export default Cart;
