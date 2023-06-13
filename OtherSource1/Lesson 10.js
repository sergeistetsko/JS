// Документация кода на JSDoc и Исключения

/**
 * Функция преобразует строку с временем в минуты
 * @param {string} time время в виде строки, например "02:08". Может быть в диапазоне от "00:00" до "23:59".
 * @return {number} целое число в минутах. Например time="02:08" вернёт 128.
 */

function timeToMinute(time) {

}
timeToMinute() // можно создать документацию с пояснениями для других разработчиков (или для себя)

// Исключения и перехват ошибок + смотри дополнительные источники в файлике

function timeToMinute(time) {
try {
    let hour = +time.split(":")[0]
let minute = +time.split(":")[1]
if (!(hour>=0 && hour<=23) || !(minute>=0 && minute<=59)) {
    throw new RangeError("Аргумент должен быть в формате 'hh:mm' - 'hh' должен быть от 0 до 23, а 'mm' должен быть от 0 до 59. 'hh' и 'mm' должны быть числами и разделяться знаком ':'")
}
return hour*60+minute
} catch {
    console.log(error)
}
}
console.log(timeToMinute("02:08"))