import AgeLabel from "./AgeLabel"

function Saludo ({name , age}) {
    return( 
    <>
    <h3> Saludos {name}!</h3>
    <AgeLabel age={age}></AgeLabel>
    </>
    )

    
    
}

export default Saludo