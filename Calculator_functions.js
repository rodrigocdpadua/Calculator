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
let textExp = "";

function showNumber(n){
  let valorDisplay = document.getElementById("display").value;

  if(valorDisplay.length < 8){
    if(valorDisplay == "0" || valorDisplay == "" || valorDisplay == "ERR"){
      if(n == '.'){
        document.getElementById("display").value = "0."
      }else {
        document.getElementById("display").value = n;
      }
    }
    else{
      document.getElementById("display").value += n;
    }
  }
}

function cleanDisplay(){
  document.getElementById("display").value = 0;
}

function backspace(){
  let valorDisplay = document.getElementById("display").value;

  if(valorDisplay == "0" || valorDisplay == "" || valorDisplay == "ERR" || valorDisplay.length == 1){
    document.getElementById("display").value = 0;
  } else {
    document.getElementById("display").value = valorDisplay.replace(/.$/, '');
  }
}

function equal(){
  let result;

  if(exp_complete[3] == false){
    exp_complete[2] = document.getElementById("display").value.replace(textExp,'');
    exp_complete[3] = true;
  }

  result = calculation(parseFloat(exp_complete[0]), exp_complete[1], parseFloat(exp_complete[2]));

  if((result+"").length <= 8){
    document.getElementById("display").value = result;
    exp_complete[0] = result;
  } else{
    document.getElementById("display").value = "ERR";
  }
}

function operation(symb){
  exp_complete[0] = document.getElementById("display").value;
  exp_complete[1] = symb;
  exp_complete[3] = false;
  textExp = exp_complete[0] + exp_complete[1];
  document.getElementById("display").value = textExp;
}