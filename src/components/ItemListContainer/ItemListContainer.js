import { useEffect, useState } from "react"
import pedirDatos from "../../helpers/pedirDato"
import Prueva from "../../pruevas"
import Contador from "../contador/contador"
import ItemDetailConteiner from "../itemDetailConteiner/itemDetailConteiner"
import ItemList from "../itemList/itemList"


const ItemListContainer = () => {
   
    const [productos, setProductos] = useState([])

    useEffect(() => {
        pedirDatos()
            .then( (res) => {
                setProductos(res)
            })
            .catch( (error) => {
                console.log(error)
            })
            .finally(() => {
                // console.log("Fin del proceso")
            })
    }, [])


    return (
        <div>
            <ItemDetailConteiner productos={productos}/>
            {/* <ItemList productos={productos}/> */}
        </div>
    )
}

export default ItemListContainer