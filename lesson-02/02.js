/*
* Напишите код, который симулирует бросок двух шестигранных игральных кубиков и определяет, выпал ли выигрышный дубль.
* В переменные dice1 и dice2 должны присваиваться случайные целые числа от 1 до 6.
* Дубль считается выигрышным, если на обоих дайсах выпало одно и то же число, и это число больше 3.
* Полученное булево значение сохраните в переменной isWinningDouble

* Для успешного прохождения тестов не меняйте названия переменных!
*/
let number = Math.floor(1 + Math.random() * 7);
let number2 = Math.floor(1 + Math.random() * 7);

let dice1 = number; // your code
let dice2 = number2; // your code
let isWinningDouble; // your code

console.log("Первый бросок: " + dice1);
console.log("Второй бросок: " + dice2);

// if (dice1 > 3 && dice2 > 3) {
if ((isWinningDouble = dice1 > 3 && dice2 > 3 && dice1 === dice2)) {
  console.log("Выигрышный дубль!");
} else {
  console.log("Не выигрышный дубль.");
}
// }

// console.log("Первый бросок: " + dice1);
// console.log("Второй бросок: " + dice2);
// if (isWinningDouble) {
//   console.log("Выигрышный дубль!");
// } else {
//   console.log("Не выигрышный дубль.");
// }
