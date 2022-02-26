import React from "react";

export const ItemList = ({ todo, handleDelete, handleComplete, index }) => {
  return (
    <div key={todo.id}>
      <li
        style={{ listStyle: "none", width: "100%" }}
        className="li-content m-2"
      >
        <p className={`parrafo ${todo.done && "complete"}`}>
          {index + 1}. {todo.todo}
        </p>
        <div>
          <button
            style={{
              background: "red",
              width: "90px",
              height: "30px",
              color: "white",
              fontWeight: "bold",
              border: "none",
              borderRadius: "10px",
              marginRight: "10px",
              cursor: "pointer",
            }}
            onClick={() => handleDelete(todo.id)}
          >
            Borrar
          </button>
          <button
            style={{
              background: "green",
              width: "90px",
              height: "30px",
              color: "white",
              fontWeight: "bold",
              border: "none",
              borderRadius: "10px",
              cursor: "pointer",
            }}
            onClick={() => handleComplete(todo.id)}
          >
            Realizada
          </button>
        </div>
      </li>
      <hr />
    </div>
  );
};
