import React from 'react';
import data from './data.json';
import { Link } from "react-router-dom";

const Categories = () => {
   

  return (
    <>
    <h1 className="text-center text-4xl p-8" > CATEGORIAS </h1>
    

    <div className="flex justify-around gap-4">
     
      {data.map(category => (
       
        <div className="border-2 border-solid border-black p-3 bg-slate-100 w-80" key={category.id}>
          
          <Link to={`/category/${category.id}`}>
          <h2 className="text-center text-xl font-bold p-4">{category.name}</h2>
          </Link>
          
          <img className="w-72 border-2 border-solid border-black " src={category.image} alt={category.name} />
        </div>
      ))}
    </div>
        <br></br>
        <Link to={"/"}>
        <h2 className="text-center text-xl bg-zinc-200" >Volver a HOME</h2>
        </Link>
    
    </>
  );
};

export default Categories;