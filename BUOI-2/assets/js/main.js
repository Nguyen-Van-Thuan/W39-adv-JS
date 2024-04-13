// Mô tả về hoạt đồng hằng ngày
// 1. Làm bài tập (3s)
// 2. Đá bóng (4s)
// 3. Nấu cơm (5s)

// Tat ca cong viec duoc thuc hien cung 1 luc
// const work1 = (name) => {
//   console.log("Thu hien cong viec " + name);
// }
// const work2 = (name) => {
//   console.log("Thu hien cong viec " + name);
// }
// const work3 = (name) => {
//   console.log("Thu hien cong viec " + name);
// }

// work1("Lam bai tap");
// work2("Da bong");
// work3("Nau com");


// Callback function - Cong viec thuc hien 1 cach tuan tu hon

// 1. Làm bài tập (3s)
// 2. Đá bóng (4s)
// 3. Nấu cơm (5s)

const congviec1 = (name, callback) => {
  console.log("Bat dau thuc hien cac cong viec");
  console.log("Thuc hien cong viec " + name);

  setTimeout(() => {
    callback();
  }, 3000);
}

const congviec2 = (name, callback) => {
  console.log("Thuc hien cong viec " + name);

  setTimeout(() => {
    callback();
  }, 4000)

}

const congviec3 = (name) => {
  console.log("Thuc hien cong viec " + name)
  setTimeout(() => {
    console.log("Lam xong het cong viec!");
  }, 5000)
}

// congviec1("Lam bai tap", () => {
//   congviec2("Da bong", () => {
//     congviec3("Nau com");
//   });
// });



// Promise
// let money = 20;
// Khoi tao Promise
// let buyIphone = new Promise((resolve, reject) => {
//   if(money > 35) {
//     resolve("Mua iphone thoi");
//   }else {
//     reject("Kiem them tien di");
//   }
// })
// Khoi tao Promise
// let buyWatch = new Promise((resolve, reject)=>{
//   if(money - 35 - 4 >= 0){
//     resolve("Ban co the mua them Apple Watch!");
//   }else {
//     reject("Khong du tien mua apple watch!");
//   }
// })

// Thuc thi promise
// buyIphone
//   .then((response)=>{
//     console.log(response);

//     // Mua apple watch
//     return buyWatch;
//   })
//   .then((res)=>{
//     console.log(res);
//   })

//   .catch((error)=>{
//     console.log(error)
//     return buyWatch;
//   })
//   .catch((error)=>{
//     console.log(error);
//   })

//   .finally(()=>{
//     console.log("Di ve nha!");
//   })





  // Async Function
  let hello = async() => {
    return Promise.resolve("hello 500 anh em!");
  }

  // hello();
  hello()
    .then((res)=>{
      console.log(res);
    })
    .catch((error)=>{
      console.log(error);
    })