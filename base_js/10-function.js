console.log("Функции");

/*function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    return confirm('Родители разрешили?');
  }
}
Перепишите функцию, чтобы она делала то же самое, но без if, в одну строку.

Сделайте два варианта функции checkAge:

Используя оператор ?
Используя оператор ||*/

// function checkAge(age) {
//   age > 18 ? true : confirm("Родители разрешили?");
// }

// function checkAge(age) {
//   return age > 18 || confirm("Родители разрешили?");
// }

/*Напишите функцию min(a,b), которая возвращает меньшее из чисел a и b.*/

function min(a, b) {
  return a < b ? a : b;
}

/*Напишите функцию pow(x,n), которая возвращает x в
 степени n. Иначе говоря, умножает x на себя n раз и возвращает результат.
 В этой задаче функция обязана поддерживать только натуральные значения n,
  т.е. целые от 1 и выше.*/

let x = prompt("введите первое число", "");
let n = prompt("введите второе число", "");
n < 1 ? console.log("введите натуральное число") : console.log(pow(x, n));

function pow(x, n) {
  let result = x;
  for (let i = 1; i < n; i++) {
    result *= x;
  }
  return result;
}
