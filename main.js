const keyList = document.querySelectorAll('.key');
var visor = document.querySelector('#visor').value;

for (let count = 0; count < keyList.length; count++) {

    const key = keyList[count];
    const keyNumbersOperator = key.classList[1];
    const keyArray = ["7","8","9","DEL","4","5","6","+","1","2","3","-",".","0","/","x","RESET","="];
    keyNumbersOperator === keyArray;
    
    key.onclick = function(){
        visor === keyNumbersOperator;
    }
}
