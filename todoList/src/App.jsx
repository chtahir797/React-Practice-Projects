import "./App.css";
import AddTodo from "./components/AddTodo";
import { TodoProvider } from "./contexts/TodoContext";
import ShowTodo from "./components/ShowTodo";
import { useState } from "react";
function App() {
  const [value, setValue] = useState('')
  
  return (
    <>
      <TodoProvider value={{value,setValue}}>
        <AddTodo />
        <ShowTodo />
      </TodoProvider>
    </>
  );
}

export default App;
