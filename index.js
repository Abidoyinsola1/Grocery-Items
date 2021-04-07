const alert = document.querySelector('.alert');
const form = document.querySelector('.grocery-form');
const grocery = document.querySelector('.grocery');
const submitBtn = document.querySelector('.submit-btn');
const container = document.querySelector('.grocery-container');
const list = document.querySelector('.grocery-list');
const clearBtn = document.querySelector('.clear-btn');


let editElement;
let editFlag = false;
let editID = '';

form.addEventListener('submit', addItem);

function addItem(e) {
  e.preventDefault();
  const value = grocery.value;

  const id = new Date().getTime().toString();
  if (value && !editFlag) {
    const element = document.createElement("article");
    element.classList.add("grocery-item");
    const attr = document.createAttribute("data-id");
    attr.value = id;
    element.setAttributeNode(attr);
    element.innerHTML = `<p class="title">${value}</p>
       <div class="btn-container">
         <button type="button" class="edit-btn">
           <i class="fa fa-edit"></i>
         </button>
         <button type="button" class="delete -btn">
           <i class="fa fa-trash"></i>
         </button>
       </div>`;
       list.appendChild(element);
  } else if (value && editFlag) {
    console.log("editing");
  } else {
    alert.textContent = "empty value";
  }
}