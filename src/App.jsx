import { AppName } from "./components/AppName";
import { AddTodo } from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import "./App.css";

function App() {
  const todoItems = [
    {
      name: "Buy Milk",
      dueDate: "4/11/2023",
    },
    {
      name: "Go to College",
      dueDate: "4/11/2023",
    },
    {
      name : "Return to Home",
      dueDate : "4/11/2023",
    },
  ];

  return (
    <center className="todo-container">
      <AppName />
      <AddTodo />
      <TodoItems todoList={todoItems}></TodoItems>
    </center>
  );
}

export default App;
