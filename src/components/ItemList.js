import { useEffect, useState } from "react"
import ItemCard from "./ItemCard"


const products = [
    {id: 1, name: 'juguete-auto', precio:'200'},
    {id: 2, name: 'juguete-muñeco', precio:'400'},
    {id: 3, name: 'juguete-mesa', precio:'600'}
]


const ItemList = () =>{
    const [items, setItems] = useState( [] )

    useEffect(()=>{
        GetProducts()
        .then( response => {setItems (response)})
        .catch(err => {console.log("error" + err);})
    },[])


    const GetProducts = () => {
        return new Promise ((resolve)=> {
            setTimeout(()=>{resolve( products )},2000)    
            
            })
}

    return <div>
            <h1> Detalle de Juguetes </h1>
            {items.map(item => <ItemCard key={item.id} {...item}/>)}
            </div>
}


export default ItemList
