import styles from "./TodoItems.module.css";
import TodoItem from "./TodoItem";
import { TodoItemsContext } from "../store/TodoItemStore";
import { useContext } from "react";
const TodoItems = ({ todoList, onClickDelete }) => {
  const TodoItemsFromContext = useContext(TodoItemsContext);
  return (
    <>
      <div className={styles["items-container"]}>
        {todoList.map((item) => (
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
