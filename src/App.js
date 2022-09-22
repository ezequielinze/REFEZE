import Contador from "./components/contador/contador";
import Header from "./components/header/header";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import 'bootstrap/dist/css/bootstrap.min.css';
import BasicExample from "./pruevas";
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import ItemDetailConteiner from "./components/itemDetailConteiner/itemDetailConteiner";
import Cart from "./components/cart/cart";
import { CartContext } from './Context/CartContext';
import { useState } from "react";


function App() {

  const [cart, setCart] = useState([])

  const addToCart = (item) => {
    //         // const newCart = cart.slice()
    //         // newCart.push(itemToCart)
    setCart([...cart, item])
  }

  return (
    <div className="App">
      <CartContext.Provider value={{
        cart,
        addToCart
      }}>
        <BrowserRouter>
          <Header />

          <Routes>

            <Route path='/' element={<ItemListContainer />} />
            <Route path='*' element={<Navigate to="/" />} />
            <Route path='/productos/:categoryId' element={<ItemListContainer />} />
            <Route path='/item/:itemId' element={<ItemDetailConteiner />} />
            <Route path='/cart' element={<Cart />} />

          </Routes>



        </BrowserRouter>
      </CartContext.Provider>



    </div>
  );
}

export default App;