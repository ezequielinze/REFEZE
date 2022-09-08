import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import foto1 from '../../assets/remera_negra.png';
import Contador from '../contador/contador';


const itemDetail = ({ item }) => {
    
    

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
            <Contador producto={item.stock} key={item.id}/>
            <button className='btn btn-primary'>comprar</button>
            
        </div>

    );
}

export default itemDetail;