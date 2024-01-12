import React from "react";
import "./CreationButton.css";
import { TodoContext } from "../TodoContext";

function CreationButton() {
  const { addTodoValue } = React.useContext(TodoContext);
  const [newValue, setTodoValue] = React.useState("");

  const handleOnKeyDown = (event) => {
    if (event.keyCode === 13) {
      addTodoValue(event.target.value);
      setTodoValue("");
    }
  };

  return (
    <>
      <input
        className="search add-button"
        value={newValue}
        placeholder="New task"
        onChange={(event) => setTodoValue(event.target.value)}
        onKeyDown={(event) => handleOnKeyDown(event)}
      ></input>
    </>
  );
}

export { CreationButton };
