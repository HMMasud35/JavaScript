// //variable 4 items

// // automaticly, var, let, const

// // automaticly
// a = "masud"
// console.log(a);

// // var
// var a = "masud"
// var a = "hasan"
// console.log(a); // Redeclared

// var a = "masud"
// a = "hasan"
// console.log(a); // Reassign

// // let
// let a = "masud"
// let a = "hasan"
// console.log(a); // Redeclared (not possible)

// let a = "masud"
// a = "hasan"
// console.log(a); // Reassign (possible)

// // const
// const a = "hasan"
// console.log(a); // possible

// const a = "masud"
// const a = "hasan"
// console.log(a); // Redeclared (not possible)

// const a = "masud"
// a = "hasan"
// console.log(a); // Reassign (not possible)

// // data type 2 items
// //1. premetive 2. non-premetive(ref-data type)

// // data type 8 items
// // premetive
// // 1. String 2. Number 3. Bigint 4. Boolean 5. Undifined 6. Null
// // non-premetive
// // 7. Symbol 8. Object (array)

// // string
// let text = "masud"; 'masud'
// console.log(text);

// // number
// let number = 123; 12.23
// console.log(number);

// // bigint
// let bigint = 9999n // up to 15 digits (2>{53}-1)
// console.log(bigint);

// // boolean
// let boolean = true
// boolean = false
// console.log(boolean);

// // undifined
// let undifined
// console.log(undifined);

// // null
// let a = "abc"
// b = 234
// console.log(a + b); // invalid mathmatical oparation

// // symbol
// let a = Symbol("id")
// console.log(typeof a); // unique mening

// // object
// let person = {
//   name: "masud",
//   age: 30,
// }
// console.log(person);

// // types of operators
// // + (addition), - (subtraction), * (multiplication), ** (exponentation), / (division), % (modulus), ++ (increment), -- (decrement), = (equal)

// // = (assigment), == (compare two values), === (compare two values & chack data type)
// var a = 10
//  b = a
// console.log(a = b);

// //compare
// var a = 10
// var b = 20
// console.log(a == b);
// var a = 10
// var b = 10
// console.log(a == b);

// //compare & data type check
// var a = 10
// var b = "10"
// console.log(a === b);
// var a = "20"
// var b = "10"
// console.log(a === b);
// var a = "10"
// var b = "10"
// console.log(a === b);

// // assigment operators
// // +=, -=, *=, /=, %=, **=

// //+=
// var a = 10
// var b = 15
// y = a + b
// console.log(y);

// //logical assignment operators
// //&& (and), || (or), ?: (ternary operator), ! (not)

// //&&
// console.log(true == true);
// console.log(true == false);

// //!
// console.log(true != true);
// console.log(true != false);

// // alert
// alert("mern 2405")

// // prompt
// prompt("mern 2405", "ok")

// // confirm
// confirm("mern 2405")

// //type conversions
// // impasive, explasive
// let a = 20
// let b = "10"
//  console.log(a + b); // concriasion

// let c = 20
// let d = "10"
// let e = Number(d)
//  console.log(c + e); // conversion with number

// let x = 20
// let y = "10"
//  console.log(x - y); // quation


// // false value 5 items
// // "", 0, null, undifined, false

// // if else
// let a = 18
// if (a > 18) {
//   console.log(a + 1);
// } else {
//   console.log(a - 1);
// }

// let b = 18
// if (b >= 18) {
//   console.log(b + 1);
// } else {
//   console.log(b - 1);
// }


// // nextting
// let student = prompt("are u student?")
// if (student == "yes") {
//   let text = prompt("no koto")
//   console.log("thanks");
//   if (text == "2405") {
//     console.log("class e jan");
//   } else {
//     console.log("help desk kotha bolen");
//   }
// } else {
//   console.log("very bad");
// }


// // multiple
// let number = prompt("number is")
// if(number >= 80) {
//   console.log("A+");
// }else if(number >= 70) {
//   console.log("A");
// }else if(number >= 60) {
//   console.log("A-");
// }else if(number >= 50) {
//   console.log("B");
// }else if(number >= 40) {
//   console.log("c");
// }else if(number >= 39) {
//   console.log("D");
// }else if(number >= 32) {
//   console.log("F");
// }


// // switch
// let number = prompt(" number is")
// let result = Number(number)
// switch (result) {
// case 10:
//   console.log("number 10");
//   break;
//   case 20:
//     console.log("number 20");
//     default:
//     console.log("no match");
// }

// // loop
// // for, while

// // for
// let number = prompt("namta is")
// for (let i = 1; i <= 10; i ++) {
// console.log(`${number} x ${i} = ${number * i}`); 
// }


// // while
// let value = prompt("enter your text")
// while(value !== "exit") {
//   console.log(value);
// }

// //function

// //
// function sum (a, b) {
//   console.log(a + b);
// }

// sum(20, 30)

// // function diclaration (hoyesting)
// sum(20, 30)
// function sum (a, b) {
//   console.log(a + b);
// }

// //rest oparator
// function jog (a, ...b) {
//   console.log(a + b);
// }

// jog(20, 30, 20, 50, 40)

// // funtion expration
// let sum = function() {
//   console.log("sum");
// }
// sum()


// // object
// var info = {
//   name: "rafik",
//   age: 22,
//   nid: 25223
// }

// // object update
// var info = {
//   name: "rafik",
//   age: 22,
//   nid: 25223
// }
// let result = info
// result.name = "sakib"
// console.log(result.name);

// // object delete
// var info = {
//   name: "rafik",
//   age: 22,
//   nid: 25223
// }
// delete info.age
// console.log(info);

// // object added
// var info = {
//   name: "rafik",
//   age: 22,
//   nid: 25223
// }
// info.lastname = "jabbar"
// console.log(info);

// // object mathod
// var info = {
//   name: "rafik",
//   age: 22,
//   nid: 25223,
//   sum: function (a) {
//     console.log(a);
//   }
// }
// console.log(info.sum(20));

// var info = {
//   name: "rafik",
//   age: 22,
//   nid: 25223,
//   sum: function () {
//     console.log(this.name);
//   }
// }
// console.log(info.sum());

// // sqube 3 item
// // global, local, function

// // global 
// var number = 10
// function sum () {
//   console.log(number);
// }
// sum()

// var number = 10
// {
//   console.log(number);
// }

// //local
// {
//   var number = 10
//   console.log(number);
// }

// // function
// function sum () {
//   let number = 10
//   console.log(number);
// }

// // math method
// // round, ceil, floor, trunc

// // round 
// let number = 20.19
// let number1 = 20.51
// console.log(Math.round(number));
// console.log(Math.round(number1));

// // ceil
// let number2 = 20.19
// let number3 = 20.51
// console.log(Math.ceil(number2));
// console.log(Math.ceil(number3));

// // floor
// let number4 = 20.19
// let number5 = 20.51
// console.log(Math.floor(number4));
// console.log(Math.floor(number5));

// // trunc 
// let number6 = 20.19
// let number7 = 20.51
// console.log(Math.trunc(number6));
// console.log(Math.trunc(number7));

// //math random
// let number8 = Math.random()* 10 + 1;
// console.log(number8.toFixed(2) );

// // date
// let date = new Date()
// console.log(new Date());
// console.log(date.getDate());
// console.log(date.getFullYear());
// console.log(date.getMonth()+1);
// console.log(date.getDay()+1);
// console.log(date.getHours());
// console.log(date.getMinutes());
// console.log(date.getSeconds());
// console.log(`${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()} `)
// date.setDate(12), date.setMonth(2), date.setFullYear(2022)
// console.log(date);

// function taskDate(dateMilli) {
//     var d = (new Date(dateMilli) + '').split(' ');
//     d[2] = d[2] + '';

//     return [d[0], d[2], d[1], d[3]].join('/');
// }
// var datemilli = Date.parse('5,7,2024');
// console.log(taskDate(datemilli));
// var datemilli =  Date();
// console.log(taskDate(datemilli));

// // arry
// const sum = (a) => {
//   console.log(a);
// }
// sum(20)

// let number = 10
// let number1 = 20
// function sum () {
//   let total = number + number1
//   return total
// }
// let result = sum();
// console.log(result);


// //array
// let array = ["rafiq", "jabbar", 80, 10, 20, 60, "kuddus", 12, true, "sakib"]
// console.log(array);

// // push (last added)
// array.push("2312")
// console.log(array);

// // pop (last child delete)
// array.pop()
// console.log(array);

// // shift (fast child delete)
// array.shift()
// console.log(array);

// //unshift (fast added)
// array.unshift("new")
// console.log(array);

// // slice (duplicate kore ana but 3 = 3 agerta porjonto)
// let result = array.slice(1, 3)
// console.log(result);

// // splice (delete koto no or koto no teke & koyta & new added)
// array.splice(1,2, "newadded", "aedded")
// console.log(array);

// // delete kora length ke alada kora
// let result = array.splice(1, 2)
// console.log(result);

// //axceese
// console.log(array[5]);

// //change by length
// array[2] = "hasanchange"
// console.log(array);

// // last child ke exceese kora
// console.log(array[array.length-1]);

// // for loop
// for (let i = 0; i < array.length; i++) {
//   const element = array[i];
//   console.log(element);
// }


// // synchronous, asynchronous

// // callback function
// function main(a, cb) {
// console.log(a);
//   cb()
// }
// function sub() {
//   console.log("sub");
// }

// main(10, sub)

// // forEach
// array.forEach((item, index, arr) => {
// console.log(item, index, arr);
// })

// // map
// let result = array.map((item, index, arr) => {
//   return item

// })

// console.log(result);

// // filter
// let result = array.filter((item) =>{
//   return item > 20

// })
// console.log(result);

// // find
// let result = array.find((item)=> {
// return item > 10

// })

// console.log(result);

// // rediuce
// array.reduce((prev, cur)=>{
//   console.log(prev);

// }, 0)

// // oop
// class User {
//   constructor(name, age, phone) {
//     this.name = name,
//       this.age = age
//     this.phone = phone
//   }
// }

// class Vip extends User {
//   constructor(name, age, phone, pass){
//     super(name, age, phone)
//     this.pass = pass
//   }
// }

// let info = new User("sabbir", 12, 1235)
// let info1 = new Vip("kamal", 35, 4521, "A020022")
// console.log(info);
// console.log(info1);

// // promise
// let data = new Promise((resolve, reject) => {
//   let result = true
//   if (result) {
//     resolve("success")
//   } else {
//     reject("fail")
//   }
// })

// data.then((item) => {
//   console.log(item);

// }).catch((err) => {
//   console.log(err);

// }).finally(() => {
//   console.log("");

// })

//set time
// let count = 1
// setInterval(()=>{
//   console.log(count++);

// }, 2000)


// const h4 = document.getElementsByTagName("h4")
// console.log(h4[0]);

// const h1 = document.querySelector("h1")
// console.log(h1);

// const h3 = document.querySelector("h3")
// let p = document.querySelector("p")
// h3.innerHTML =p.innerHTML

// let h2 = document.querySelector("h2")
// h2.style.color = "red"
// h2.style.backgroundColor = "green"


// // parent ke khuje nea
// var ul = document.querySelector("#ul")
// console.log(ul.parentNode);

// // child ke khuje nea
// var ul = document.querySelector("#ul")
// console.log(ul.childNodes);

// var ul = document.querySelector("#ul")
// console.log(ul.children);

// // first child ke khuje nea
// var ul = document.querySelector("#ul")
// console.log(ul.firstElementChild);

// // last child ke khuje nea
// var ul = document.querySelector("#ul")
// console.log(ul.lastElementChild);

// // choeese child ke khuje nea
// var ul = document.querySelector("#ul")
// console.log(ul.childNodes[5]);

// // ul er next tag ke khuje nea
// var ul = document.querySelector("#ul")
// console.log(ul.nextElementSibling);

// // ul er previous tag ke khuje nea
// var ul = document.querySelector("#ul")
// console.log(ul.previousElementSibling);

// // Attribute ke khuje nea
// var img = document.querySelector("#pic")
// console.log(img.getAttribute("id"));

// // Attribute ke khuje nea
// var img = document.querySelector("#pic")
// console.log(img.getAttribute("src"));

// // Attribute ke khuje nea
// var img = document.querySelector("#pic")
// img.src = 'https://lh3.googleusercontent.com/a/ACg8ocKU4hk18u3fMantLZ-SIoRUOCyr5fVYrDD-qVJP4I5UnlYXDg=s96-c-br100-rg-mo'


// // namta create
// let ivalue = document.querySelector("#ivalue")
// let btn = document.querySelector("#btn")
// let namta = document.querySelector("#namta")

// btn.addEventListener("click", function () {
//   if (!ivalue.value) return
//   namta.innerHTML = ""
//   for (let i = 1; i <= 10; i++) {
//     namta.innerHTML += `${ivalue.value} x ${i} = ${ivalue.value * i} <br>`
//   }
//   ivalue.value = ''
// })

// // element create
// let box = document.querySelector("#box")
// let h1 = document.createElement("h1")

// box.appendChild(h1)
// h1.innerHTML = "hasan Masud"


// // create element by input
// let textvalue = document.querySelector("#textvalue")
// let add = document.querySelector("#add")
// let listbox = document.querySelector("#listbox")

// textvalue.addEventListener("keypress", (e) => {
//   if (e.key.toLowerCase() == "enter") {
//     let list = document.createElement("li")
//     // list.style.listStyle = "none"
//     list.innerHTML += `<span>${textvalue.value} </span> <button id="deletebtn">X</button>`
//     listbox.appendChild(list)
//     textvalue.value = ''
//     let deletebtn = document.querySelectorAll("#deletebtn")
//     deletebtn.forEach((item) => {
//       item.addEventListener("click", () => {
//         list.remove()
//       })
//     })
//   }
// })
// add.addEventListener("click", () => {
//   let list = document.createElement("li")
//   // list.style.listStyle = "none"
//   list.innerHTML += `<span>${textvalue.value}</span> <button id="deletebtn">X</button>`
//   listbox.appendChild(list)
//   textvalue.value = ''
//   let deletebtn = document.querySelectorAll("#deletebtn")
//   deletebtn.forEach((item) => {
//     item.addEventListener("click", () => {
//       list.remove()
//     })
//   })
// })


// // render
// const render = document.querySelectorAll("#render")
// render.forEach((item) => {
//   let number = 0
//   let count = setInterval(() => {
//     if (number < item.dataset.count) {
//       item.innerHTML = number += 1
//     } else {
//       clearInterval(count)
//     }
//   }, item.dataset.time)
// })


// let menubtn = document.querySelector("#responsive")
// let div = document.querySelector("div")
// menubtn.addEventListener("click", ()=> {
//   div.classList.toggle("nav")
// })

// let menubtn = document.querySelector("#responsive")
// menubtn.addEventListener("click", () => {
//   let nev = document.createElement("div")
//   let body = document.querySelector("body")
//   body.appendChild(nev)
//   nev.innerHTML = "mern"
//   nev.setAttribute("id", "nav")
// })


// // link ke replace kora
// let darkLight = document.querySelector("darklight")
// let link = document.querySelector("#css")

// darkLight.addEventListener("click", ()=> {
//   link.href = `${location.protocol}//${location.host}/css/dark.css`
// })


