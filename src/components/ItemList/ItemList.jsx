import Item from "../Item/Item";

const ItemList = ({ lista }) => {
  return (
    <div className="grid grid-cols-4 gap-12 py-6 px-16 justify-center">
      {lista.map((product) => (
        <Item
          key={product.id}
          productId={product.id}
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
