// Функции позволяют писать фрагмент кода и использовать его много раз
// Сортировка массива
function printText() {
    console.log("Hello")
};
printText(); // вызов функции

function printText2(name, age) {
    console.log("Hello, my name is "+ name +", Age: " + age)
};
printText2("Сергей",29); // вызов функции

// Функция возвращает значение функции через return

function printText3(name, age) {
    return "Hello, my name is "+ name +", Age: " + age;
}

let name = "Sergei";
let age = 29;

let res = alert(printText3(name, age));
console(res);