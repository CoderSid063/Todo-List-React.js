import styles from "./TodoItems.module.css";
import TodoItem from "./TodoItem";
const TodoItems = ({ todoList, onClickDelete }) => {
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
