import { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList.js";
import { useParams } from "react-router-dom";
import { db } from "../../Firebase/firestore-config.js";
import { getDocs, collection, query, where } from "firebase/firestore";

const ItemListContainer = (props) => {
  const productsCollectionRef = collection(db, "productos");
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);

  let { categoryName } = useParams();

  useEffect(() => {
    let q = categoryName
    ? query(productsCollectionRef, where("category", "==", categoryName)) 
    : query(productsCollectionRef, where("rating", ">", 4.91))
    
    getDocs(q)
    .then(rest =>{
        const toShow = rest.docs.map(doc =>{
            return {
                id: doc.id,
                ...doc.data(),
            }
        })
        setProductos(toShow)              
    })
    .catch(err=> console.log(err)) 
    .finally(()=>setLoading(false))
   }, [categoryName]);

  return (
    <div className="bg-slate-200 h-auto">
      <br></br>
      <h1 className="text-2xl text-center">{props.gretting}</h1>
      <br></br>

      {loading ? (
        <>
          <br></br>
          <p className="text-orange-400 animate-bounce text-2xl items-center flex justify-center">
            {" "}
            - - obteniendo productos - -{" "}
          </p>
          <br></br>
        </>
      ) : (
        <div>
          <ItemList lista={productos} />
        </div>
      )}
    </div>
  );
};
export default ItemListContainer;