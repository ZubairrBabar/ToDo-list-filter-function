








var User_input = document.getElementById("User_input");
var category_dropdown = document.getElementById("category_dropdown");
var filterCategory = document.getElementById("filterCategory");
var date = document.getElementById("date");
var Added = document.getElementById("Added");

const obj = [];

function renderTasks() {
  Added.innerHTML = ""; // Clear existing content
  obj.forEach(function (data, ind) {
    var ele = `<div class="borderDiv">
                  <div class="date">Date : ${data.date}</div>
                  <div class="Category">${data.category}</div>
                  <div class="buttons">
                    <button class="btnEdit" onclick="Edit(this)">Edit</button>
                    <button class="btnDel" onclick="Delete(this)">Delete</button>
                  </div>
                  <div class="paragraph">${data.text}</div>
                </div>`;
    Added.innerHTML += ele;
  });
}



function AddTaskBtn() {
  var task = {
    text: User_input.value,
    category: category_dropdown.value,
    date: date.value
  };

  obj.push(task); // Add task to array
  renderTasks(); // Update the rendered tasks
}

function Edit(element) {
  var editText = prompt("Enter new task");
  element.parentElement.nextElementSibling.innerText = editText;
 
}

function Delete(element) {
  element.parentElement.parentElement.remove()
  
}

filterCategory.addEventListener("change", function () {
  var categoryWise = obj.filter((task)=> category_dropdown.value == this.value)
    console.log(categoryWise);
   
    Added.innerHTML = ""; 
    categoryWise.forEach(function (data, ind) {
      var ele = `<div class="borderDiv">
                    <div class="date">Date : ${data.date}</div>
                    <div class="Category">${data.category}</div>
                    <div class="buttons">
                      <button class="btnEdit" onclick="Edit(this)">Edit</button>
                      <button class="btnDel" onclick="Delete(this)">Delete</button>
                    </div>
                    <div class="paragraph">${data.text}</div>
                  </div>`;
      Added.innerHTML += ele;
    });
  
});


