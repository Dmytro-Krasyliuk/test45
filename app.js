// 'use strict'
// const flights = ['USA', 'London', 'Ukraine', 'Paris']

// const setFlights = new Set(flights)
// console.log(setFlights.size) // show length
// console.log(setFlights.has('USA')) // includes :) true/false
// setFlights.add('Poland')
// setFlights.delete("London");
// setFlights.clear();

// // set to array
// const arr = [...setFlights]
// new Set('helloasdfasdf')




// // ітеріруємий елемент



// /****
//  * maps
//  */

// // bucket

// // map - object
// const dd = [1, 2, 3];
// const wetherMap = new Map();
// wetherMap
//   .set("London", "+10")
//   .set(345, "+10") // other type in keys
//   .set(true, "+10") // other type in keys
//   .set(dd, "+10")
//   .set("British", "+10"); // chaining


// console.log(wetherMap);
// console.log(wetherMap.get("London"));
// console.log(wetherMap.get("sdfgfd")); // undefined
// console.log(wetherMap.get(dd));
// console.log(wetherMap.has("sdfgdsf")); // false
// console.log(wetherMap.size());
// wetherMap.delete("London");


// // speed method create map
// const newMap = new Map([
//   ["name", "Viktor"],
//   ["age", 20],
// ]);

// const obj = {
//     name: 'Tolik',
//     age: 23,
// }
// // get amount keys
// let objToMap = new Map(Object.entries(obj))
// console.log(objToMap.size);
// console.log(objToMap);



// const payment = 34_300;
// // Нельзя соседничать с точкой:
// // 23_.5

// // Number.MAX_SAFE_INTEGER
// // Number.MIN_SAFE_INTEGER


// 34534500000000000n // big Int
// BigInt(6000000500050505000000) так плохо!!!

// 10n + 20 // error ! Convert to bigint

// Интернационализация чисел



// let options = {
//   style: 'currency',
//   currency: 'UAH'
// }
// new Intl.NumberFormat("ua-UA", options).format(100);
// // "100,00 ₴";







// // WeakMap
// // небольшой функционал (меньше методов)
// // ключи только обьекты

// const map = new WeakMap();
// let b = { b: 1 }
// map.set({ a: 1 }, "weak");
// map.set(b, "weak");
// b = null;

// console.log(map); // Здесь уже нет b. Так как ссылка удалилась!!!



// const first = new Date(2024, 10, 4);
// const second = new Date(2020, 2, 4);

// console.log(first - second)







function zam() {
  let b = 0;
  return () => {
    b++
    console.log(b)
  }
}

let c = zam()

c();
c();
c();
c();

Object.defineProperty(Array.prototype, "firstElement", {
  value: function () {
    return this.length > 0 ? this[0] : undefined;
  },
  enumerable: false, // Это гарантирует, что метод не будет появляться в циклах for...in и Object.keys()
});

let a = [2, 4];
console.log(a.firstElement())




let User = {
  log() {
    console.log('Log')
  }
}

let myUser = Object.create(User) // наследование. В прототипе этот метод есть
console.log(myUser);
console.log(myUser.__proto__);


// https://coursehunter.net/course/javascript-advanced-prodvinutye-koncepcii-yazyka-i-oop?lesson=48

// Прототипирование это как наследование
