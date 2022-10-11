import { useContext, useState } from "react"
import { Navigate } from "react-router-dom"
import { CartContext } from '../Context/CartContext'
import { addDoc, collection } from 'firebase/firestore'
import { db } from "../firebase/configuracion"

const Checkout = () => {

    const { cart, cartTotal, terminarCompra } = useContext(CartContext)

    const [orderId, setOrderId] = useState(null)

    // lo usamos cuando tenemos un fomrulario corto
    // const [nombre, setNombre] = useState('')

    // cargamos nombre del input
    // const agregarNombre = (e) => {
    //     setNombre(e.target.value)
    // }


    // cuando el formulario es amplio
    const [values, setValues] = useState({
        apellido: '',
        nombre: '',
        email: '',
        direccion: ''
    })

    // agegamos los values
    const agregamosValues = (e) => {

        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    // cortamos el reinicio de pagina
    const manejoSubmit = (e) => {
        e.preventDefault()

        const orden = {
            Comprador: values,
            items: cart,
            total:cartTotal()
        }

        if (values.apellido.length < 2) {
            alert('apellido incorrecto')
            return
        }
        if (values.nombre.length < 2) {
            alert('nombre incorrecto')
            return
        }
        if (values.email.length < 2) {
            alert('email incorrecto')
            return
        }
        if (values.direccion.length < 2) {
            alert('direccion incorrecto')
            return
        }

        // console.log(orden)
        // enviar doc a firebase
        // agrego la ubicacion del doc en firebase
        const ordenes = collection(db, 'ordenes')
        // envio la orden a la base de firebase ordenes
        addDoc(ordenes, orden)
        .then((doc) => {
            setOrderId(doc.id)
            terminarCompra()
        })
    }

    if(orderId){
        return (
            <div className="container my-5">
                <h2>Compra exitosa!</h2>
                <hr/>
                <p>Tu numero de orden es: <strong>{orderId}</strong></p>
            </div>
        )
    }

    if(cart.length === 0){
        return <Navigate to="/"/>
    }

    return (
        <div className="container my-5">
            <h2>Checkout</h2>

            <hr />

            <form onSubmit={manejoSubmit}>
                <input
                    name='apellido' //name: sabemos en donde escribe
                    value={values.apellido}
                    onChange={agregamosValues}
                    type={'text'}
                    className='my-3 form-control'
                    placeholder="Apellido"
                />
                <input
                    name='nombre'
                    value={values.nombre}
                    onChange={agregamosValues}
                    type={'text'}
                    className='my-3 form-control'
                    placeholder="Nombre"
                />
                <input
                    name='email'
                    value={values.email}
                    onChange={agregamosValues}
                    type={'email'}
                    className='my-3 form-control'
                    placeholder="Email"
                />
                <input
                    name='direccion'
                    value={values.direccion}
                    onChange={agregamosValues}
                    type={'text'}
                    className='my-3 form-control'
                    placeholder="Direccion"
                />

                <button type="submit" className="btn btn-primary">Enviar</button>

            </form>

        </div>

    )

}

export default Checkout