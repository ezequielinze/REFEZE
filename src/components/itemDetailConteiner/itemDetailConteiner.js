import { useEffect, useState } from "react"
import { useParams } from 'react-router-dom'
import pedirDatos from "../../helpers/pedirDato"
import ItemDetail from "../itemDetail/itemDetail"


const ItemDetailConteiner = ({ productos = [] }) => {

    const [item, setItem] = useState(null)
    const { itemId } = useParams()
    const [loading, setLoading] = useState(true)
    
    useEffect(() => {
        setLoading(true)

        pedirDatos()
            .then((res) => {
                setItem(res.find((prod) => prod.id === Number(itemId)))
            })
            .catch(err => console.log(err))
            .finally(() => {
                setLoading(false)
            })
        

    }, [])

    return (
        <div>
            {
                loading
                ? <h2>Loading...</h2>
                : <ItemDetail item={item} />
            }
        </div>
    )

}

export default ItemDetailConteiner