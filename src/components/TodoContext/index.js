import React from "react";
import { useLocalStorageState } from "../../util/LocalStorageUtil";

const TodoContext = React.createContext();

function TodoProvider({ children }) {
  const todosLSName = "TODOSv1";

  const {
    item: todos,
    saveItem: setTodos,
    loading,
    error,
  } = useLocalStorageState(todosLSName, []);
  const [searchValue, setSearchValue] = React.useState("");

  const filteredList = todos.filter((item) =>
    item.label.toLowerCase().includes(searchValue.toLowerCase())
  );
  const nCompletedTodos = todos.filter((item) => !!item.completed).length;
  const nAllTodos = todos.length;

  const addTodoValue = (newValue) => {
    const exist = todos.findIndex(
      (item) => item.label.toLowerCase() === newValue.toLowerCase()
    );
    if (exist === -1) {
      const temp = [...todos, { label: newValue, completed: false }];
      setTodos(temp);
    }
  };

  const editTodoValue = (label, newValue) => {
    const exist = todos.findIndex(
      (item) => item.label.toLowerCase() === label.toLowerCase()
    );
    const isNewValue = todos[exist].completed !== newValue;
    if (exist > -1 && isNewValue) {
      const temp = [...todos];
      temp[exist] = {
        label,
        completed: newValue,
      };
      setTodos(temp);
    }
  };

  const deleteTodoValue = (label) => {
    const exist = todos.findIndex(
      (item) => item.label.toLowerCase() === label.toLowerCase()
    );
    if (exist > -1) {
      const temp = todos.filter((item) => item.label !== label);
      setTodos(temp);
    }
  };

  return (
    <TodoContext.Provider
      value={{
        loading,
        error,
        nCompletedTodos,
        nAllTodos,
        searchValue,
        setSearchValue,
        addTodoValue,
        filteredList,
        editTodoValue,
        deleteTodoValue,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
}


export {TodoContext, TodoProvider}