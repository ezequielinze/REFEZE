import { createContext, useContext, useEffect, useState } from "react";


export const CartContext = createContext()

// const CartProvider = ({ children }) => {

//     const [cart, setCart] = useState(init)


//     const addToCart = (item) => {
    
//      // const newCart = cart.slice() //copia array
        // newCart.push(itemToCart) //agrega objeto
        // setCart(newCart) //envia a cart nuevo array

        // de otra manera
//         setCart([...cart, item]) //... copia el array
//     }

//     const isInCart = (id) => {
//         return cart.some((item) => item.id === id)
//     }

//     const cartQuantity = () => {
//         return cart.reduce((acc, item) => acc + item.cantidad, 0)
//     }

//     const cartTotal = () => {
//         return cart.reduce((acc, item) => acc + item.cantidad * item.precio, 0)
//     }

//     const emptyCart = () => {
//         setCart([])

//     }

//     return (
//         <CartContext.Provider value={{
//             cart,
//             addToCart,
//             isInCart,
//             cartQuantity,
//             cartTotal,
//             emptyCart
//         }}>
//             {children}
//         </CartContext.Provider>
//     )

// }

// export default CartProvider