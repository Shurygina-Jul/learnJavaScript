console.log("Циклы while и for");
// При помощи цикла for выведите чётные числа от 2 до 10.
// for (let i = 2; i < 11; i++) {
//   if (i % 2 == 0) {
//     console.log(i);
//   }
// }

/*Перепишите код, заменив цикл for на while, без изменения поведения цикла.
for (let i = 0; i < 3; i++) {
    alert( `number ${i}!` );
  } */
// let i = 0;
// while (i < 3) {
//   console.log(`number ${i}!`);
//   i++;
// }

/*Напишите цикл, который предлагает prompt ввести число, 
большее 100. Если посетитель ввёл другое число – попросить 
ввести ещё раз, и так далее.
Цикл должен спрашивать число пока либо посетитель
 не введёт число, большее 100, либо не нажмёт кнопку Отмена (ESC).
Предполагается, что посетитель вводит только числа. 
Предусматривать обработку нечисловых строк в этой задаче необязательно. */

// let number;
// do {
//   number = +prompt("Введите число большее 100", "");
// } while (number <= 100 && number);


function simpleNum(n) {
  let flag = true;
  for (let i = 2; i < n; i++) {
    if (n % i == 0) {
      flag = false;
      break; // выйдем из цикла
    }
  }
  console.log(flag);
}
simpleNum(11);
