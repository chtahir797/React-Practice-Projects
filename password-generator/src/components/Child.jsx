
const Child = (props) =>{
    return(
        <>
            <h3>Child Component inside Parent</h3>
            <h2>{props.data}</h2>
            <p>{props.children}</p>
            <button onClick={props.passEvent}>Show me</button>
        </>
    )
}
export default Child