console.log("Логические операторы");
// || (ИЛИ), && (И) и ! (НЕ).

// // Или
// console.log(true || true); // true
// console.log(false || true); // true
// console.log(true || false); // true
// console.log(false || false); // false только когда оба false

// // Находит первое истинное значение

// console.log(1 || 0); // 1
// console.log(true || "no matter what"); // true
// console.log(null || 1); // 1 (первое истинное значение)
// console.log(null || 0 || 1); // 1 (первое истинное значение)
// console.log(undefined || null || 0); // 0 (поскольку все ложно, возвращается последнее значение)

// // Первое истинное значение

// let currentUser = null;
// let defaultUser = "John";
// let myName = currentUser || defaultUser || "unnamed";
// console.log(myName); // выбирается "John" – первое истинное значение

// // Сокращённое вычисление.
// let x;
// true || (x = 1);
// console.log(x); // undefined, потому что (x = 1) не вычисляется

// let y;
// false || (y = 1);
// console.log(y); // 1

// // && (И)

// console.log(true && true); // true если оба тру
// console.log(false && true); // false
// console.log(true && false); // false
// console.log(false && false); // false

// let hour = 12;
// let minute = 30;

// if (hour == 12 && minute == 30) {
//   console.log("The time is 12:30");
// }

// // И «&&» находит первое ложное значение

// // Если первый операнд истинный,
// // И возвращает второй:
// console.log(1 && 0); // 0
// console.log(1 && 5); // 5

// // Если первый операнд ложный,
// // И возвращает его. Второй операнд игнорируется
// console.log(null && 5); // null
// console.log(0 && "no matter what"); // 0

// console.log(1 && 2 && null && 3); // null  возвратится первое «ложное» значение, на котором остановились вычисления.
// console.log(1 && 2 && 3); // 3 когда все значения верны, возвращается последнее

// //Действие в правой части && выполнится только в том случае,
// // если до него дойдут вычисления.
// // То есть, alert сработает, если в левой части (x > 0) будет true.
// //Аналог

// // let x = 1;

// // if (x > 0) {
// //   alert( 'Greater than zero!' );
// // }
// let x = 1;
// x > 0 && alert("Greater than zero!");

// //! (НЕ)
// console.log(!true); // false
// console.log(!0); // true
// // В частности, двойное НЕ используют для преобразования значений к логическому типу:

// console.log(!!"non-empty string"); // true
// console.log(!!null); // false

// console.log(Boolean("non-empty string")); // true
// console.log(Boolean(null)); // false

// //Задачи

// //Что выведет код ниже?

// console.log(null || 2 || undefined); //2
// alert(alert(1) || 2 || alert(3)); //сначала 1 потом 2

// alert(1 && null && 2); //null
// alert(alert(1) && alert(2)); //сначала 1 потом undefined
// alert(null || (2 && 3) || 4); //3

/*Напишите условие if для проверки, что переменная age находится в диапазоне между 14 и 90 включительно.
«Включительно» означает, что значение переменной age может быть равно 14 или 90*/
// let age = 15;
// if (age >= 14 && age <= 90) console.log("от 14 до 90");

/* Напишите условие if для проверки, что значение переменной age НЕ находится в диапазоне 14 и 90 включительно.
Напишите два варианта: первый с использованием оператора НЕ !, второй – без этого оператора*/

// let age = 13;
// if (!(age >= 14 && age <= 90)) console.log("Не диапазоне от 14 до 90");

// let age = 13;
// if (age < 14 || age > 90) console.log("Не диапазоне от 14 до 90");

// Какие из перечисленных ниже alert выполнятся?
// Какие конкретно значения будут результатами выражений в условиях if(...)?

// if (-1 || 0) alert("first"); //true +
// if (-1 && 0) alert("second"); //false -
// if (null || (-1 && 1)) alert("third"); //true +

/*Напишите код, который будет спрашивать логин с помощью prompt.
Если посетитель вводит «Админ», то prompt запрашивает пароль, если ничего
 не введено или нажата клавиша Esc – показать «Отменено», 
 в противном случае отобразить «Я вас не знаю».
Пароль проверять так:

Если введён пароль «Я главный», то выводить «Здравствуйте!»,
Иначе – «Неверный пароль»,
При отмене – «Отменено»*/

// let login = prompt("Enter your login", "");
// if (login == "Admin") {
//   let password = prompt("Enter your password", "");

//   if (password == "Я главный") {
//     console.log("Здравствуйте!");
//   } else if (!password) { //пустая строка и null для if это false
//     console.log("Отменено");
//   } else {
//     console.log("Неверный пароль");
//   }
// } else if (!login) {
//   console.log(" Отменено");
// } else {
//   console.log("Вы кто такие? я вас не знаю!");
// }


//Оператор объединения с null '??'