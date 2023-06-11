// 10.1 - Общее

// Способы управлять тем, когда именно выполняется код - интерактивное программирование
// Интерактивные веб-страницы - которые изменяются со временем и реагируют на действия пользователя

// 10.2 - Отложенное выполнение кода и setTimeout

// Функция setTimeout - запуск по таймеру
// Данная функция принимает два аргумента - срабатывающую функцию и время ожидания перед запуском

// let timeUp = function () {
//     alert("Время вышло!");
// }
// setTimeout(timeUp, 3000);

// 10.3 - Отмена действия таймера

// let doHomeworkAlarm = function () {
//     alert("Эй! Пора делать домашку!");
// }
// let timeOutId = setTimeout(doHomeworkAlarm, 60000);

// Передаём ID таймера функции (clearTimeoutId(timeoutId))

// clearTimeoutId(timeOutId);

// После этого setTimeout не будет вызывать функцию doHomeworkAlarm

// 10.4 - Многократный запуск кода и setInterval

// Функция вызывает переданную ей функцию через заданные интервалы
// Функция принимает два аргумента - функцию и интервал времени в , мс

// let counter = 1;
// let printMessage = function () {
//     console.log("Ты смотришь в консоль уже " + counter + " сек");
//     counter++;
// };
// let intervalId = setInterval(printMessage, 5000);
// clearInterval(intervalId);

// 10.5 - Анимация элементов с помощью setInterval

// let leftOffset = 0;
// let moveHeading = function () {
//     $("#heading").offset({left : leftOffset });
//     leftOffset++ ;
//     if (leftOffset > 200) {
//         leftOffset = 0;
//     }
// };
// setInterval(moveHeading, 30)

// 10.6 - Реакция на действия пользователя

// Каждый раз, когда вы совершаете действие - кликаете, вводите текст или двигаете мышку, - в браузере возникает нечто под названием =событие=
// На события можно подписываться, добавляя обработчик события к элементу, в котором это событие происходит
// Добавляя обработчик, вы говорите JS: если событие произойдёт эту функцию

// Реакция на клики

// click - событие, возникающее в браузере, когда пользователь кликает по элементу в браузере, при помощи jQuery можно задать этому событию обработчик.

// let clickHandler = function (event) {
//     console.log("Клик! " + event.pageX + " " + event.pageY);
// };
// $("h1").click(clickHandler);

// Событие mousemove

// $("html").mousemove(function (event) {
//     $("#heading").offset({
//        left: event.pageX,
//        top: event.pageY 
//     });
// });   

// Упражнения

