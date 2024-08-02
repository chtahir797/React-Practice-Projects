// import React from "react";
// import { createContext } from "react";

// const UserContext = createContext()

// export default UserContext

import React from "react";
import { createContext, useContext } from "react";

export const UserContext = createContext({
    username:null,
    setUsername: ()=>{},
    password:null,
    setPassword: ()=>{}
})
//Craete Provider
export const UserProvider = UserContext.Provider
//Create custom hook
export default function UseProvider(){
    return useContext(UserContext)
}