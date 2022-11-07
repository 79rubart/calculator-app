  //
var equals = document.querySelector('#equals');
  // The textfield element
var visor = document.getElementById("visor");
  // The reset button
var resetBtn = document.getElementById("reset");
  // Get all the buttons to an Array
var buttons = document.getElementsByClassName("key");

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

equals.addEventListener('click', function(){
    if (visor.value.split('+')){
        visor.value = visor.value.split('+').reduce((a,c) => a + Number(c), 0);
    }
    //if (visor.value.split('-')){
        //visor.value = visor.value.split('-').reduce((a,c) => a - Number(c), 0);
    //}
});


document.addEventListener("DOMContentLoaded", numbersAndOperators);
