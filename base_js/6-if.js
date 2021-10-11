console.log("Условное ветвление: if, '?'");

/*Число 0, пустая строка "", null, undefined и NaN становятся false. Из-за этого их называют «ложными» («falsy») значениями.
Остальные значения становятся true, поэтому их называют «правдивыми» («truthy»)*/
let age = 23;
let accessAllowed = age > 18 ? true : false;

let message =
  age < 3
    ? "Здравствуй, малыш!"
    : age < 18
    ? "Привет!"
    : age < 100
    ? "Здравствуйте!"
    : "Какой необычный возраст!";
console.log(message);

let company = prompt("Какая компания создала JavaScript?", "");
company == "Netscape" ? console.log("Верно!") : console.log("Неправильно.");

/*Используя конструкцию if..else, напишите код, 
который будет спрашивать: „Какое «официальное» название JavaScript?“
Если пользователь вводит «ECMAScript», то показать: «Верно!», 
в противном случае – отобразить: «Не знаете? ECMAScript!»*/

let name = prompt("Какое «официальное» название JavaScript?", "");
name == "ECMAScript"
  ? console.log("Верно!")
  : console.log("Не знаете? ECMAScript!");

/* напишите код, который получает число через prompt, а затем выводит в alert:

1, если значение больше нуля,
-1, если значение меньше нуля,
0, если значение равно нулю.
Предполагается, что пользователь вводит только числа.*/

let number = prompt("Введите число", "");
if (number > 0) {
  console.log(1);
} else if (number < 0) {
  console.log(-1);
} else {
  console.log(0);
}

/*Перепишите конструкцию if с использованием условного оператора '?':

let result;

if (a + b < 4) {
  result = 'Мало';
} else {
  result = 'Много';
}*/
let a = 6;
let b = 23;
console.log((result = a + b < 4 ? "Мало" : "Много"));

/*Перепишите if..else с использованием нескольких операторов '?'.


let message;
if (login == 'Сотрудник') {
  message = 'Привет';
} else if (login == 'Директор') {
  message = 'Здравствуйте';
} else if (login == '') {
  message = 'Нет логина';
} else {
  message = '';
}*/
let login = "Сотрудник";
let message =
  login == "Сотрудник"
    ? "Привет"
    : login == "Директор"
    ? "Здравствуйте"
    : login == ""
    ? "Нет логина"
    : "";
console.log(message);
