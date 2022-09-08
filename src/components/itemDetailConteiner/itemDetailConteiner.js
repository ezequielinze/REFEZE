import ItemDetail from "../itemDetail/itemDetail"


const ItemDetailConteiner = ({ productos = [] }) => {

    const Prueva = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(<ItemDetail />)

                console.log()
            }, 2000)
        })
    }
    Prueva()
    
    return (
        <div>
            {productos.map((prod) => <ItemDetail producto={prod} key={prod.id} />)}
            

        </div>
    )

}

export default ItemDetailConteiner