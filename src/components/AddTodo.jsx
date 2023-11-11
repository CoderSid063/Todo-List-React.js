export function AddTodo(){
  return <div class="container text-center">
    <div class="row My-row">
          <div class="col-6">
            <input type="text" placeholder="Enter Todo Here" />
          </div>
          <div class="col-4"><input type="date"/></div>
          <div class="col-2">
          <button type="button" class="btn btn-success My-btn">Add</button>
          </div>
        </div>
  </div>
}