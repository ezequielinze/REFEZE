import { useEffect, useState } from "react"
import pedirDatos from "../../helpers/pedirDato"
import Prueva from "../../pruevas"
import Contador from "../contador/contador"
import ItemDetailConteiner from "../itemDetailConteiner/itemDetailConteiner"
import ItemList from "../itemList/itemList"
import { useParams } from 'react-router-dom'


const ItemListContainer = () => {

    const [productos, setProductos] = useState([])
    const { categoryId } = useParams()
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(true)
        pedirDatos()
            .then((res) => {
                if (!categoryId) {
                    setProductos(res)
                } else {
                    setProductos(res.filter((prod) => prod.categ === categoryId))
                }
            })
            .catch((error) => {
                console.log(error)
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
                    : <ItemList productos={productos}/>
            }

            {/* <ItemDetailConteiner productos={productos}/> */}
            
        </div>
    )
}

export default ItemListContainer