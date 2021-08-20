// Simple Operations
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

// Display Functions

let exp_complete = [,,,false]; // [0]-Num1 , [1]-Op, [2]-Num2, [3]-logic for equal

function showNumber(n){
  if(document.getElementById("display").value == 0 || document.getElementById("display").value == ""){
    document.getElementById("display").value = n;
  }
  else{
    document.getElementById("display").value += n;
  }
}

function cleanDisplay(){
  document.getElementById("display").value = 0;
}

function equal(){
  let result;

  if(exp_complete[3] == false){
    exp_complete[2] = document.getElementById("display").value;
    exp_complete[3] = true;
  }

  result = calculation(parseFloat(exp_complete[0]), exp_complete[1], parseFloat(exp_complete[2]));
  document.getElementById("display").value = result;

  exp_complete[0] = result;
}

function operation(symb){
  exp_complete[0] = document.getElementById("display").value;
  exp_complete[1] = symb;
  exp_complete[3] = false;
  document.getElementById("display").value = "";
}