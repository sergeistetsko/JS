// 9.1 - DOM и jQuery

// DOM - Средство, позволяющее JS взаимодействовать с содержимым веб-страниц
// Объектная модель документа
// JQuery - инструмент, содержащий набор функций, которые позволяют найти нужные элементы и произвести с ними определённые действия

// 9.2 - Поиск элементов DOM

// Древо DOM - так выглядит структура элементов

// Идентификация элементов по id

let headingElement = document.getElementById("main-heading");
console.log(headingElement.innerHTML);
let newHeadingText0 = prompt("Введите новый заголовок:");
headingElement.innerHTML = newHeadingText0;

// 9.3 - Работа с деревом DOM через jQuery

// jQuery - набор инструмкнтов (функций), упрощающих работу с DOM-элементами
// Подключив её можно использовать дополнительные функции и методы

// Подключаем jquery // Меняем текст заголовка с помощью jquery

let newHeadingText = prompt("Введите новый заголовок:");
$("#main-heading").text(newHeadingText);

// Создание новых элементов через jquery

$("body").append("<p>Это новый параграф</p>");

// Добавление нескольких элементов через цикл for

for (let i=0; i<3; i++) {
    let hobby = prompt("Назови одно из своих хобби");
    $("body").append("<p>" + hobby + "</p>");
}

// 9.4 - Анимация элементов

$("h1").fadeOut(3000);

// 9.5 Цепной вызов и анимация

$("h1").text("Этот текст скоро исчезнет").fadeOut(3000); // - Цепной вызов нескольких методов подряд

$("h1").fadeOut(3000).fadeIn(2000); // - исчезание и появление объекта

$("h1").slideUp(3000).slideDown(2000); // - исчезание вверх и появление сверху

// 9.6 - Попробуйте

$("body").append("<p>Это новый параграф</p>");
$("h1").slideUp(1000).slideDown(1000);

$("h1").fadeOut(1000);
$("h1").fadeIn(1000);

$("h1").show(1000);
$("h1").hide(1000);

// 9.7 - Упражнения

// Упражнение 1 - Перечислите своих друзей (и сделайте их лучшими)

let arr = ["Андрей", "Александр", "Дмитрий"];

$("#main-heading").text("Мои друзья");

for (i = 0; i < arr.length; i++) {
    $("body").append("<p>" + arr[i] + "</p>").hide().fadeIn(2000);
}

$("p").append(" лучший!");

// Упражнение 2 - Мигающий заголовок

$("").fadeOut(1000).fadeIn(1000).fadeOut(1000).fadeIn(1000).fadeOut(1000).fadeIn(1000).fadeOut(1000).fadeIn(1000).fadeOut(1000).fadeIn(1000);

let k = 1000;

for (i = 0; i <= 5; i++) {
    $("").fadeOut(k*(i+1)).fadeIn(k*(i+1));
}

// Упражнение 3 - Отложенная анимация

    $("").fadeOut(7000).delay(5000).fadeIn(2000);

// Упражнение 4 - Метод fadeTo()

    $("h1").fadeTo(2000, 0.5); // Устанавливает прозрачность, отложенно