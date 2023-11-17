import { AppName } from "./components/AppName";
import { AddTodo } from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import WelcomeMessege from "./components/WelcomeMessage";
import "./App.css";
import { useReducer } from "react";
import { TodoItemsContext } from "./store/TodoItemStore";

const todoItemReducer = (currentItem, action) => {
  let newTodoItems = currentItem;
  if (action.type === "NEW_ITEM") {
    newTodoItems = [
      ...currentItem,
      { name: action.payload.itemName, dueDate: action.payload.itemDueDate },
    ];
  } else if (action.type === "DELETE_ITEM") {
    newTodoItems = currentItem.filter(
      (item) => item.name != action.payload.itemName
    );
  }
  return newTodoItems;
};

function App() {
  const [todoItems, dispatchTodoItems] = useReducer(todoItemReducer, []);

  const addNewItem = (itemName, itemDueDate) => {
    const newItemAction = {
      type: "NEW_ITEM",
      payload: {
        itemName,
        itemDueDate,
      },
    };
    dispatchTodoItems(newItemAction);
  };

  const deleteItem = (TodoName) => {
    const deleteItemAction = {
      type: "DELETE_ITEM",
      payload: {
        itemName: TodoName,
      },
    };
    dispatchTodoItems(deleteItemAction);
  };

  return (
    <TodoItemsContext.Provider
      value={{
        todoItems,
        addNewItem,
        deleteItem,
      }}
    >
      <center className="todo-container">
        <AppName />
        <AddTodo />
        <WelcomeMessege></WelcomeMessege>
        <TodoItems></TodoItems>
      </center>
    </TodoItemsContext.Provider>
  );
}

export default App;
