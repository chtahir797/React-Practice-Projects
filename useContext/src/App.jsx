import './App.css'
import { useState } from 'react'
import UserContextProvider from './Contexts/UserContextProvider'
import { UserProvider } from './Contexts/UserContext'
import Login from './components/Login'
import User from './components/User'

function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
    {/* <UserContextProvider> */}
    {/* get access of values from UserProvider  */}
    <UserProvider value={{username,setUsername, password, setPassword}}>
      <h1>Mr Tahir</h1>
      <Login />
      <User />
      </UserProvider>
      {/* </UserContextProvider> */}
    </>
  )
}

export default App
