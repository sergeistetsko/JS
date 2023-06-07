// true - истина, false - ложь
// логические операции объединяются булевыми операторами, их результат - другое булево значение
// Три основных булевых оператора - это && - И, || - или, ! - не;
// & - И, нужно использовать с двумя булевыми значениями, чтобы узнать равны ли они оба true, если одно из них false, то будет false;
// Можно совмещать логические операции
let isWeekend = false;
let hadShower = true;
let hasApple = false;
let hasOrange = true;

let shouldGoToSchool = ! isWeekend && hadShower && (hasApple || hasOrange);
shouldGoToSchool;


// Сравнение чисел при помощи булевых значений

// > - Больше

let height = 155;
let heightRestriction = 150;
height > heightRestriction;

// >= - Больше/равно

height = 150;
heightRestriction = 150;
height >= heightRestriction;

// === - проверка двух значений на равенство

let mySecretNumber = 5;
let chicoGuess = 3;
mySecretNumber === chicoGuess;
let harpoGuess = 7;
mySecretNumber === harpoGuess;
let grouchoGuess = 5;
mySecretNumber === grouchoGuess;

// == - проверка значений, не учитывая тип данных (число = число-строка)

// Пускать ли зрителя на фильм с 12 лет и старше, наличие взрослого

let age = 11;
let accompanied = true;

(age < 12 || accompanied) || age >= 12;

// undefined и null - оба означают пусто
// undefined - не может найти другого значения
// null - явно обозначить что тут пусто
