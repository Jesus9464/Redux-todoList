import React, { useReducer, useState, useEffect } from "react";
import "./todoApp.css";
import { todoReducer } from "./todoReducer";
import { ItemList } from "./ItemList";

const init = () => {
  // retorno normal
  // return [
  //   {
  //     id: new Date().getTime(),
  //     todo: "aprender React",
  //     done: false,
  //   },
  // ];

  return JSON.parse(localStorage.getItem("todos")) || [];
};

const initialStateInput = { tarea: "" };

export const TodoApp = () => {
  const [todos, dispatch] = useReducer(todoReducer, [], init);
  const [values, setValues] = useState(initialStateInput);
  const { tarea } = values;

  const reset = () => setValues(initialStateInput);

  const handleSubmit = (e) => {
    e.preventDefault();
    //trim es borrar espacios
    if (tarea.trim().length <= 1) {
      return;
    }

    const newTodo = {
      id: new Date().getTime(),
      todo: tarea,
      done: false,
    };

    const action = {
      type: "add",
      payload: newTodo,
    };

    dispatch(action);
    reset();
  };

  const handleChange = ({ target }) => {
    setValues({
      ...values,
      [target.name]: target.value,
    });
  };

  const handleDelete = (todoId) => {
    const action = {
      type: "delete",
      payload: todoId,
    };
    dispatch(action);
  };

  const handleComplete = (todoId) => {
    dispatch({
      type: "complete",
      payload: todoId,
    });
  };

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <div>
      <h1>TodoApp: ({todos.length})</h1>
      <hr />
      <form onSubmit={handleSubmit}>
        <input
          className="form-control"
          type="text"
          placeholder="Tarea por hacer"
          name="tarea"
          autoComplete="off"
          value={tarea}
          onChange={handleChange}
        />
        <button
          className="btn btn-outline-primary mt-1 btn-block"
          type="submit"
        >
          Agregar
        </button>
      </form>
      <hr />
      <ul>
        {todos.map((todo, i) => {
          return (
            <ItemList
              key={i}
              index={i}
              handleComplete={handleComplete}
              todo={todo}
              handleDelete={handleDelete}
            />
          );
        })}
      </ul>
    </div>
  );
};
