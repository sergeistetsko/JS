// Хранение информации о фильмах
var movies = {
    "В поисках Немо": {
        releaseDate: 2003,
        duration: 100,
        actors: ["Альберт Брукс", "Эллен Дедженерес", "Александр Гоулд"],
        format: "DVD"
    },
    "Звёздные войны: Эпизод VI - Возвращение джедая": {
        releaseDate: 1983,
        duration: 134,
        actors: ["Марк Хэммил", "Харрисон Форд", "Кэрри Фишер"],
        format: "DVD"
    },
    "Гарри Поттер и Кубок огня": {
        releaseDate: 2005,
        duration: 157,
        actors: ["Дэниел Рэдклиф", "Эмма Уотсон", "Руперт Гринт"],
        format: "Blu-ray"
    },
};
var findingNemo = movies["В поисках Немо"];
findingNemo.duration;
findingNemo.format;
var cars = {
    releaseDate: 2006,
    duration: 117,
    actors: ["Оуэн Уилсон", "Бонни Хант", "Пол Ньюман"],
    format: "Blu-ray"
};
movies["Тачки"] = cars;
Object.keys(movies);