// B1: GET id Movie 
let params = new URLSearchParams(document.location.search);
// console.log(url);

let id = params.get("ids");
console.log(id);