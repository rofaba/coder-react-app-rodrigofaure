import { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList.js";
import axios from 'axios'; 
import { useParams } from "react-router-dom";

import { db } from "../../Firebase/firestore-config.js";
import { getDocs, doc, getDoc,  collection, query, where } from "firebase/firestore";


const ItemListContainer = (props) => {

  const productsCollectionRef = collection(db, "productos");

  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  let {categoryId} = useParams();

  let callAPI = 'https://dummyjson.com/products?limit=10';

  if (categoryId) {
     callAPI = `https://dummyjson.com/products/category/${categoryId}?limit=10`;
  };


//USEEFFECT CON FIRESTORE

const getProducts = async () => {
    const data = await getDocs(productsCollectionRef);
    const productos = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
    console.log(productos)
  }

useEffect(() => {
  

  getProducts();

  //CONSEGUIMOS LOS PRODUCTOS PARA PODER USARLOS

  //----------------------------------

  // const q = categoryId ? query(collection(db, "productos"), where("element.category", "==", categoryId)) : query(collection(db, "productos"), where("element.rating", ">", 4.6))
  // getDocs(q)
  // .then(rest =>{
  //     const list = rest.docs.map(doc =>{
  //         console.log(list)
  //         .catch(err=> console.log(err)) 
  //     });
  //   })

  axios
  .get(`${callAPI}`)
  
  .then((res) => setProductos(res.data.products), Error)
    .catch((error) => console.log(error))
    .finally(()=> setLoading(false))
    }, [categoryId])

  // contador ------------------

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
}
export default ItemListContainer;