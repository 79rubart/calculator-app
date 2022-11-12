var equalsBtn = document.querySelector('#equals');
var visor = document.getElementById("visor");
var visor2 = document.getElementById("visor2");
var resetBtn = document.getElementById("reset");
var buttons = document.getElementsByClassName("key");
var plus = document.getElementById("plus");
var subtract = document.getElementById("subtract");
var multiply = document.getElementById("multiply");
var divide = document.getElementById("divide");
var delBtn = document.getElementById("del");

function numbersAndOperators() {

  let aConst = 0;
  let bConst = 0;
  let sign = "";

    Array.prototype.forEach.call (buttons, (button) => {
      button.addEventListener("click", () => {
        visor.value += button.innerText
      })
    })
    resetBtn.addEventListener("click", () => {
      visor.value = null;
      visor2.value = null;
    })

    subtract.addEventListener('click', function(){
      sign = "-"
      aConst = parseFloat(visor.value);
      visor2.value = aConst + "-";
      visor.value = null;
    })

    plus.addEventListener('click', function(){
      sign = "+"
      aConst = parseFloat(visor.value);
      visor2.value = aConst + "+";
      visor.value = null;
    })

    multiply.addEventListener('click', function(){
      sign = "*"
      aConst = parseFloat(visor.value);
      visor2.value = aConst + "*";
      visor.value = null;
    })

    divide.addEventListener('click', function(){
      sign = "/"
      aConst = parseFloat(visor.value);
      visor2.value = aConst + "/";
      visor.value = null;
    })

    equalsBtn.addEventListener('click', function(){
      if (sign === "-"){
        bConst = parseFloat(visor.value);
        visor.value = aConst - bConst;
      }
      if (sign === "+"){
        bConst = parseFloat(visor.value);
        visor.value = aConst + bConst;
      }
      if (sign === "*"){
        bConst = parseFloat(visor.value);
        visor.value = aConst * bConst;
      }
      if (sign === "/"){
        bConst = parseFloat(visor.value);
        visor.value = aConst / bConst;
      }
      visor2.value = null;
    })

    delBtn.addEventListener('click', function(){
        visor.value = visor.value.substr(0, visor.value.length - 1);
    })
}

document.addEventListener("DOMContentLoaded", numbersAndOperators);