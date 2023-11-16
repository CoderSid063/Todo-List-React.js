import { useState } from "react";
export function AddTodo({ onNewItem }) {
  const [todoName,setTodoName]=useState()
  const [dueDate,setDueDate] =useState()

  const handleNameChange = (event)=> {
    setTodoName(event.target.value);
  }
  const handleDateChange = (event)=> {
    setDueDate(event.target.value);
  }
  const addButtonOnClicked = ()=>{
    onNewItem(todoName,dueDate);
    setTodoName("")
    setDueDate("");
  }

  return (
    <div className="container text-center">
      <div className="row My-row">
        <div className="col-6">
          <input type="text" placeholder="Enter Todo Here"  onChange={handleNameChange}/>
        </div>
        <div className="col-4">
          <input type="date"  onChange={handleDateChange}/>
        </div>
        <div className="col-2">
          <button type="button" className="btn btn-success My-btn" onClick={addButtonOnClicked}>
            Add
          </button>
        </div>
      </div>
    </div>
  );
}
