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
// console.log(operate("+", 1, 1));

let displayValue = "";
function abc() {
  let values = document.querySelectorAll(".key");
  values.forEach((value) =>
    value.addEventListener("click", function () {
      displayValue += value.innerText;
      console.log(displayValue);
    })
  );
}
abc();
