// Создание объекта

let myCrazyObject = {
    "name": "Нелепый объект",
    "some array": [7,9, { purpose: "путаница", number: 123 }, 3.3],
    "random animal": "Банановая акула"
};
myCrazyObject;

// Доступ к элементу в объекте

let myAnswer = myCrazyObject["some array"][2]["number"];
myAnswer;