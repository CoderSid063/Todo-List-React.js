import { AppName } from "./components/AppName";
import { AddTodo } from "./components/AddTodo";
import TodoItem from "./components/TodoItem";
import "./App.css"

function App() {
  return (
    <center className="todo-container">
      <AppName />
      <AddTodo/>
      <div className="items-container">
        <TodoItem TodoName="Buy Milk" TodoDate="4/11/2023"></TodoItem>
        <TodoItem TodoName="Go to School" TodoDate="4/11/2023"></TodoItem>
      </div>
    </center>
  );
}

export default App;
