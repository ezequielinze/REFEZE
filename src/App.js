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

  //funciones para cargar carrito
  const addToCart = (item) => {
    // const newCart = cart.slice()
    // newCart.push(itemToCart)
    //setCart(newCart) o 
    setCart([...cart, item])
  }

  //funciones para total
  const cartTotal = () => {
    return cart.reduce((acc, item) => acc + item.cantidad * item.precio, 0)
  }

  //funciones boton borrar carrito
  const emptyCart = () => {
    setCart([])
  }

  //funcion que devuelve true o false de un array
  const isInCart = (id) => {
    return cart.some((item) => item.id === id)
  }

  return (
    <div className="App">
      {/* context.provider enviamos a todos los nodos las funciones que agregemos */}
      <CartContext.Provider value={{
        cart,
        addToCart,
        cartTotal,
        emptyCart,
        isInCart
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