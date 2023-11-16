import { AppName } from "./components/AppName";
import { AddTodo } from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import WelcomeMessege from "./components/WelcomeMessage";
import "./App.css";
import { useState } from "react";

function App() {
  const [todoItems, setTodoItems] = useState([]);

  const handleNewItem = (itemName, itemDueDate) => {
    const newTodoItems = [
      ...todoItems,
      { name: itemName, dueDate: itemDueDate },
    ];
    setTodoItems(newTodoItems);
  };

  const handleDeleteItem = (TodoName) => {
    const newTodoItem = todoItems.filter((items) => items.name !== TodoName);
    setTodoItems(newTodoItem);
  };

  return (
    <>
      <center className="todo-container">
        <AppName />
        <AddTodo onNewItem={handleNewItem} />
        {todoItems.length === 0 && <WelcomeMessege></WelcomeMessege>}
        <TodoItems
          todoList={todoItems}
          onClickDelete={handleDeleteItem}
        ></TodoItems>
      </center>
    </>
  );
}

export default App;
