/*
 * Напишите функцию isNumeric, которая принимает строку и проверяет, 
представляет ли эта строка корректное числовое значение.
 * Если строка является числом, функция должна возвращать true, в противном случае - false.
 */

// function isNumeric(str) {
//   if (Number.isInteger(str)) {
//     return true;
//   } else {
//     return false;
//   }

//   // your code
// }

// function isNumeric(str) {
//   if (Number(str)) {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log(isNumeric("12.3"));
// console.log(isNumeric("123")) // Ожидаемый результат: true
// console.log(isNumeric("12.3")) // Ожидаемый результат: true
// console.log(isNumeric("123abc")) // Ожидаемый результат: false
// console.log(isNumeric("abc")) // Ожидаемый результат: false
// console.log(isNumeric(" ")) // Ожидаемый результат: false
