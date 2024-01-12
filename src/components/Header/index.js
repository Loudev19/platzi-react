import React from "react";
import "./Header.css";
import { TodoContext } from "../TodoContext";

function Header() {
  const { nCompletedTodos: progress, nAllTodos: total } =
    React.useContext(TodoContext);
  return (
    <>
      <h1 className="header">Tasks</h1>
      <p className="counter">
        <span>{progress}</span> of <span>{total}</span> completed
      </p>
    </>
  );
}

export { Header };
