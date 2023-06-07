/*
Значениям можно давать имена, используя переменные;
Переменная похожа на ящичек, в который можно положить один предмет;
Для того чтобы туда что-то положить, нужно заменить прежнее содержимое;
*/
// Cоздание новой переменной через присваивание ( = ) \ можно переприсваивать значения

let Nick = "Сергей";

// Писать let стоит только при создании переменной
// Задача про карамельки

let numberOfSiblings = 1 + 3;
let numberOfCandies = 8;
numberOfCandies / numberOfSiblings;

// Имена переменных
// Не должно быть пробелов, писать каждое слово с заглавной буквы, кроме первого
// Создание новых переменных на основе вычислений

// Каков мой возраст в секундах
let secondsInAMinute = 60;
let minutesInaHour = 60;
let secondsInAHour = secondsInAMinute * minutesInaHour;

let hoursInADay = 24;
let secondsInADay = secondsInAHour * hoursInADay;

let daysInAYear = 365;
let secondInAYear = secondsInADay * daysInAYear;

let age = 29;
age * secondInAYear;
