import {data} from './data.js'

// Get ID
let params =  new URLSearchParams(document.location.search);
let id = params.get("id");
// console.log(id);


// Phan biet duoc la minh dang o trang detail -> filter(data)
const detail = data.filter(item => {
  return item.id == id;
});
console.log(detail);

// Do du lieu
let spanEl = document.querySelector("span");
console.log(spanEl)
spanEl.innerHTML = detail[0].name;