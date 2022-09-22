import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import foto1 from '../../assets/remera_negra.png';
import Contador from '../contador/contador';
import { useContext, useState } from "react"
import { Link } from 'react-router-dom'
import Cart from '../cart/cart';
import { CartContext } from '../../Context/CartContext';

const itemDetail = ({ item }) => {

    const {cart, addToCart} = useContext(CartContext)
    // console.log(cart)

    // simpre importar useState
    const [llamado, setLlamado] = useState(0)

    const Agregar = () => {

        const itemToCart = {
            id: item.id,
            nombre: item.nombre,
            cantidad: llamado,
            precio: item.precio
            
        }

        addToCart(itemToCart)

        



    }



    
    return (
        <div className='conteiner m-5'>
            <h1>detalle:</h1>
            <img src={foto1}></img>
            <h4>{item.nombre}</h4>
            <p>Detalles: Remeron en jersey de algodon, con estampa #ENSIMISMA.
                en plastisol transparente. Toda la onda este remeron. Basicos siempre.
                Vas a querer en todos los colores. 👅🤜🤛
            </p>
            <p>Precio: {item.precio}</p>
            <Contador max={item.stock} iniciador={llamado} setiniciador={setLlamado} Agregar={Agregar} />

            <hr />

            <Link to="/Cart" className='btn btn-primary'>Terminar tu compra</Link>
        </div>

    );
}

export default itemDetail;