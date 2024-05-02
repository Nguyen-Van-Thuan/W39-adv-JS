import { data, sum } from "./data.js";

// Truy cap phan tu
let ulEl = document.querySelector("ul");


let HTML = ``;
data.forEach((value)=>{
  HTML += `
  <li>
    <a href="../../detail.html?id=${value.id}">
      ${value.name}
    </a>
  </li>`
});
console.log(HTML);

// Ghi ra listing
ulEl.innerHTML = HTML;