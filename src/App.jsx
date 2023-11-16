import { AppName } from "./components/AppName";
import { AddTodo } from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import "./App.css";
import { useState } from "react";

function App() {
  const initialTodoItems = [
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

  const [todoItems,setTodoItems] =useState(initialTodoItems)

  const handleNewItem =(itemName,itemDueDate)=>{
    const newTodoItems = [...todoItems,{name:itemName,dueDate:itemDueDate}]
    setTodoItems(newTodoItems)

  }

  return (
    <>
    <center className="todo-container">
      <AppName />
      <AddTodo onNewItem={handleNewItem} />
      <TodoItems todoList={todoItems}></TodoItems>
    </center>
    </>
    
  );
}

export default App;
