import { useContext} from "react"
import { CartContext } from '../../Context/CartContext'


const Cart = () => {

    const {cart} = useContext(CartContext)
    console.log(cart)
    // const { cart, cartTotal, emptyCart } = useCartContext()

    return (
        <div className="conteiner m-5">
            <h2>Tu carrito:</h2>
            {cart.map((item) => (
                
                <div key={item.id}>
                    <h3>{item.nombre}</h3>
                    <p>Precio: {item.precio}</p>
                    <p>Cantidad: {item.cantidad}</p>
                  
                    
                    <hr />
                </div>
            ))}

            <hr />
            {/* <h4>Total: ${cartTotal()}</h4>
            <button onClick={emptyCart} className="btn btn-danger">Vaciar carrito</button> */}
        </div>
    )


}

export default Cart