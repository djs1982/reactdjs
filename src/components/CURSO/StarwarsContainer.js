import { useEffect, useState } from "react"

const StarwarsContainer = () => {
    const [persona,setStarwars] = useState([])

    useEffect(() => getPeople(),[])
    
    const getPeople = () => {
        const URL = 'https://swapi.dev/api/people/1/' 
        fetch (URL) 
            .then( res => res.json())
            .then (data => {console.log(data)})
    
    }


  return (
    <div>StarwarsContainer</div>
  )
}
export default StarwarsContainer