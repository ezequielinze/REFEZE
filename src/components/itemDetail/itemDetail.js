import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import foto1 from '../../assets/remera_negra.png';
import Contador from '../contador/contador';
import { useContext, useState } from "react"
import { Link } from 'react-router-dom'
import Cart from '../cart/cart';
import { CartContext } from '../../Context/CartContext';

const itemDetail = ({ item }) => {

    //setCart cambiamos a addToCarr
    const { cart, addToCart, isInCart } = useContext(CartContext)
    // console.log(isInCart)

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
    // console.log(cart, isInCart(item.id))



    return (
        <div className='conteiner m-5'>
            <h1>detalle:</h1>
            <img src={item.img}></img>
            <h4>{item.nombre}</h4>
            <p>Precio: {item.precio}</p>
            <hr />
            {isInCart(item.id)
                ? <Link to="/Cart" className='btn btn-primary'>Terminar tu compra</Link>
                : <Contador max={item.stock} iniciador={llamado} setiniciador={setLlamado} Agregar={Agregar} />
            }





        </div>

    );
}

export default itemDetail;