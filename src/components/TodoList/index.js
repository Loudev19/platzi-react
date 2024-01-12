import "./TodoList.css";


function TodoList(props) {
  return <ul className="list">{props.children}</ul>;
}

export { TodoList };
