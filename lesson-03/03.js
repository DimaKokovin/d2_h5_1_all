// Разработайте функцию findLargest, которая принимает три числа и возвращает наибольшее из них.

function findLargest(number1, number2, number3) {
  if (number1 > number2) {
    if (number1 > number3) {
      return number1;
    } else {
      return number3;
    }
  } else if (number1 < number2) {
    if (number2 < number3) {
      return number3;
    } else {
      return number2;
    }
  }
}
