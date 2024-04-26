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

  // Check SP them vao gio hang -> 1 lan
  let cartImgEl = document.querySelectorAll(".cart-image");
  let isDuplicate = false;

  cartImgEl.forEach((item)=>{
    // -> item.src == imageSrc: check anh sp moi them co bi trung sp cu khong
    if(item.src == imageSrc) {
      alert("San pham da ton tai trong gio hang roi");
      isDuplicate = true;
    }
  });

  if(isDuplicate == true) {
    return null;
  }

  // Them moi sp vao gio hang
  productRows.appendChild(divEl);
  updateCartPrice();


  // Xoa san pham dang ton tai trong gio hang
  let removeBtn = document.querySelectorAll(".remove-btn");
  removeBtn.forEach((buttonRemove)=>{
    buttonRemove.addEventListener("click", ()=>{
      removeItem(buttonRemove);
      updateCartPrice();
    });
  });


  // Thay doi so luong trong gio hang
  let productQuantityEl = document.querySelectorAll(".product-quantity");
  productQuantityEl.forEach((inputEl)=>{
    inputEl.addEventListener("change", ()=>{
      changeQuatity(inputEl);
    })
  });
}


// Xoa sp Trong gio hang
const removeItem = (buttonRemove) =>{
  // remove(): phuong thuc co san trong js -> xoa phan tu
  buttonRemove.parentElement.remove();
}


// Thay doi so luong trong gio hang
const changeQuatity = (inputEl) =>{
  // Khong cho phep nhap SL sp pham nho hon 1
  if(inputEl.value < 1) {
    alert("San pham can dat toi thieu la 1!");
    return inputEl.value = 1
  }

  // Cap nhat tong gia tien
  updateCartPrice();

}


// Cap nhat gia tien
const updateCartPrice = () => {
  let productRow = document.querySelectorAll(".product-row");
  // console.log(productRow);

  let total = 0;
  let totalQuantity = 0;
  productRow.forEach((cartItem)=>{

    // So luong cua tung san pham
    const quantityEl = cartItem.querySelector(".product-quantity").value;
    const quantity = parseFloat(quantityEl);

    // Gia tien cua tung san pham
    const priceEl = cartItem.querySelector(".cart-price").innerHTML.replace("$", "");
    const price = parseFloat(priceEl);

    // Tong gia tien cua tat ca san pham
    total = total + (quantity * price);

    // Tong so luong san pham
    totalQuantity = totalQuantity + quantity;
  });

  console.log(totalQuantity);
  // Hien thi gia tien ra popup
  let totalPriceEl = document.querySelector(".total-price");
  totalPriceEl.innerHTML = "$" + total;

  // Hien thi ra icon gio hang
  let cartQuantityEl = document.querySelector(".cart-quantity");
  cartQuantityEl.innerHTML = totalQuantity;

  if(totalQuantity > 100) {
    cartQuantityEl.innerHTML = "100+";

  }

  
}

