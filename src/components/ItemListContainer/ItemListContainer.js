import { useEffect, useState } from "react"
import pedirDatos from "../../helpers/pedirDato"
import Prueva from "../../pruevas"
import Contador from "../contador/contador"
import ItemDetailConteiner from "../itemDetailConteiner/itemDetailConteiner"
import ItemList from "../itemList/itemList"
import { useParams } from 'react-router-dom'
import { collection, getDocs, query, where } from "firebase/firestore"
import { db } from "../../firebase/configuracion"


const ItemListContainer = () => {

    const [productos, setProductos] = useState([])
    const { categoryId } = useParams()
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(true)

        const productosRef = collection(db, 'productos')
        const q = categoryId
            ? query(productosRef, where('categoria', '==', categoryId))
            : productosRef
            
        getDocs(q)
            .then((resp) => {
                const productosDB = resp.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
                // console.log(productosDB)

                setProductos(productosDB)
            })
            .finally(() => {
                setLoading(false)
            })


    }, [categoryId])


    return (
        <div>
            {
                loading
                    ? <h2>Cargando...</h2>
                    : <ItemList productos={productos} />
            }

            {/* <ItemDetailConteiner productos={productos}/> */}

        </div>
    )
}

export default ItemListContainer