import { useState } from "react";
import Input from "./Input";
import useTodo from "../contexts/TodoContext";

const AddTodo = () => {
  const { value,setValue } = useTodo([])
  const [data, setData] = useState([]);
  const [input, setInput] = useState("");
  const changeInput = (e) => {
    setInput(e.target.value);
  };
  const Submit = () => {
    setData((pre) => {
        const todo = [...pre, { name: input, check: false }]
        localStorage.setItem('TodoList', JSON.stringify(todo))
        return todo
    });

    setValue((pre)=>{
        return [...pre, { name: input, check: false }]
    })
    setInput("");
  };
  return (
    <>
    <div className="addTodo">
      <Input
        type="text"
        name="todoinput"
        id="todo"
        onChange={changeInput}
        placeholder="Enter todo"
        value={input}
      />
      <button onClick={Submit} className="addValue">Add</button>
      </div>
    </>
  );
};
export default AddTodo;
