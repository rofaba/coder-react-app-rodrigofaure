import { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { db } from "../../Firebase/firestore-config.js";
import { getDocs, collection, query, where } from "firebase/firestore";
import categoriesdata from "../../assets/categoriesdata.json";

const ItemListContainer = (props) => {
  const productsCollectionRef = collection(db, "productos");
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);

  let { categoryName } = useParams();

  const isInCat = (catname) => {
    return categoriesdata.some((item) => item.name === catname);
  };

  useEffect(() => {
    let validateCategory = isInCat(categoryName);

    let q =
      categoryName && validateCategory
        ? query(productsCollectionRef, where("category", "==", categoryName))
        : query(productsCollectionRef, where("rating", ">", 4.8));

    getDocs(q)
      .then((rest) => {
        const toShow = rest.docs.map((doc) => {
          return {
            ...doc.data(),
            id: doc.id,
          };
        });

        setProductos(toShow);
      })

      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, [categoryName]);

  return (
    <div className="bg-slate-200 h-auto items-center ">
      <h1 className="text-3xl text-center py-6 font-semibold text-slate-600">
        {" "}
        {props.gretting}{" "}
      </h1>

      {loading ? (
        <>
          <p className="grid text-orange-400 py-20 animate-bounce text-2xl justify-center">
            {" "}
            - - Obteniendo Productos - -{" "}
          </p>
        </>
      ) : (
        <div className="grid items-center justify-center">
          <ItemList lista={productos} />
        </div>
      )}
    </div>
  );
};
export default ItemListContainer;
