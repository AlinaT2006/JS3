let num = +prompt("Введите число");
let pow = +prompt("Введите степень");

while (num !== 0 && !isNaN(num)) {
  while (pow === 0 || isNaN(pow)) {
    pow = 2;
  }
  alert(
    "Число - " +
      num +
      "; " +
      "Степень - " +
      pow +
      "; " +
      "Ответ - " +
      num ** pow
  );
  break;
}
