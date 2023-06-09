// ООП -  способ проектирования и написания кода, когда все важные части программы являются объектами.

// Простой объект - состоит из свойств, которые представляют собой пары - ключ-значение.

// let dog = {
//     name: "Оладушек",
//     legs: 4,
//     isAwesome: true
// }

// Доступ к значениям внутри объекта

// dog.name;

// Задание нового свойства

// dog.age = 6;

// Добавление к объектам новых методов

// Функция, которая хранится в свойстве объекта называется - метод

// Как создавать собственные методы - способ через точечную нотацию

// dog.bark = function () {
//     console.log("Гав-гав! Меня зовут " + this.name + "!");
// };

// dog.bark();

// Ключевое слово this
// Через this.name получаем значение, сохранённое в свойстве name, этого объекта
// Подробнее
// Используется в теле метода, чтобы обратиться к объекту, для которого этот метод вызывается

// Используем один метод с разными объектами

// let speak = function () {
//     console.log(this.sound + "! Меня зовут " + this.name + "!");
// };

// let cat = {
//     sound: "Мяу",
//     name: "Варежка",
//     speak: speak
// };

// cat.speak();

// //

// let pig = {
//     sound: "Хрю",
//     name: "Чарли",
//     speak: speak    
// };

// let horse = {
//     sound: "И-го-го",
//     name: "Мэри",
//     speak: speak    
// };

// pig.speak();
// horse.speak();

// Конструкторы объектов позволяют задавать общие методы и свойства более удобным способом

// Создание объектов при помощи конструктора - функции, которая создаёт объекты, давая им набор заранее определённых свойств и методов.
// При помощи конструктора можно создавать любое количество одинаковых объектов.

// Устройство конструктора (синтаксис)

// Вызывая конструктор создаётся объект, с добавлением ему нужных свойств
// Ключевое слово new имя конструктора (с большой буквы, для отличия от обычных функций) и скобки

// Создание конструктора

var Car = function (x, y) {
    this.x = x;
    this.y = y;
};

// Рисуем машины

var drawCar = function (car) {
    var carHtml = '<img src="1.png">';

    var carElement = $(carHtml);

    carElement.css({
        position: "absolute",
        left: car.x,
        top: car.y
    });

    $("body").append(carElement);
};

// Проверка функции drawCar

var tesla = new Car(20,20);
var nissan = new Car(100,200);
drawCar(tesla);
drawCar(nissan);

// Настройка объктов через прототипы

// Прототипы JS - это механизмяя. который упрощает использование методов разными объектами
// У всех конструкторов есть свойство prototype, к которому можно добавлять методы; любой метод, добавленный свойству prototype, будет доступен всем объектам, которые созданы с помощью этого конструктора. 

// Пример: Имя конструктора.prototype.имя метода = function () {тело метода}

// Добавление метода draw к прототипу Car

