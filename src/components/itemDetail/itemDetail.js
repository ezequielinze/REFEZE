import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import foto1 from '../../assets/remera_negra.png';

const itemDetail = ({ producto }) => {
    return (
        <div>
            <h1>detalles:</h1>
            <Card className='conteiner row col-12'>
                <Card.Img className='Col sm={4}' variant="top" src={foto1} style={{ width: '30rem' }} />
                <Card.Body className='Col sm={8}'>
                    <Card.Title><h4>{producto.nombre}</h4></Card.Title>
                    <Card.Text>
                        <p>Detalles: Remeron en jersey de algodon, con estampa #ENSIMISMA.
                            en plastisol transparente. Toda la onda este remeron. Basicos siempre.
                            Vas a querer en todos los colores. 👅🤜🤛</p>
                        <p>Precio: {producto.precio}</p>
                    </Card.Text>
                    {/* <Button variant="primary">Go somewhere</Button> */}
                </Card.Body>
            </Card>
        </div>

    );
}

export default itemDetail;