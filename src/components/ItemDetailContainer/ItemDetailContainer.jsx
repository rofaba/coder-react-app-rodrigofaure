import { useEffect, useState, useContext } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { cartContext } from "../../Context/CartContext";
import { db } from "../../Firebase/firestore-config.js";
import { getDoc, doc, collection } from "firebase/firestore";

const ItemDetailContainer = () => {
  const { addItem } = useContext(cartContext);

  const onAdd = (producto, contador) => {
    const itemToAdd = {
      id: producto.id,
      name: producto.title,
      brand: producto.brand,
      thumbnail: producto.thumbnail,
      price: producto.price,
      qty: contador,
    };

    addItem(itemToAdd, contador);
  };

  const indice = 1;
  const [item, setItem] = useState([]);
  const [loading, setLoading] = useState(true);

  const { productId } = useParams();

  useEffect(() => {
    const productCollectionRef = collection(db, "productos");
    const refDoc = doc(productCollectionRef, productId);
    getDoc(refDoc)
      .then((rest) => {
        //producto no encontrado
        if (rest.data() === undefined) {
          console.log("Producto no encontrado");
          setItem({ id: null })
          
        } else {
          const item = {
            ...rest.data(),
            id: rest.id,
          };
          setItem(item);
        }
      })
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, [productId]);

  return (
    <div className="my-8">
      {loading ? (
        <div >
         
          <p className="grid text-orange-400 animate-bounce text-2xl justify-center">
            {" "}
            - - obteniendo detalles del producto - -{" "}
          </p>
          
        </div>
      ) : (
        <div>
          <ItemDetail
            producto={item}
            onAdd={onAdd}
            indice={indice}
          />
        </div>
      )}
    </div>
  );
};
export default ItemDetailContainer;
