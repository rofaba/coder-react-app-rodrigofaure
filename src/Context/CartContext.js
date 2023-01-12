import React, { useState, createContext, useEffect } from "react";

export const cartContext = createContext();
const { Provider } = cartContext;

const CustomProvider = ({ children }) => {
  const [cartproducts, setCartproducts] = useState([]);
  const [totalpagar, setTotalpagar] = useState(0);
  const [qtycartproducts, setQtycartproducts] = useState(0);

  // manejo de cantidades dependientes de cartproducts
  const aPagar = () => {
    let subtotal = 0;
    cartproducts.forEach((element) => {
      subtotal = element.qty * element.price + subtotal;
    });
    setTotalpagar(subtotal);
  };

  const qtyTotal = () => {
    let qty = 0;
    cartproducts.forEach((element) => {
      qty = element.qty + qty;
    });
    setQtycartproducts(qty);
  };

  useEffect(() => {
    aPagar();
    qtyTotal();
  }, [cartproducts]);

  // funciones especìficas carrito

  const isInCart = (id) => {
    return cartproducts.some((item) => item.id === id);
  };

  const addItem = (item) => {
    if (isInCart(item.id)) {
      console.log("producto en carro");
      let cartInProgress = [...cartproducts];
      let presentItem = cartInProgress.find((elem) => elem.id === item.id);
      presentItem.qty += item.qty;
      setCartproducts(cartInProgress);
    } else {
      setCartproducts([...cartproducts, item]);
    }
  };

  //eliminar item por Id
  const removeItem = (id) => {
    setCartproducts(cartproducts.filter((del) => del.id !== id));
  };

  //Limpiar Carrito
  const clearCart = () => {
    setCartproducts([]);
  };

  return (
    <Provider
      value={{
        cartproducts,
        clearCart,
        isInCart,
        addItem,
        removeItem,
        totalpagar,
        qtycartproducts,
      }}
    >
      {children}
    </Provider>
  );
};

export default CustomProvider;
