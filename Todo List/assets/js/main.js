// Tim hieu LocalStorage

/*
  - Gom 2 phan
    Key: Do minh dinh nghia
    Value: Gia tri minh can luu tru & hien thi ra, lu tru string

  - Cac phuong thuc voi LocalStorage
    + Khai bao 1 localStorage
      localStorage.setItem("KEY", "Value");

    + De su dung localStorage
      localStorage.getItem("KEY"); 

    + Xoa 1 gia tri localStorage
      localStorage.removeItem("KEY");

    + Xoa tat ca gia tri dang co trong localStorage
      localStorage.clear();


    - Luu y: 

      + Value trong localStorage luon luon luu dang string
       -> Luu thi phai ep kieu JSON.stringify();
       -> Su dung dung JSON.parse(); Chuyen ve kieu ban dau
    */

//Vi du: Luu tri 1 gia tri voi noi dung "500 anh lop web39!"
// // Khai bao 1 gia tri LocalStorage
// localStorage.setItem("CLASS", JSON.stringify([1,2,3]));
// // Lay ve de su dung
// let name =  JSON.parse(localStorage.getItem("CLASS"));
// // Xoa
// localStorage.removeItem("CLASS");
// console.log(name);


// PROJECT TOTLIST
/*
  + Khi minh vua mo app 
    -> Hien thi du lieu cu trong localStorage
    -> Doi cho du lieu moi -> Hien thi ra
*/

// B1: Truy cap phan tu
let formEl = document.querySelector("#form");
let inputEl = document.querySelector("#input");
let ulEl = document.querySelector("#todos");
// console.log(listTodoEl);

// B2: Thiet ke db luu tru localStorage
// let data = [
//   {
//     name: "Ten cong viec 1",
//     completed: false
//   },
//   {
//     name: "Ten cong viec 2",
//     completed: true
//   }
// ]

// B2.1: Luu tru o trong localStorage
// localStorage.setItem("TODOS",JSON.stringify(data));

// B2.2: Goi du lieu trong localStorage ra
let todos = JSON.parse(localStorage.getItem("TODOS"));
// console.log(todos);

// B3: kiem tra xem du lieu minh goi ra ton tai hay khon
// Ton tai -> Hien thi ra
// K ton tai -> Doi nguoi dung nhap vao va cung hien thi ra


// Update localStorage
const updateLS = () => {
  let allLiEl = document.querySelectorAll("li");

  let listTodos = [];
  allLiEl.forEach((item)=>{
    // item: Tung cai the li trong allLiEl

    listTodos.push(
      {
        name: item.innerHTML,
        completed: item.classList.contains("completed")
      }
    )
  })
  // console.log(listTodos);

  // Luu listTodos vao trong localStorage
  localStorage.setItem("TODOS", JSON.stringify(listTodos));

}




// Hien thi tung cong viec ra ngoai UI
const showTodo = (data) => {
  let todoName = inputEl.value; //Get value input


  if (data) {
    todoName = data.name; //Ten cong viec
  }

  if (todoName) {
    let liEl = document.createElement("li"); // Tao pt <li></li>

    // Check trang thai cua cong viec -> Hien thi ra
    if (data && data.completed == true) {
      liEl.classList.add("completed");
    }

    // Click chuot trai thi thay doi trang thai cong viec
    liEl.addEventListener("click", () => {
      liEl.classList.toggle("completed");
      updateLS();
    })

    // Click chuot phai remove the di
    liEl.addEventListener("contextmenu", ()=>{
      // console.log("click chuot phai!");
      liEl.remove();
      updateLS();

    });

    liEl.innerHTML = todoName; // Them noi dung cho <li></li>
    ulEl.appendChild(liEl); //Hien thi trong <ul></ul>

    inputEl.value = ''; //Xoa noi dung o input khi them 1 cong viec moi vao
    updateLS();
  }

}


if (todos) {
  todos.forEach(value => {
    showTodo(value);
  });
}

formEl.addEventListener("submit", (e) => {
  e.preventDefault();
  showTodo();
});