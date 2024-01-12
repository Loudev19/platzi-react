import React from "react";
import "./TodoItem.css";

function TodoItem({ label, completed, handleChange, handleDelete }) {
  const [value, setValue] = React.useState(completed);

  function handleDrag() {
    handleDelete(label)
  }
  return (
    <li className="container" draggable onDragEnd={handleDrag}>
      <label className="item">
        {label}
        <input
          type="checkbox"
          value={value}
          defaultChecked={completed}
          onChange={(event) => {
            setValue(event.target.checked);
            handleChange(label, event.target.checked);
          }}
          onDrag={() => handleDelete(label)}
        />
        <span className="checkmark"></span>
      </label>
    </li>
  );
}

export { TodoItem };
