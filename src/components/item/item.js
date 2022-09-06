import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import foto1 from '../../assets/remera_blanca.png'
import Contador from '../contador/contador';

function BasicExample({ producto }) {
    
    return (
        <Card className='m-5' style={{ width: '18rem' }}>
            <Card.Img variant="top" src={foto1} />
            <Card.Body>
                <Card.Title><h4>{producto.nombre}</h4></Card.Title>
                <Card.Text>
                    <p>Precio: {producto.precio}</p>
                    <small>Stock disponible: {producto.stock}</small>
                </Card.Text>
                <Contador producto={producto.stock} key={producto.id}/>
                <Button className='my-2' variant="primary">comprar</Button>
            </Card.Body>
        </Card>
    );
}

export default BasicExample;






// import foto1 from '../../assets/remera_blanca.png'
// import '../item/item.scss'

// const Item = ({ producto }) => {

//     return (
//         <div className='card'>
//             <section>
//                 <img className='foto' src={foto1} />
//                 <h4 className='nombre'>{producto.nombre}</h4>
//                 <p className='precio'>Precio: {producto.precio}</p>
//                 <small className='stock'>Stock disponible: {producto.stock}</small>

//             </section>

//         </div>
//     )
// }

// export default Item