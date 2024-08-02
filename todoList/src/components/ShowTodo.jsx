import { useState, useEffect } from "react";
import useTodo from "../contexts/TodoContext";
import Input from "./Input";
import "../index.css";

const ShowTodo = () => {
  const { value } = useTodo();
  const [todoList, setTodoList] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null); // Track which item is being edited
  const [editedValue, setEditedValue] = useState(""); // Value of the input field

  // Get todo list from local storage
  useEffect(() => {
    const storedTodoList = JSON.parse(localStorage.getItem("TodoList"));
    setTodoList(storedTodoList || []);
  }, [value]);

  // Change check status
  const changeCheckStatus = (id) => {
    const updatedTodoList = todoList.map((item, index) =>
      index === id ? { ...item, check: !item.check } : item
    );
    setTodoList(updatedTodoList);
    localStorage.setItem("TodoList", JSON.stringify(updatedTodoList));
  };

  // Delete todo
  const handleDelete = (id) => {
    const updatedTodoList = todoList.filter((_, index) => index !== id);
    setTodoList(updatedTodoList);
    localStorage.setItem("TodoList", JSON.stringify(updatedTodoList));
  };

  // Start editing
  const startEditing = (id, currentName) => {
    setEditingIndex(id);
    setEditedValue(currentName);
  };

  // Handle input change
  const handleInputChange = (e) => {
    setEditedValue(e.target.value);
  };

  // Submit edited value
  const handleUpdate = () => {
    const updatedTodoList = todoList.map((item, index) =>
      index === editingIndex ? { ...item, name: editedValue } : item
    );
    setTodoList(updatedTodoList);
    localStorage.setItem("TodoList", JSON.stringify(updatedTodoList));
    setEditingIndex(null); // Exit editing mode
  };

  return (
    <>
      <section className="displayTodo">
        <div className="heading">
          <h1>Display Todo</h1>
        </div>
        <div className="showList">
          {todoList.length > 0 ? (
            todoList.map((item, index) => (
              <div key={index} className="list">
                <div className="todoName">
                  <p>
                    {item.check ? (
                      <span style={{ textDecoration: "line-through" }}>
                        {item.name}
                      </span>
                    ) : editingIndex === index ? (
                      <Input
                        type="text"
                        name="editValue"
                        id="todo"
                        onChange={handleInputChange}
                        placeholder="Enter todo"
                        value={editedValue}
                      />
                    ) : (
                      item.name
                    )}
                  </p>
                </div>
                <div className="actions">
                  <div className="check">
                    <Input
                      type="checkbox"
                      name="checktodo"
                      id="checktodo"
                      checked={item.check}
                      onChange={() => changeCheckStatus(index)}
                    />
                  </div>
                  <div className="Buttons">
                    {editingIndex === index ? (
                      <button onClick={handleUpdate}>Submit</button>
                    ) : (
                      <>
                        <button onClick={() => startEditing(index, item.name)}>
                          Update
                        </button>
                        <button onClick={() => handleDelete(index)}>
                          Delete
                        </button>
                      </>
                    )}
                  </div>
                </div>
              </div>
            ))
          ) : (
            "Local storage is empty"
          )}
        </div>
      </section>
    </>
  );
};

export default ShowTodo;
