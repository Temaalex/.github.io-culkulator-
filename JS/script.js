'use strict';

let airAirText = document.querySelector (".air_airtext");
let answer = document.querySelector (".answer__text");
let input = document.getElementsByName ("input");
let clickSquare = document.querySelector (".click_square");
let clickCircle = document.querySelector (".click_circle");


clickSquare.onclick = function(){
    for(let i=0; input.length > i; i++){
        input[i].oninput  = function(){
            if(Number(input[0].value) && Number(input[1].value) && Number(input[2].value) ){
                let result = Number(input[0].value)/((Number(input[1].value)*Number(input[2].value)/1000000)*3600);
                answer.textContent = "Ответ: V = "+result.toFixed(2)+" м/с².";
            } else {
                answer.textContent = "Ответ: данные введены не корректно!"
            }
        }  
    }
}
clickCircle.onclick = function(){
    for(let i=0; input.length > i; i++){
        input[i].oninput = function(){
            if(Number(input[0].value) && Number(input[3].value)){
                let result = Number(input[0].value)/(3.14*3600*(Math.pow((Number(input[3].value)/2000), 2)));
                answer.textContent = "Ответ: V = "+result.toFixed(2)+" м/с².";
            } else {
                answer.textContent = "Ответ: данные введены не корректно!"
            }
        }
    } 
}

