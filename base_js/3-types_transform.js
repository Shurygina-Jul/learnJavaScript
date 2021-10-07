console.log("Преобразование типов");

// Строковое преобразование
let value = true;
console.log(typeof value); // boolean

value = String(value); // теперь value это строка "true"
console.log(typeof value); // string

// Численное преобразование
console.log("6" / "2"); // 3, строки преобразуются в числа

let str = "123";
console.log(typeof str); // string

let num = Number(str); // становится числом 123
console.log(typeof num); // number

// Логическое преобразование

console.log(Boolean(1)); // true
console.log(Boolean(0)); // false
console.log(Boolean("Привет!")); // true
console.log(Boolean("")); // false
console.log(Boolean("0")); // true
console.log(Boolean(" ")); // пробел это тоже true (любая непустая строка это true)
