import { useState } from "react"
import { useEffect } from "react"
import { useParams } from "react-router-dom"
import ItemList from "./ItemList"

const ItemDetailContainer = () => {
  const {id: Itemid} = useParams()
const[item,SetItem] = useState({})

  useEffect(() => {
    getItemDetails().then(response => {SetItem(response)})
  },[])

  const getItemDetails =() =>{
    return new Promise((resolve, reject) => {
     resolve (ItemList.find(p => p.id == Itemid))  
    });
  }
  
    return (

    <div>{item.name}</div>
  )
}
export default ItemDetailContainer