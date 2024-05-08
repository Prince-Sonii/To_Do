const taskCard = document.querySelector(".task_card_container");
const globalStore = [];
const generateNewCard = (taskData)=>`
  <div class="card col-sm-12 col-md-6 col-lg-2 mt-5" ${taskData.id}>
    <div class="card-header d-flex justify-content-end gap-2">
        <button type="button" class="btn btn-success"><i class="fas fa-pencil"></i></button>
        <button type="button" class="btn btn-danger"><i class="fas fa-trash-alt"></i></button>
        
    </div>
    <div class="card-body">
      <img src=${`https://source.unsplash.com/random/600x300`}  class ="img-thumbnail" alt="...">
      <h5 class="card-title text-primary fw-bolder ">${taskData.taskTitle}</h5>
      <p class="card-text">${taskData.taskDes}</p>
      <a href="#" class="btn btn-primary">${taskData.taskType}</a>
    </div>
  </div>
`;


function saveChanges() {
  const taskData = {
    id: `${Date.now()}`,
    imagrUrl : document.getElementById("imageurl").value,
    taskTitle: document.getElementById("tasktitle").value,
    taskType : document.getElementById("tasktype").value,
    taskDes : document.getElementById("taskdescription").value
  };
  taskCard.insertAdjacentHTML("beforeend",generateNewCard(taskData));
  globalStore.push(taskData);
  // convert object-of-object format to array of objects so it can be displayed in the local storage
  localStorage.setItem("",JSON.stringify({card:globalStore}));
}

const loadInitialData =() => {
  // to get the id data form the local storage
  const getTaskData = localStorage.getItem("");
  // to convert again to object-of-object fomrat
  const {card} = JSON.parse(getTaskData);
  card.map((cardObject)=>{taskCard.insertAdjacentHTML("beforeend",generateNewCard(card))})
  globalStore.push(card);
}

