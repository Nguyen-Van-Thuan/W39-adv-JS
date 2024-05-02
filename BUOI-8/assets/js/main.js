// Function thong thuong
// function hello(){
//   console.log("Hello Word");
// }
// hello();

// Arrow Function ES6
// const hi = () => {
//   console.log("hi");
// }
// hi();


// const persion = {
//   name: "Nguyen Van A",
//   age: 25,
//   info: function(){
//     console.log(this);
//     return this.name + "" + this.age
//   }
// }

// console.log(persion.info());


// Destructuring voi array
// const number = [1,2,3,4,5];
// const [a,b,c,d,e] = number; //Destructuring
// console.log(number[0]);
// console.log(a);


// Destructuring voi Object
// const car = {
//   name: "Mec",
//   color: "red",
//   money: "3 toi"
// }

// const {name, color, money: dollar = 0} = car; //Destructuring

// console.log(car.name);
// console.log(name);
// console.log(dollar);


// Default Parameters
// const counter = (number = 0) => {
//   console.log(number);
// }

// counter(50);


// Rest parameters với khai báo hàm
// const sum = (...number) => {

//   let total = 0;
//   number.forEach((value) => {
//     total += value
//   })
//   return total
//   // console.log(number);
//   // return a + b + c;
// }
// console.log(sum(2, 3, 4, 5, 10))


// Rest parameters với Destructuring
// const arr = [1, 2, 3, 4, 5, 6];

// const [a, b, ...number] = arr;

// console.log(a);
// console.log(number);



// Spread Operator
const array_1 = [2, 3, 4];

// console.log(...array_1);

const array_2 = [...array_1, 5, 6];
console.log(array_2);