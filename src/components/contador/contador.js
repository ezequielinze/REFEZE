// llamamos a la funcion de eventos
import { useState } from "react"
import './contador.scss'

const Contador = ({ max, iniciador, setiniciador, Agregar }) => {




    // [contador, evento] = iniciador de contador
    // const [iniciador, setiniciador] = useState(0)
    const nro = max;


    // funcion suma
    const Sumar = () => {


        // evento le decimos que hacer
        if (iniciador < nro) {
            setiniciador(iniciador + 1)

        }
    }
    // funcion resta
    const Restar = () => {
        // condicionamos que no baje de 0
        if (iniciador > 0) {
            setiniciador(iniciador - 1)
        }
    }

    return (
        <div className="contbtn">
            <div>


                <button className="btn btn-primary" onClick={Restar}> - </button>
                <span className="btn">{iniciador}</span>
                <button className="btn btn-primary" onClick={Sumar}> + </button>
                {/* disabled anulamos el boton pero queda a la vista */}
                <button disabled={iniciador === 0} className='btn btn-primary mx-3' onClick={Agregar}>comprar</button>
            </div>


            {/* <p>Último click: {new Date().toLocaleString()}</p>
            <hr />  */}

        </div>
    )
}

export default Contador