import { useContext } from "react"
// import UserContext from "../Contexts/UserContext"
import UseProvider from "../Contexts/UserContext"
const User = () =>{
    // const { user } = useContext(UserContext)
    const {username,password} = UseProvider()
    return(
        <>
            <h1>Username is {username ? username: "Nothing found"}</h1>
            <h1>Password is {password ? password: "Nothing found"}</h1>
        </>
    )
}
export default User