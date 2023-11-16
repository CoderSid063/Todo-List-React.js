function TodoItem({ TodoName, TodoDate, clickToDelete }) {
  return (
    <div className="container">
      <div className="row My-row">
        <div className="col-6">{TodoName}</div>
        <div className="col-4">{TodoDate}</div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-danger My-btn"
            onClick={() => {
              clickToDelete(TodoName);
            }}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem;
