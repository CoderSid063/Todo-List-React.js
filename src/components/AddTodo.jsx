import { useState } from "react";
export function AddTodo({ onNewItem }) {
  const [todoName,setTodoName]=useState()
  const [dueDate,setDueDate] =useState()

  return (
    <div className="container text-center">
      <div className="row My-row">
        <div className="col-6">
          <input type="text" placeholder="Enter Todo Here" />
        </div>
        <div className="col-4">
          <input type="date" />
        </div>
        <div className="col-2">
          <button type="button" className="btn btn-success My-btn" onClick={onNewItem()}>
            Add
          </button>
        </div>
      </div>
    </div>
  );
}
