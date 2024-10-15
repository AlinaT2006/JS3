let num = +prompt("Enter a number");
let sum = 0;

for (let i = 2; i < num; i++) {
  let result = i % 2 == 0 ? console.log((sum += i)) : false;
}

console.log("Сумма всех четных чисел до " + num + " равна: " + sum);
