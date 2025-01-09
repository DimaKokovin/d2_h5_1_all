/*
Попробуйте написать свою версию метода `map`. Ваша задача — создать функцию `map`, которая принимает два параметра:

- `array` (массив, над которым выполняется операция),
- `callback` (функция, которая вызывается для каждого элемента массива).

Функция `callback` должна иметь возможность принимать следующие параметры:

- `element` (текущий элемент массива),
- `index` (индекс текущего элемента),

Ваша функция `map` должна возвращать новый массив, где каждый элемент
 является результатом вызова функции `callback` на каждом элементе исходного массива.
*/

/*
Пример использования вашей функции:

const numbers = [1, 2, 3, 4, 5]

const doubledNumbers = map(numbers, (element, index) => {
  return element * 2
})

console.log(doubledNumbers) // Должен вывести: [2, 4, 6, 8, 10]
*/

const map = (array, callback) => {
  let a = [];
  for (let index = 0; index < array.length; index++) {
    let g = callback(array[index], index);
    a.push(g);
  }
  return a;
};

// const numbers = [1, 2, 3, 4, 5];

// const doubledNumbers = map(numbers, (element, index) => {
//   return element * 2;
// });

// console.log(doubledNumbers); // Должен вывести: [2, 4, 6, 8, 10]

// const elX3 = (el, i) => {
//   return el * 3;
// };

// console.log(map(numbers, elX3));

// const k = (el, i) => {
//   return el + "a";
// };

// console.log(map(numbers, k));

// let gg = ["a", "bb", "c"];

// const l = (el, i) => {
//   return el.toUpperCase();
// };

// console.log(map(gg, l));

// const f = (el, i) => {
//   if (i > 1) {
//     return el.toUpperCase();
//   } else {
//     return el;
//   }
// };

// console.log(map(gg, f));
