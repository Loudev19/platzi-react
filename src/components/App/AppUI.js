import { Header } from "../Header";
import { SearchBar } from "../SearchBar";
import { CreationButton } from "../CreationButton";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";

import "./App.css";
import React from "react";
import { TodoContext } from "../TodoContext";
import { Loading } from "../Loading";

function AppUI() {
  const { loading, error, filteredList, editTodoValue, deleteTodoValue } =
    React.useContext(TodoContext);

  return (
    <div className="background">
      <div className="content">
        <Header></Header>
        <SearchBar placeholder={"Cut onions"}></SearchBar>
        <CreationButton></CreationButton>
        <TodoList>
          {loading && <Loading nItems={3}></Loading>}
          {error && <p className="message">Ups! Something wrong happens</p>}
          {(!filteredList?.length && !error && !loading) && <p className="message">Start creating tasks!</p>}
          {filteredList &&
            filteredList.map((item) => (
              <TodoItem
                key={item.label}
                label={item.label}
                completed={item.completed}
                handleChange={editTodoValue}
                handleDelete={deleteTodoValue}
              ></TodoItem>
            ))}
        </TodoList>
      </div>
    </div>
  );
}

export { AppUI };
