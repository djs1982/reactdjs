const BoxForChildren = ({children}) => {
const styles={ border: 'red 3px solid' , padding:'30px', margin:'20px'}
    return (
    <div style={styles}>
        <h3>
            VAMOS CHILDREN!!!
        </h3>
    {children}
    </div>
    )
}
export default BoxForChildren
