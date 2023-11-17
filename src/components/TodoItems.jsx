import styles from "./TodoItems.module.css";
import TodoItem from "./TodoItem";
import { TodoItemsContext } from "../store/TodoItemStore";
import { useContext } from "react";
const TodoItems = () => {
  const { todoItems } = useContext(TodoItemsContext);

  return (
    <>
      <div className={styles["items-container"]}>
        {todoItems.map((item) => (
          <TodoItem
            key={item.name}
            TodoName={item.name}
            TodoDate={item.dueDate}
          ></TodoItem>
        ))}
      </div>
    </>
  );
};
export default TodoItems;
