import { useEffect } from "react"
import { useState } from "react"


const Clicker = () => {
    
    const [counter, setCounter] = useState (0)

    useEffect(()=> {console.log("Se hizo render")})

    useEffect(()=> {console.log("Se altero el counter")},[counter])


    const clickHandler =() => {
        console.log('Hiciste Click');
        setCounter(counter + 1)
    }
    
    
    
    return (
    <div>
<div className="m-5"> { counter}</div>
    <button onClick={clickHandler} className="btn m-4"> CLICK AQUI</button>
    </div>
)}

export default Clicker