// llamamos a la funcion de eventos
import { useState } from "react"
import './contador.scss'

const Contador = ({ producto }) => {
    
    
    

    // [contador, evento] = iniciador de contador
    const [iniciador, setiniciador] = useState(0)
const nro = producto;
console.log(nro)

    // funcion suma
    const Sumar = () => {
        

        // evento le decimos que hacer
        if (iniciador <  {nro} ) {
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
                <span className="btn">{nro}</span>
                <button className="btn btn-primary" onClick={Sumar}> + </button>
            </div>


            {/* <p>Último click: {new Date().toLocaleString()}</p>
            <hr />  */}

        </div>
    )
}

export default Contador