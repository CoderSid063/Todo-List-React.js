function TodoItem1 (){

  let TodoName = 'Buy Milk';
  let TodoDate ='4/10/2023';

  return <div class="container">
    <div class="row My-row">
          <div class="col-6">
           {TodoName}
          </div>
          <div class="col-4">{TodoDate}</div>
          <div class="col-2">
          <button type="button" class="btn btn-danger My-btn">Delete</button>
          </div>
        </div>
  </div>
}

export default TodoItem1;