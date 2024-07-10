# We can simply send data from parent to child using props.
1. First Call the child component in parent component
2. Then simply send data to child component using 
        <Child data={sendData}/>
        ** sendData is variable
        We can also pass event to our child component. see the code to clarify
3. Simply go to child component and accepts props
4. After that simply render it using props.data because props are object



Parent Component
import Child from "./Child"
const sendData = "Tahir"
const Parent = () =>{
    return(
        <>
            <h1>Parent Component</h1>
            <Child data={sendData}/>
        </>
    )
}
export default Parent


Child Component 
const Child = (props) =>{
    return(
        <>
            <h1>Child Component</h1>
            <h2>{props.data}</h2>
        </>
    )
}
export default Child