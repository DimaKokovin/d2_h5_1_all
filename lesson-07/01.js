/*
  Нужно написать функцию capitalizeWords, которая принимает строку и делает так, чтобы каждое слово начиналось с заглавной буквы.
  Например, если передать строку "hello world from javascript", функция должна вернуть "Hello World From JavaScript".

  🧙‍♂️Эту задачу можно решить при помощь цикла for. Рекомендуем реализовать этот вариант решения, как самый эффективный.
  Другой вариант - использовать метод split строк, и метод массива join.
*/

// function capitalizeWords(str) {
//   arr = [];

//   let a = str.split(" ");

//   for (let i = 0; i < a.length; i++) {
//     let b = a[i][0].toUpperCase() + a[i].slice(1);
//     arr.push(b);
//   }
//   // console.log(arr.join(" "));
//   return arr.join(" ");
// }

function capitalizeWords(str) {
  let arr = [];

  let a = str.split(" ");

  for (let i = 0; i < a.length; i++) {
    let b = a[i][0].toUpperCase() + a[i].slice(1);
    arr.push(b);
  }
  // console.log(arr.join(" "));
  return arr.join(" ");
}

capitalizeWords("hello world from javascript");
