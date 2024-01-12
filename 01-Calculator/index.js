const display = document.querySelector("#display");

const appendToDisplay = (input) => {
  display.value += input;
};

const clearDisplay = () => {
  display.value = "";
};
// function clearDisplay() {}

const calculate = () => {
  display.value = eval(display.value);
};
// function calculate() {}
