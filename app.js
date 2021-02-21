const previousOutput = document.querySelector(".previousOutput");
const currentOutput = document.querySelector(".currentOutput");
const numberButtons = document.querySelectorAll(".numberButtons");
const operations = document.querySelectorAll(".operation");
const equals = document.querySelector(".equals");

let operrand1 = "";
let operrand2 = "";
let operation = null;
let result = null;

numberButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    let value = e.target.innerHTML;
    if (!operation) {
      operrand1 = parseInt(operrand1 + value);
      currentOutput.innerHTML = operrand1;
    } else {
      operrand2 = parseInt(operrand2 + value);
      previousOutput.innerHTML = operrand1 + operation;
      currentOutput.innerHTML = operrand2;
    }
  });
});

operations.forEach((op) => {
  op.addEventListener("click", (e) => {
    if (!operation) {
      operation = e.target.innerHTML;
      currentOutput.innerHTML = operrand1 + operation;
    } else {
      calculate();
      operation = e.target.innerHTML;
      currentOutput.innerHTML = operrand1 + operation;
    }
  });
});

equals.addEventListener("click", () => {
  calculate();
});

const calculate = () => {
  switch (operation) {
    case "+":
      result = operrand1 + operrand2;
      break;
    case "-":
      result = operrand1 - operrand2;
      break;
    case "x":
      result = operrand1 * operrand2;
      break;
    case "/":
      result = operrand1 / operrand2;
      break;
  }
  if (result) {
    operrand1 = result;
    operrand2 = "";
    previousOutput.innerHTML = "";
    currentOutput.innerHTML = result;
  }
};
