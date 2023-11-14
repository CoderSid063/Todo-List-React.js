import styles from "./TodoItems.module.css";
import TodoItem from "./TodoItem";
const TodoItems = ({ todoList }) => {
  return (
    <>
      <div className={styles['items-container']}>
      {todoList.map((item) => (
        <TodoItem TodoName={item.name} TodoDate={item.dueDate}></TodoItem>
      ))}
    </div>
    </>
    
  );
};
export default TodoItems;
