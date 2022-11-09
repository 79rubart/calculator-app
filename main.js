  //
var equals = document.querySelector('#equals');
  // The textfield element
var visor = document.getElementById("visor");
  // The reset button
var resetBtn = document.getElementById("reset");
  // Get all the buttons to an Array
var buttons = document.getElementsByClassName("key");
  // Get all operators button
var plus = document.getElementById("plus");
var subtract = document.getElementById("subtract");
var multiply = document.getElementById("multiply");
var divide = document.getElementById("divide");

function numbersAndOperators() {
    // Add click event listener to all button elements and insert their inner text as value to the text field
    Array.prototype.forEach.call (buttons, (button) => {
      button.addEventListener("click", () => {
        visor.value += button.innerText
      })
    })
  
    // Add click event listener to reset button
    resetBtn.addEventListener("click", () => {
      visor.value = null
    })
}

plus.addEventListener('click', function(){
  equals.addEventListener('click', function(){
    var valAdd = visor.value.split('+');
    visor.value = valAdd.reduce((a,c) => a + Number(c), 0);
  });
});

subtract.addEventListener('click', function(){
  equals.addEventListener('click', function(){
    var valSub = visor.value.split('-');
    visor.value = valSub.reduce((a,c) => a - Number(c), 0);
  });
});

multiply.addEventListener('click', function(){
  equals.addEventListener('click', function(){
    var valMul = visor.value.split('*');
    visor.value = valMul.reduce((a,c) => a * Number(c), 0);
  });
});

divide.addEventListener('click', function(){
  equals.addEventListener('click', function(){
    var valDiv = visor.value.split('/');
    visor.value = valDiv.reduce((a,c) => a / Number(c), 0);
  });
});

document.addEventListener("DOMContentLoaded", numbersAndOperators);