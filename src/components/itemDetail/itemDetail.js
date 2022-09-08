import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import foto1 from '../../assets/remera_negra.png';
import Contador from '../contador/contador';

const itemDetail = ({ producto }) => {
    
    

    return (
        <div className='conteiner m-5'>
            <h1>detalle:</h1>
            <img src={foto1}></img>
            <h4>{producto.nombre}</h4>
            <p>Detalles: Remeron en jersey de algodon, con estampa #ENSIMISMA.
                en plastisol transparente. Toda la onda este remeron. Basicos siempre.
                Vas a querer en todos los colores. 👅🤜🤛
            </p>
            <p>Precio: {producto.precio}</p>
            <Contador producto={producto.stock} key={producto.id}/>
            <button className='btn btn-primary'>comprar</button>
            
        </div>

    );
}

export default itemDetail;