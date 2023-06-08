// В объектах все значения подстроковые - пары (ключ : значение)

let obj = {
    "color": "Tomato",
    "color2": "Tomato2",
    "color3": "Tomato3",
    "color4": "Tomato4",
    "color5": "Tomato5",
};

// Доступ к значению объекта через ключ\квадратные скобки либо точечная нотация

obj["color"];
obj.color;

// Показывает все ключи объекта

Object.keys(obj);

// Замена значения объекта

obj["color6"] = "Tomato6";