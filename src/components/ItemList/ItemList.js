import Item from "../Item/Item";

const ItemList = ( { lista } ) => {
  
  return (
    <div className="grid grid-rows-2 grid-flow-col gap-12 py-6 px-16 justify-center">
      
      {/* acá falta verificar que la props productos contenga elementos */}
      
      {lista.map((product,index) => (
        <Item
          key={index}
          id={product.id}
          name={product.title}
          price={product.price}
          pictureURL={product.images[0]}
          stock={product.stock}
        />
      ))}
    </div>
  );
};

export default ItemList;
