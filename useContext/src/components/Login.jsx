import { useState, useContext } from "react";
// import UserContext, { UseProvider } from "../Contexts/UserContext";
import UseProvider from "../Contexts/UserContext";
const Login = () => {
//   const [username, setUserName] = useState("");
//   const [password, setPassword] = useState("");
//   const { setUser } = useContext(UserContext);

  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
const{setUsername,setPassword} = UseProvider()
  const handleForm = (e) => {
    setUsername(user);
    setPassword(pass)
  };
  return (
    <>
      <input
        type="text"
        name="username"
        id="username"
        onChange={(e) => setUser(e.target.value)}
      />
      <input
        type="password"
        name="password"
        id="password"
        onChange={(e) => setPass(e.target.value)}
      />
      <button onClick={handleForm}>Login</button>
    </>
  );
};
export default Login;
