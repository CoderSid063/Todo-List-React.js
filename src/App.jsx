import { AppName } from "./components/AppName";
import { AddTodo } from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import WelcomeMessege from "./components/WelcomeMessage";
import "./App.css";
import { useState } from "react";
import { TodoItemsContext } from "./store/TodoItemStore";

function App() {
  const [todoItems, setTodoItems] = useState([]);

  const handleNewItem = (itemName, itemDueDate) => {
    // use of Sprade Operator
    setTodoItems((currVal) => [
      ...currVal,
      { name: itemName, dueDate: itemDueDate },
    ]);
  };

  const handleDeleteItem = (TodoName) => {
    const newTodoItem = todoItems.filter((items) => items.name !== TodoName);
    setTodoItems(newTodoItem);
  };

  return (
    <TodoItemsContext.Provider value={todoItems}>
      <center className="todo-container">
        <AppName />
        <AddTodo onNewItem={handleNewItem} />
        <WelcomeMessege></WelcomeMessege>
        <TodoItems onClickDelete={handleDeleteItem}></TodoItems>
      </center>
    </TodoItemsContext.Provider>
  );
}

export default App;
