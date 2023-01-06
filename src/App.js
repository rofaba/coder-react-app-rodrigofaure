import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import Cart from "./components/Cart/Cart";
import Nosotros from "./pages/Nosotros/Nosotros";
import Contact from "./pages/Contact/Contact";
import Categories from "./pages/Categories/Categories";
import CustomProvider from "./Context/CartContext";

import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";


function App() {
  return (
    <CustomProvider>
    <div>
      
        <NavBar />

        <Routes>
          <Route
            path="/"
            element={<ItemListContainer gretting="CATALOGO DE PRODUCTOS" />}
          />
          <Route path="/cart" element={<Cart />} />
          <Route path="/:id" element={<ItemDetailContainer />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          <Route path="/nosotros" element={<Nosotros />} />
          
          <Route path="/contacto" element={<Contact />} />
          <Route path="/category" element={<Categories />} />
          <Route
            path="/category/:categoryId"
            element={<ItemListContainer gretting="CATALOGO DE PRODUCTOS" />}
          />
          <Route
            path="/category/:categoryId/item/:id"
            element={<ItemListContainer />}
          />
        </Routes>
        <Footer />
      
    </div>

    </CustomProvider>
  );
}

export default App;
