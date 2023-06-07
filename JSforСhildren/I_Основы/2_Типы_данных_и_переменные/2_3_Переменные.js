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

// Инкремент и декремент
// Используются для увеличения++ и уменьшения-- значения числовой переменной на единицу
// Используют соответствующие операторы
// До имени переменной выводит сразу изменённое значение\после выводит пока ещё не изменённое значение

// += и -= и *= и /= - этими операторами можно управлять значением очков в игре

let x = 10;
x = x + 5;
x;

// Строки - набор символов (букв, цифр, знаков пунктуации и пробелов), строки берут в кавычки
// Строки при сложении склеиваются

// Объединение строк

let greeting = "Привет, ";
let myName = "Сергей";
greeting + myName;

// Как узнать длину строки

"Привет".length;

// В любом месте программы, где допустимо использовать число или строку, можно также использовать переменную, в которой хранится число или строка

// Получение отдельного символа строки
// Использовать квадратные скобки [i], i - позиция элемента в строке от 0 до 1

"Привет"[2];

// Получение среза строки

"Привет".slice(1,3);

// Первое число - позиция символа, с которого начинается срез, второе число - позиция символа, который следует за последним символом среза

// Перевод строки в заглавный или строчный регистр

"Привет".toUpperCase();
"Привет".toLowerCase();

// Превращение строчки с разным регистром в строчку заглавная буква + строчные

let sillyString = "эй, кАк ДеЛа?";
sillyString[0].toUpperCase() + sillyString.slice(1).toLowerCase();


