let num1 = "";
let num2 = "";
let operator = "";
let dot = document.querySelector(".dot");
let showOperator = document.querySelector(".showOperator");
let display = document.querySelector(".display");
let displayValue = "";
function disp() {
  let numbers = document.querySelectorAll(".number");
  numbers.forEach((number) =>
    number.addEventListener("click", function () {
      displayValue += number.innerText;
      if (displayValue === ".") {
        displayValue = "0.";
      }
      display.innerText = displayValue;
      if (displayValue.includes(".")) {
        dot.disabled = true;
      } else {
        dot.disabled = false;
      }
      if (operator != "") {
        num2 = displayValue;
      } else {
        num1 = displayValue;
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
      }
      operator = operatorSym.innerText;
      showOperator.innerText = operator;
      dot.disabled = false;
      displayValue = "";
      num1 = display.innerText;
      if (operator == "%") {
        display.innerText = (num1 / 100).toFixed(10) * 1;
      }
    })
  );
}

function clear() {
  let ac = document.querySelector(".ac");
  ac.addEventListener("click", () => {
    displayValue = "";
    display.innerText = "";
    dot.disabled = false;
    num1 = "";
    num2 = "";
    operator = "";
    showOperator.innerText = "";
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
function operate(operator, num1, num2) {
  switch (operator) {
    case "+":
      display.innerText = (parseFloat(num1) + parseFloat(num2)).toFixed(10) * 1;
      break;
    case "-":
      display.innerText = (num1 - num2).toFixed(10) * 1;
      break;
    case "*":
      display.innerText = (num1 * num2).toFixed(10) * 1;
      break;
    case "/":
      display.innerText = (num1 / num2).toFixed(10) * 1;
      break;
    case "mod":
      display.innerText = (num1 % num2).toFixed(10) * 1;
      break;
  }
}
function equals() {
  equals = document.querySelector(".equals");
  equals.addEventListener("click", () => {
    operate(operator, num1, num2);
    num1 = "";
    num2 = "";
    operator = "";
    displayValue = "";
    showOperator.innerText = "";
    dot.disabled = false;
  });
}

disp();
opr();
clear();
correct();
operate(num1, num2, operator);
equals();
