import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";

import NoMatch from "./components/NoMatch/NoMatch";

import Cart from "./components/Cart/Cart";
import Nosotros from "./pages/Nosotros/Nosotros";
import Contact from "./pages/Contact/Contact";

import CustomProvider from "./Context/CartContext";

import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Checkout from "./components/Checkout/Checkout";

function App() {
  return (
    <CustomProvider>
      <div>
        <NavBar />

        <Routes>
          <Route
            path="/"
            element={<ItemListContainer gretting="Catálogo de Productos" />}
          />
          <Route path="/cart" element={<Cart />} />
          <Route path="/item/:productId" element={<ItemDetailContainer />} />

          <Route path="/nosotros" element={<Nosotros />} />

          <Route path="/contacto" element={<Contact />} />

          <Route
            path="/category/:categoryName"
            element={<ItemListContainer gretting="Catálogo de Productos" />}
          />
         
          <Route path="/checkout" element={<Checkout />} />

          <Route path="*" element={<NoMatch />} />
          <Route path="/category/*" element={<NoMatch />} />

        </Routes>
        <Footer />
      </div>
    </CustomProvider>
  );
}

export default App;
