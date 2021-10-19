console.log("объекты");

let user = {};
user.name = "Тор";
user.surname = "Рагнарек";
user.name = "Локи";
delete user.name;
console.log(user);

//Напишите функцию isEmpty(obj), которая возвращает true,
//если у объекта нет свойств, иначе false.
function isEmpty(obj) {
  let count = 0;
  for (let key in obj) {
    count++;
  }
  count == 0 ? console.log(true) : console.log(false);
}
isEmpty(user);

/* У нас есть объект, в котором хранятся зарплаты нашей команды:

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}
Напишите код для суммирования всех зарплат 
и сохраните результат в переменной sum.
 Должно получиться 390.

Если объект salaries пуст, то результат должен быть 0.*/
let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
};
const sum = (obj) => {
  let result = 0;
  for (let key in obj) {
    result += obj[key];
  }
  console.log(`Сумма всех зарплат равна ${result} денег`);
};
sum(salaries);

/* Создайте функцию multiplyNumeric(obj),
 которая умножает все числовые свойства объекта obj на 2.*/
let menu = {
  width: 200,
  height: 300,
  title: "My menu",
};

const multiplyNumeric = (obj) => {
  for (let key in obj) {
    if (typeof obj[key] == "number") {
      obj[key] *= 2;
    }
  }
};

let multiplyNum = (obj) => {
  Object.keys(obj).map(function (key, index) {
    if (!obj.hasOwnProperty(index)) {
      if (typeof obj[key] == "number") {
        obj[key] *= 2;
      }
    }
  });
};
