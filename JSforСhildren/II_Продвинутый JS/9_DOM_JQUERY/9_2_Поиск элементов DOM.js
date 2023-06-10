// Древо DOM - так выглядит структура элементов

// Идентификация элементов по id

let headingElement = document.getElementById("main-heading");
console.log(headingElement.innerHTML);
let newHeadingText = prompt("Введите новый заголовок:");
headingElement.innerHTML = newHeadingText;