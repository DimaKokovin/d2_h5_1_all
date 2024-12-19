/*
Напишите функцию `includesElement`, которая принимает массив и элемент,
а затем возвращает булево значение, указывающее, содержится ли данный элемент в массиве. 
Для перебора элементов используйте цикл `for`.

Входные данные:
- `array`: Массив, в котором нужно проверить наличие элемента. Массив может содержать любые типы данных.
- `element`: Элемент, наличие которого нужно проверить в массиве.

Выходные данные:
- `true`: Если элемент найден в массиве.
- `false`: Если элемент отсутствует в массиве.

Пример использования:
includesElement([1, 2, 3], 2)  // должен вернуть `true`.
*/

// function includesElement(array, element) {
//   for (let index = 0; index <= array.length; index++) {
//     if (array[index] === element) {
//       // console.log(array[0]);

//       // console.log(array[index], element, array.length);
//       return true;
//     } else if (array[index] === undefined) {
//       // console.log(array[index], element);
//       return false;
//     }
//     // } else {
//     //   // console.log(array[index], element);
//     //   // return false;
//     // }
//   }
// }

// console.log(includesElement([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 10));
