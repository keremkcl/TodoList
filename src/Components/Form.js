import React from "react";

const Form = ({ inputText, setInputText, todos, setTodos, setComp }) => {
  const inputTextHandler = (e) => {
    console.log(e.target.value);
    setInputText(e.target.value);
  };

  const submitTodoHandler = (e) => {
    e.preventDefault();
    const newinputtext = {
      inputText: inputText,
      is0k: false,
      completed: false,
      id: Math.random() * 1000,
    };
    const isTodos = todos.find((item) => item.inputText === inputText);
    if (!isTodos && inputText !== "") {
      setTodos([...todos, newinputtext]);
      setInputText("");
    } else {
      alert("Böyle bir todo var veya todo girişi yapmıyorsunuz.");
    }
  };

  const compHandler = (e) => {
    setComp(e.target.value);
  };

  return (
    <form>
      <input
        value={inputText}
        onChange={inputTextHandler}
        type="text"
        className="todo-input"
      />
      <button onClick={submitTodoHandler} className="todo-button" type="submit">
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select onChange={compHandler} name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
  );
};

export default Form;
