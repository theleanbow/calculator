let display = document.querySelector(".display");
let displayValue = "";
function num() {
  let numbers = document.querySelectorAll(".number");
  numbers.forEach((number) =>
    number.addEventListener("click", function () {
      displayValue += number.innerText;
      display.innerHTML = displayValue;
    })
  );
}
let operatorSym = "";
function opr() {
  let operators = document.querySelectorAll(".operator");
  operators.forEach((operator) =>
    operator.addEventListener("click", function () {
      operatorSym = operator.innerText;
      console.log(operatorSym);
    })
  );
}

function add(num1, num2) {
  return num1 + num2;
}
function subtract(num1, num2) {
  return num1 - num2;
}
function multiply(num1, num2) {
  return num1 * num2;
}
function divide(num1, num2) {
  if (num2 === 0) return "Error";
  return num1 / num2;
}

function operate(operator, num1, num2) {
  // console.log(operator, num1, num2); //works till here
  switch (operator) {
    case "+":
      return add(num1, num2);
    case "-":
      return subtract(num1, num2);
    case "*":
      return multiply(num1, num2);
    case "/":
      return divide(num1, num2);
  }
}
opr();
num();
