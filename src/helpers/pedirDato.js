import stock from "../data/data"

const pedirDatos = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(stock)
            // console.log(stock)
        }, 1000)
    })
}

export default pedirDatos