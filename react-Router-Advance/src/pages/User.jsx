import { useParams } from "react-router-dom"
const User=()=>{
    const {userId} = useParams()
    console.log(userId)
    return(
        <>
            <h1>User: {userId}</h1>
        </>
    )
}
export default User