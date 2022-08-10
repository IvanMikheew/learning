console.log("Сообщение");
console.info("Сообщение");
let number = + prompt("Введите число", "1");
if (isNaN(number)) {
    console.error("Ошибка");
}
console.warn("Предупреждение");