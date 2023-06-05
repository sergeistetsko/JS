// alert("Текст");

// let age = prompt("Скажите, сколько Вам лет ?");


// if (age != null) {
//     alert("Мой возраст "+ age);
// } else {
//     alert("Вы нажали отмена");
// }

// if (confirm("Удалить ваш аккаунт?")) {
//     alert("Удалено");
// } else {
//     alert("Отменено");
// };

// confirm("Удалить ваш аккаунт?") ? alert("Удалено") : alert("Отменено");

let age = prompt("Введите ваш возраст");
if (age < 18) {
    alert("Мой возраст меньше 18")
} else if (age > 18) {
    alert("Мне больше 18")    
} else if (age == 18) {
    alert("Мне 18")     
};