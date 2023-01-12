import { useEffect, useState, useContext } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { cartContext } from "../../Context/CartContext";
import { db } from "../../Firebase/firestore-config.js";
import { getDoc, doc, collection, getDocs} from "firebase/firestore";

//Item --------------------------------

const ItemDetailContainer = () => {

  const { addItem } = useContext(cartContext);
  
  //add cart

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

  const stock = 5;
  const indice = 1;
  const [item, setItem] = useState([]);
  const [loading, setLoading] = useState(true);

  const {productId} = useParams();
  console.log(productId)

useEffect(()=>{  

        const productCollectionRef = collection(db, "productos")
        const refDoc = doc(productCollectionRef, productId)      
        getDoc(refDoc)
        .then(rest => {
            const item = {
                id: rest.id,
                ...rest.data(),
            }
            setItem(item)           
        })
        .catch(err=> console.log(err)) 
        .finally(()=>setLoading(false))

    },[productId])

return (
    <>
      {loading ? (
        <div>
          <br></br>
          <p className="text-orange-400 animate-bounce text-2xl items-center flex justify-center">
            {" "}
            - - obteniendo detalles del producto - -{" "}
          </p>
          <br></br>
        </div>
      ) : (
        <div>
          <ItemDetail
            producto={item}
            stock={stock}
            onAdd={onAdd}
            indice={indice}
          />
        </div>
      )}
    </>
  );
};
export default ItemDetailContainer;
