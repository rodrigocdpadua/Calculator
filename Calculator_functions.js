function sum(num1, num2){
  return num1 + num2;
}

function subtract(num1, num2){
  return num1 - num2;
}

function multiplis(num1, num2){
  return num1 * num2;
}

function divide(num1, num2){
  return num1 / num2;
}

function calculation(num1, symb, num2){
  let result;
  switch (symb){
    case '+':
      result = num1 + num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    case '*':
      result = num1 * num2;
      break;
    case '/':
      result = num1 / num2;
      break;
  }
  return result;
}