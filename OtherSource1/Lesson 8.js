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

// Методы объектов - функции, делающие что-то с конкретным объектом

let obj = {
    name: "Petr",
    age: 18,
    hello() {
        console.log("Меня зовут "+this.name);
    }
}

obj.hello();

// Функции выполняют какие-то алгоритмы и выполняются в любых других ситуациях

// Сортировка массива

let arr = [1,3,5,3,4,2];
arr.sort(function(a,b) {
    return a-b;
})
console.log(a-b);

// Создадим функцию Фибоначчи

function fibonachi(count) {
    let fib = [];
    for(let i = 0; i<count; i++) {
        if (i==0) fib[i] = 1;
        else if (i==1) fib[i] = 2;
        else fib[i] = fib[i-2] + fib[i-1];
    }
    return fib;
}
let f = fibonachi(10);