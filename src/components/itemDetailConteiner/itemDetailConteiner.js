import { useEffect, useState } from "react"
import { useParams } from 'react-router-dom'
import pedirDatos from "../../helpers/pedirDato"
import ItemDetail from "../itemDetail/itemDetail"
import { doc, getDoc } from "firebase/firestore"
import { db } from "../../firebase/configuracion"


const ItemDetailConteiner = ({ productos = [] }) => {

    const [item, setItem] = useState(null)
    const { itemId } = useParams()
    const [loading, setLoading] = useState(true)
    
    useEffect(() => {
        setLoading(true)

        const itemRef = doc(db, 'productos', itemId)
        
        getDoc(itemRef)
        .then((doc) => {
            setItem({id: doc.id, ...doc.data()})
        })
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