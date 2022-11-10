var equalsBtn = document.querySelector('#equals');
var visor = document.getElementById("visor");
var resetBtn = document.getElementById("reset");
var buttons = document.getElementsByClassName("key");
var plus = document.getElementById("plus");
var subtract = document.getElementById("subtract");
var multiply = document.getElementById("multiply");
var divide = document.getElementById("divide");
var delBtn = document.getElementById("del");

function numbersAndOperators() {
    Array.prototype.forEach.call (buttons, (button) => {
      button.addEventListener("click", () => {
        visor.value += button.innerText
      })
    })
    resetBtn.addEventListener("click", () => {
      visor.value = null
    })

    equalsBtn.addEventListener('click', function(){
      if (visor.value.split('-')){
        visor.value = visor.value.split('-').slice(1).reduce((a, c) => parseFloat(a) - parseFloat(c), (visor.value.split('-')[0]));
      }
      if (visor.value.split('+')){
        visor.value = visor.value.split('+').slice(1).reduce((a, c) => parseFloat(a) + parseFloat(c), (visor.value.split('+')[0]));
      }
      if (visor.value.split('*')){
        visor.value = visor.value.split('*').slice(1).reduce((a, c) => parseFloat(a) * parseFloat(c), (visor.value.split('*')[0]));
      }
      if (visor.value.split('/')){
        visor.value = visor.value.split('/').slice(1).reduce((a, c) => parseFloat(a) / parseFloat(c), (visor.value.split('/')[0]));
      }
    })

    delBtn.addEventListener('click', function(){
        visor.value = visor.value.substr(0, visor.value.length - 1);
    })
}

document.addEventListener("DOMContentLoaded", numbersAndOperators);