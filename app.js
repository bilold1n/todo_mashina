const todoform = document.getElementById("form");
const todoform1 = document.getElementById("form1");
const todoform2 = document.getElementById("form2");
const todoform3 = document.getElementById("form3");
const todoform4 = document.getElementById("form4");
const product = document.getElementById("productList");
const btn = document.querySelector(".btn");
let todoarr = JSON.parse(localStorage.getItem("todos"))
  ? JSON.parse(localStorage.getItem("todos"))
  : [];
crattodos(todoarr);
todoform.addEventListener("submit", (e) => {
  e.preventDefault();
});
todoform1.addEventListener("submit", (e) => {
  e.preventDefault();
});
todoform2.addEventListener("submit", (e) => {
  e.preventDefault();
});
todoform3.addEventListener("submit", (e) => {
  e.preventDefault();
});
todoform4.addEventListener("submit", (e) => {
  e.preventDefault();
});

btn.addEventListener("click", () => {
  if (
    searchinp.value == "" ||
    searchinp1.value == "" ||
    searchinp2.value == "" ||
    searchinp3.value == "" ||
    searchinp4.value == ""
  ) {
    alert("malumotlarni to'liq to'ldiring");
  } else {
    let todo = {
      id: Math.floor(Math.random() * 1000000),
      text: searchinp.value,
      text1: searchinp1.value,
      text2: searchinp2.value,
      text3: searchinp3.value,
      text4: searchinp4.value,
    };
    todoarr.push(todo);
    localStorage.setItem("todos", JSON.stringify(todoarr));
    crattodos(todoarr);
    searchinp.value = "";
    searchinp1.value = "";
    searchinp2.value = "";
    searchinp3.value = "";
    searchinp4.value = "";
  }
});
function crattodos(todoarr) {
  product.innerHTML = "";
  todoarr.forEach(({ id, text, text1, text2, text3, text4 }) => {
    const li = document.createElement("li");
    li.classList.add("item");
    text4 == searchinp4.value;
    li.innerHTML = `<div class="ll"> 
    <img class="imj" src="${text3}" alt="rasm urlsi topilmadi"  />
    <h2 class="title"> ${text}</h2>
    <p class="speed">Speed:${text1}km/s</p>
    <p class="price">Price:${text2}$</p>
    <p class="color">Color: ${text4}<span style="background-color: ${text4};" class="color_span"></span></p>
  <img class="img" src="./img/delete.svg" alt="rasm" onclick="deletetodo(${id})" />
  </div> `;
    text4 == "";

    product.appendChild(li);
  });
}
function deletetodo(item) {
  todoarr = todoarr.filter(({ id }) => id !== item);
  localStorage.setItem("todos", JSON.stringify(todoarr));
  crattodos(todoarr);
}
