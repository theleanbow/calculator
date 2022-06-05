window.num1 = "";
window.num2 = "";
window.operator = "";

let display = document.querySelector(".display");
let displayValue = "";
function disp() {
  let numbers = document.querySelectorAll(".number");
  numbers.forEach((number) =>
    number.addEventListener("click", function () {
      displayValue += number.innerText;
      display.innerText = displayValue;
      if (window.operator != "") {
        window.num2 = displayValue;
      } else {
        window.num1 = displayValue;
      }
    })
  );
}
let operatorSym = "";
function opr() {
  let operators = document.querySelectorAll(".operator");
  operators.forEach((operatorSym) =>
    operatorSym.addEventListener("click", function () {
      if (num2 != "") {
        operate(operator, num1, num2);

        num1 = display.innerText;
        num2 = "";
      }
      window.operator = operatorSym.innerText;
      displayValue = "";
    })
  );
}

function clear() {
  let ac = document.querySelector(".ac");
  ac.addEventListener("click", () => {
    displayValue = "";
    display.innerText = "";
    num1 = "";
    num2 = "";
    operator = "";
  });
}
function correct() {
  let correct = document.querySelector(".correct");
  correct.addEventListener("click", () => {
    displayValue = displayValue.slice(0, displayValue.length - 1);
    display.innerText = displayValue;
    num1 = displayValue;
  });
}

function add(num1, num2) {
  display.innerText = parseFloat(num1) + parseFloat(num2);
}
function subtract(num1, num2) {
  display.innerText = num1 - num2;
}
function multiply(num1, num2) {
  display.innerText = num1 * num2;
}
function divide(num1, num2) {
  display.innerText = num1 / num2;
}

function operate(operator, num1, num2) {
  if (Number.isNaN(display.innerText)) {
    display.innerText = num1;
  }
  switch (operator) {
    case "+":
      add(num1, num2);
      break;
    case "-":
      subtract(num1, num2);
      break;
    case "*":
      multiply(num1, num2);
      break;
    case "/":
      divide(num1, num2);
      break;
  }
}

function main() {
  disp();
  opr();
  clear();
  correct();
  operate(num1, num2, operator);
  equals();
}
function equals() {
  equals = document.querySelector(".equals");
  equals.addEventListener("click", () => {
    operate(operator, num1, num2);
  });
}

main();
