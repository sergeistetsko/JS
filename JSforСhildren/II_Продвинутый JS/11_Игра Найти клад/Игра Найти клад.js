// Проектирование игры

// Разбор структуры игры

// 1. Создаём страницу игры и местом, куда будут выводиться сообщения для игрока
// 2. Выбрать на карте случайную точку, где спрятан клад
// 3. Создать обработчик кликов. Каждый раз, когда игрок кликает по карте, обработчик кликов должен:
    // Увеличить счётчик кликов на 1.
    // Вычислить, насколько далеко место клика от места, где спрятан клад.
    // Отобразить на странице сообщение для игрока - горячо или холодно.
    // Поздравить игрока, если он кликнул по кладу или вблизи него, и сообщить, сколько кликов ушло на поиски.

// Создаём веб-страницу с HTML-кодом

// Выбор случайного места для клада

// Получение случайных значений

// Вызов данной функции вернёт случайное число от 0 до 399

let getRandomNumber = function (size) {
    return Math.floor(Math.random()*size);
};

// Вычисляем расстояние от клика до клада

let getDistance = function (event, target) {
    let diffX = event.offsetX - target.x;
    let diffY = event.offsetY - target.y;
    return Math.sqrt((diffX*diffX) + (diffY*diffY));
};

// Сообщаем игроку, насколько он близок к цели

let getDistanceHint = function (distance) {
    if (distance < 10) {
        return "Обожжёшься!";
    } else if (distance < 20) {
        return "Очень горячо";
    } else if (distance < 40) {
        return "Горячо";
    } else if (distance < 80) {
        return "Тепло";
    } else if (distance < 160) {
        return "Холодно";
    } else if (distance < 320) {
        return "Очень холодно";
    } else {
        return "Замёрзнешь!";
    }
}; 

// Задаём координаты клада

let width = 400;
let height = 400;
let clicks = 0;

let target = {
    x : getRandomNumber(width),
    y : getRandomNumber(height)
};

// Обработчик кликов - функция, которая будет вызываться каждый раз, когда игрок кликнет по карте;

$("#map").click(function (event) {
    // Здесь будет код обработчика
    clicks++; // увеличение счётчика
// Следующий код вычислит расстояние, получит нужную строку с сообщением и отобразит эту строку

let distance = getDistance(event, target);
let distanceHint = getDistanceHint(distance);
$("#distance").text(distanceHint);

// Проверка на выигрыш

if (distance < 8) {
    alert("Клад найден! Сделано кликов: " + clicks);
};
});

// Конец










