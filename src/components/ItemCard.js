import { Link } from "react-router-dom"

const ItemCard = ({id,name,precio}) => {
  return (
    <Link to ={`/category/item/${id}`}>
    <div className="m-3 p-6">
    <div>{id}</div>
    <div>{name}</div>
    <div>PRECIO: {precio}</div>
    </div>
    </Link>
  
  )
}
export default ItemCard