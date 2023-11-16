import { useState } from "react";
import { MdOutlineAddComment } from "react-icons/md";
export function AddTodo({ onNewItem }) {
  const [todoName, setTodoName] = useState("");
  const [dueDate, setDueDate] = useState("");

  const handleNameChange = (event) => {
    setTodoName(event.target.value);
  };
  const handleDateChange = (event) => {
    setDueDate(event.target.value);
  };
  const addButtonOnClicked = (event) => {
    event.preventDefault();
    onNewItem(todoName, dueDate);
    setTodoName("");
    setDueDate("");
  };

  return (
    <div className="container text-center">
      <form className="row My-row" onSubmit={addButtonOnClicked}>
        <div className="col-6">
          <input
            type="text"
            value={todoName}
            placeholder="Enter Todo Here"
            onChange={handleNameChange}
          />
        </div>
        <div className="col-4">
          <input type="date"  value={dueDate} onChange={handleDateChange} />
        </div>
        <div className="col-2">
          <button
            className="btn btn-success My-btn"
          >
            <MdOutlineAddComment />
          </button>
        </div>
      </form>
    </div>
  );
}
