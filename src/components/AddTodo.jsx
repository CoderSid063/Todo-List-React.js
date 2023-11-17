import { useContext } from "react";
import { useRef } from "react";
import { MdOutlineAddComment } from "react-icons/md";
import { TodoItemsContext } from "../store/TodoItemStore";

export function AddTodo() {
  const { addNewItem } = useContext(TodoItemsContext);
  const todoNameElement = useRef();
  const dueDateElement = useRef();

  const addButtonOnClicked = (event) => {
    event.preventDefault();
    const todoName = todoNameElement.current.value;
    const dueDate = dueDateElement.current.value;
    todoNameElement.current.value = "";
    dueDateElement.current.value = "";

    addNewItem(todoName, dueDate);
  };

  return (
    <div className="container text-center">
      <form className="row My-row" onSubmit={addButtonOnClicked}>
        <div className="col-6">
          <input
            type="text"
            ref={todoNameElement}
            placeholder="Enter Todo Here"
          />
        </div>
        <div className="col-4">
          <input type="date" ref={dueDateElement} />
        </div>
        <div className="col-2">
          <button className="btn btn-success My-btn">
            <MdOutlineAddComment />
          </button>
        </div>
      </form>
    </div>
  );
}
