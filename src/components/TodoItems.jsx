import styles from "./TodoItems.module.css";
import TodoItem from "./TodoItem";
import { TodoItemsContext } from "../store/TodoItemStore";
import { useContext } from "react";
const TodoItems = ({ onClickDelete }) => {
  const todoItems = useContext(TodoItemsContext);
  return (
    <>
      <div className={styles["items-container"]}>
        {todoItems.map((item) => (
          <TodoItem
            key={item.name}
            TodoName={item.name}
            TodoDate={item.dueDate}
            clickToDelete={onClickDelete}
          ></TodoItem>
        ))}
      </div>
    </>
  );
};
export default TodoItems;
