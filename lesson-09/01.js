/*
Напишите свою версию метода `filter`.
Ваша задача — создать функцию `filter`, которая принимает два параметра:

- `array` (массив, над которым выполняется операция),
- `callback` (функция, которая вызывается для каждого элемента массива).

Функция `callback` должна принимать два параметра:

- `element` (текущий элемент массива)
- `index` (индекс текущего элемента)

Функция `filter` должна возвращать новый массив, содержащий только те элементы `array`, 
для которых `callback` возвращает `true`.
*/

/* Пример использования:
const numbers = [1, 2, 3, 4, 5]

const oddNumbers = filter(numbers, (element, index) => {
  return element % 2 !== 0
});

console.log(oddNumbers) // Должен вывести: [1, 3, 5]
*/

const filter = (array, callback) => {
  let ar = [];
  for (let index = 0; index < array.length; index++) {
    if (callback(array[index], index)) {
      ar.push(array[index]);
    }
  }
  return ar;
};

// const numbers = [1, 2, 3, 4, 5];

// const oddNumbers = filter(numbers, (element, index) => {
//   return element % 2 !== 0;
// });

// console.log(oddNumbers);

// const a = [1, 2, 3, 4, 5, 6, 7, 8];
// const newarrr = a.filter((el, i) => {
//   return el > 3;
// });

// console.log(newarrr);
