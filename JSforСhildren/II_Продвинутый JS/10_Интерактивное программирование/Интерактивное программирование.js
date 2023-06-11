// 10.1 - Общее

// Способы управлять тем, когда именно выполняется код - интерактивное программирование
// Интерактивные веб-страницы - которые изменяются со временем и реагируют на действия пользователя

// 10.2 - Отложенное выполнение кода и setTimeout

// Функция setTimeout - запуск по таймеру
// Данная функция принимает два аргумента - срабатывающую функцию и время ожидания перед запуском

let timeUp = function () {
    alert("Время вышло!");
}
setTimeout(timeUp, 3000);

// 10.3 - Отмена действия таймера

let doHomeworkAlarm = function () {
    alert("Эй! Пора делать домашку!");
}
let timeOutId = setTimeout(doHomeworkAlarm, 60000);

// Передаём ID таймера функции (clearTimeoutId(timeoutId))

clearTimeoutId(timeOutId);

// После этого setTimeout не будет вызывать функцию doHomeworkAlarm

// 10.4 - Многократный запуск кода и setInterval

// Функция вызывает переданную ей функцию через заданные интервалы
// Функция принимает два аргумента - функцию и интервал времени в , мс

let counter = 1;
let printMessage = function () {
    console.log("Ты смотришь в консоль уже " + counter + " сек");
    counter++;
};
let intervalId = setInterval(printMessage, 5000);
clearInterval(intervalId);

// 10.5 - Анимация элементов с помощью setInterval


