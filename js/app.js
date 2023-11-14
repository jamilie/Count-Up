let numberValue = document.querySelectorAll(".num");
let intervalo = 4000;

numberValue.forEach((numberValue) => {
let startValue = 0;
let endValue = parseInt(numberValue.getAttribute("data-val"));


let duracao = Math.floor(intervalo / endValue);

let contador = setInterval(function(){
    startValue += 1;
    numberValue.textContent = startValue;

    if(startValue == endValue) {
        clearInterval(contador);
    }
}, duracao);

});