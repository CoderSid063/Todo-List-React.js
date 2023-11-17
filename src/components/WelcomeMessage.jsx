import { useContext } from "react";
import styles from "./WelcomeMessage.module.css";
import { TodoItemsContext } from "../store/TodoItemStore";
const WelcomeMessege = ()=>{
  const todoItems = useContext(TodoItemsContext)
  return todoItems.length === 0 && <p className={styles.welcome}>Enjoy Your Day</p>
}
export default WelcomeMessege;