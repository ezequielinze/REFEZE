import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import foto1 from '../../assets/remera_negra.png';
import Contador from '../contador/contador';
import { useState } from "react"

const itemDetail = ({ item }) => {

    const saludo = () => {
        alert('detalle de compra: -' + item.nombre + ' cantidad: ' + llamado + ' precio: $' + item.precio + ' total: $' + mult)
       
    }

    // simpre importar useState
    const [llamado, setLlamado] = useState(0)

    const precio = item.precio
    console.log(precio)

    const mult = llamado * precio;



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
            <Contador max={item.stock} iniciador={llamado} setiniciador={setLlamado} />

            <button className='btn btn-primary' onClick={saludo}>comprar</button>

        </div>

    );
}

export default itemDetail;