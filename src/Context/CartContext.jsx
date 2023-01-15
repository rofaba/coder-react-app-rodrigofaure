import { useState, createContext, useEffect } from "react";
export const cartContext = createContext();
const { Provider } = cartContext;

const CustomProvider = ({ children }) => {
  //cart states & functions
  const [cartproducts, setCartproducts] = useState([]);
  const [totalpagar, setTotalpagar] = useState(0);
  const [qtycartproducts, setQtycartproducts] = useState(0);

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

  //fxs
  const isInCart = (id) => {
    return cartproducts.some((item) => item.id === id);
  };

  const addItem = (item) => {
    if (isInCart(item.id)) {
      let cartInProgress = [...cartproducts];
      let presentItem = cartInProgress.find((elem) => elem.id === item.id);
      presentItem.qty += item.qty;
      setCartproducts(cartInProgress);
    } else {
      setCartproducts([...cartproducts, item]);
    }
  };

  const removeItem = (id) => {
    setCartproducts(cartproducts.filter((del) => del.id !== id));
  };

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
