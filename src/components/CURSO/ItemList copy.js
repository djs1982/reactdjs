import { useEffect } from "react"

const products = [
    {id: 1, name: 'juguete-auto', precio:'200'},
    {id: 2, name: 'juguete-muñeco', precio:'400'},
    {id: 3, name: 'juguete-mesa', precio:'600'}
]


const ItemList = () =>{
    useEffect(()=>{GetProducts()},[])

    const GetProducts = () => {
        const productsPromise = new Promise ((resolve, reject)=> {
            const rand = Math.random()
            console.log(rand);
            if(rand >.5){
                resolve('success')
            }
            reject('error')
            

        }) 

        productsPromise
        .then( res => {console.log('res:' + res)})
        .catch(err => {console.log('err: ' + err)})
    console.log('trayendo productos')
}

    return <div>ItemList</div>

}

export default ItemList
