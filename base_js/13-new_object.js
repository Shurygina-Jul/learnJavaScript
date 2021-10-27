// Создайте функцию-конструктор Calculator,
//  который создаёт объекты с тремя методами

// function Calc() {
//   this.read = function () {
//     this.x = +prompt("x", "");
//     this.y = +prompt("y", "");
//   };
//   this.sum = function () {
//     return this.x + this.y;
//   };
// }
// let calc = new Calc();
// calc.read();
// console.log("Сумма чисел: " + calc.sum());

//Напишите функцию-конструктор Accumulator(startingValue).
// Объект, который она создаёт, должен уметь следующее:
// Хранить «текущее значение» в свойстве value.
//Начальное значение устанавливается в аргументе
// конструктора startingValue.
//Метод read() использует prompt для получения
// числа и прибавляет его к свойству value.

// function Accumulator(startingValue) {
//   this.value = startingValue;
//   this.read = function () {
//     this.value += +prompt("Введите число,которое мы прибавим", "");
//   };
// }
// let accumulator = new Accumulator(1);
// accumulator.read();
// console.log("Сумма чисел равна: " + accumulator.value);


