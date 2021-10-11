console.log("Операторы сравнения");


let a = 0;
console.log( Boolean(a) ); // false

let b = "0";
console.log( Boolean(b) ); // true

console.log(a == b); // true! 
/* Равенство преобразует значения, используя числовое преобразование, поэтому "0"
 становится 0. В то время как явное преобразование с помощью Boolean 
 использует другой набор правил*/


//  Каким будет результат этих выражений?

5 > 4 //true
"ананас" > "яблоко" //false
"2" > "12" //true
undefined == null //true
undefined === null //false
null == "\n0\n" //false
null === +"\n0\n" //false