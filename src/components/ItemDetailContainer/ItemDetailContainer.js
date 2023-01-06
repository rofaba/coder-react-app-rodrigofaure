import { useEffect, useState, useContext } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import axios from 'axios';
import { Link, useParams } from "react-router-dom";
import { cartContext } from '../../Context/CartContext' 

//Item --------------------------------

const ItemDetailContainer = (props) => {
 
  const { addItem } = useContext(cartContext)
  
 
// contador -------------------------------------
const onAdd = (producto, contador) => {

      const itemToAdd= {
        id: producto.id,
        name: producto.title,
        brand: producto.brand,
        thumbnail: producto.thumbnail,
        price: producto.price,
        qty: contador,
  }
  
  addItem(itemToAdd, contador)

  }



  const stock = 5;
  const indice = 1;
  const [item, setItem] = useState({});
  const [loading, setLoading] = useState(true);

  let {id} = useParams()

useEffect(() => {
    axios
    .get(`https://dummyjson.com/products/${id}`)
   
    .then((res) => setItem(res.data), Error)
  
    .finally(()=> setLoading(false))
      
  }, []);

  return (
    <>
      {loading ? (
        <div className="h-96">
          <br></br>
          <p className="text-orange-400 animate-bounce text-2xl items-center flex justify-center">
            {" "}
            - - obteniendo detalles del producto - -{" "}
          </p>
          <br></br>
        </div>
      ) : (
        <div>
          <ItemDetail producto={item} stock={stock} onAdd={onAdd} indice={indice}  />
        </div>
      )}
      <Link to='/'>
      <div className="flex justify-center mb-4">
          <button className="text-center text-xl bg-zinc-200 p-4 mt-4 rounded-xl hover:text-xl hover:bg-slate-300  " > Seguir comprando </button>
      </div>
    </Link>
    </>
  );
};
export default ItemDetailContainer;
