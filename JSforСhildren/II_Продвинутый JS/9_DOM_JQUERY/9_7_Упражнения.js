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