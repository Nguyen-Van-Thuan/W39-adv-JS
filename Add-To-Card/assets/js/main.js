/* ---- Open/close Popup Add to card ----*/

// B1: Truy cap phan tu
let cartBtn = document.querySelector(".cart-btn");
let cartModalOverlay = document.querySelector(".cart-modal-overlay");
let closeBtn = document.querySelector("#close-btn");
// console.log(closeBtn);

cartBtn.addEventListener("click", () => {
  cartModalOverlay.style.transform = "translateX(0)";
});

closeBtn.addEventListener("click", () => {
  // alert("123");
  cartModalOverlay.style.transform = "translateX(-200%)";
})

// event.target.classList.contain("cart-modal-overlay") 
// -> check bam dung class cart-modal-overlay 
// -> true, Khong phai -> false

cartModalOverlay.addEventListener("click", (event) => {
  if (event.target.classList.contains("cart-modal-overlay") == true) {
    cartModalOverlay.style.transform = "translateX(-200%)";
  }
});



/* ---- THEM SP VAO TRONG GIO HANG ---- */
// B1: Truy cap phan tu
const addToCart = document.querySelectorAll(".add-to-cart");

addToCart.forEach((button)=>{
  button.addEventListener("click", ()=>{
    cartModalOverlay.style.transform = "translateX(0)";

    addToCartClicked(button);
  });
});

// B2: Lay thong tin price, imageSrc
const addToCartClicked = (button) => {
  let parentCart = button.parentElement;

  let price = parentCart.querySelector(".product-price").innerHTML;
  let imageSrc = parentCart.querySelector(".product-image").src;
  // console.log(imageSrc);

  addToCartItem(price, imageSrc);

}


// B3: Hien thi len popup
const addToCartItem = (price, imageSrc) => {
  let productRows = document.querySelector(".product-rows");
  // console.log(productRows);


  // Tao the div
  let divEl = document.createElement("div");

  // Gan class vao div - product-row
  divEl.classList.add("product-row");

  
  let cartHTML = `
  <img class="cart-image" src="${imageSrc}" alt="">
  <span class ="cart-price">${price}</span>
  <input class="product-quantity" type="number" value="1">
  <button class="remove-btn">Remove</button>
  `;

  divEl.innerHTML = cartHTML;
  console.log(divEl);

  productRows.appendChild(divEl);
}

