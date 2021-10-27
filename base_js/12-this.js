console.log("методы объекта,this");
/*Создайте объект calculator (калькулятор) с тремя методами:

read() (читать) запрашивает два значения и 
сохраняет их как свойства объекта.
sum() (суммировать) возвращает сумму
 сохранённых значений.
mul() (умножить) перемножает 
сохранённые значения и возвращает результат.*/
let calculator = {
  read() {
    this.x = +prompt("x", "");
    this.y = +prompt("y", "");
  },
  sum() {
    return this.x + this.y;
  },
  mul() {
    return this.x * this.y;
  },
};

calculator.read();
console.log(calculator);
alert(calculator.sum());
alert(calculator.mul());
