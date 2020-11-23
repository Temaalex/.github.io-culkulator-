"use strict"
//Табы
let contentSpead = document.querySelector (".content__spead");
let contentConsumption = document.querySelector (".content__consumption");
let contentSquare = document.querySelector (".content__square");
let textButton = document.querySelectorAll(".text_button");
textButton[0].style.backgroundColor = '#c7b3bd'
textButton[0].onclick = function(){
    textButton[0].style.backgroundColor = '#c7b3bd';
    textButton[1].style.backgroundColor = '#506a94';
    textButton[2].style.backgroundColor = '#506a94';
    contentSpead.style.display = 'block';
    contentConsumption.style.display = 'none';
    contentSquare.style.display = 'none';
};
textButton[1].onclick = function(){
    textButton[1].style.backgroundColor = '#c7b3bd';
    textButton[0].style.backgroundColor = '#506a94';
    textButton[2].style.backgroundColor = '#506a94';
    contentSpead.style.display = 'none';
    contentConsumption.style.display = 'block';
    contentSquare.style.display = 'none';
};
textButton[2].onclick = function(){
    textButton[2].style.backgroundColor = '#c7b3bd';
    textButton[0].style.backgroundColor = '#506a94';
    textButton[1].style.backgroundColor = '#506a94';
    contentSpead.style.display = 'none';
    contentConsumption.style.display = 'none';
    contentSquare.style.display = 'block';
};
//первая вкладка
//выбор сечения трубы и результат
let consumptionSquare = document.querySelectorAll (".consumption__square");
let consumptionCircle = document.querySelector (".consumption__circle");
let btnSquare = document.querySelector (".btn__square");
let btnCircle = document.querySelector (".btn__circle");
let consumption = document.querySelector (".consumption");
let oneEdge = document.querySelector (".one_edge");
let twoEdge = document.querySelector (".two_edge");
let oneCircle = document.querySelector (".one_circle");
let btnResult = document.querySelector (".btn_result");
let projectResultValue = document.querySelector (".project-result-value");
btnSquare.addEventListener('click', function(){
    for (let i = 0; i < consumptionSquare.length; i++){
        consumptionSquare[i].style.display = "block";
    }
    consumptionCircle.style.display = "none";
    btnResult.onclick = function(){
        if(Number(consumption.value) && Number(oneEdge.value) && Number(twoEdge.value)){
            let result = Number(consumption.value)/((Number(oneEdge.value)*(Number(twoEdge.value))/1000000) * 3600);
            projectResultValue.textContent = "V = "+result.toFixed(2)+" м/с².";
        } else{
        projectResultValue.textContent = " данные введены не корректно!"
        }
    }
})
btnCircle.addEventListener('click', function(){
    consumptionCircle.style.display = "block";
    for (let i = 0; i < consumptionSquare.length; i++){
        consumptionSquare[i].style.display = "none";
    }
    btnResult.onclick = function(){
        if(Number(oneCircle.value)){
            let result =Number(consumption.value)/(3.14*3600*(Math.pow((Number(oneCircle.value)/2000), 2)));
            projectResultValue.textContent = "V = " + result.toFixed(2)+" м/с².";
        } else{
            projectResultValue.textContent = " данные введены не корректно!"
        }
    }
})

//Вторая вкладка

let speedSquare = document.querySelectorAll (".speed__square");
let speedCircle = document.querySelector (".speed__circle");
let speedBtnSquare = document.querySelector (".speed__btn--square");
let speedBtnCircle = document.querySelector (".speed__btn--circle");
let speed = document.querySelector (".speed");
let speedOneEdge = document.querySelector (".speed__one_edge");
let speedTwoEdge = document.querySelector (".speed__two_edge");
let speedOneCircle = document.querySelector (".speed_one_circle");
let speedBtnResult = document.querySelector (".speed__btn_result");
let speedProjectResultValue = document.querySelector (".speed__project-result-value");
speedBtnSquare.addEventListener('click', function(){
    for (let i = 0; i < speedSquare.length; i++){
        speedSquare[i].style.display = "block";
    }
    speedCircle.style.display = "none";
    speedBtnResult.onclick = function(){
        if(Number(speed.value) && Number(speedOneEdge.value) && Number(speedTwoEdge.value)){
            let result = Number(speed.value)*((Number(speedOneEdge.value)*(Number(speedTwoEdge.value))/1000000) * 3600);
            speedProjectResultValue.textContent = "L = "+ result.toFixed(2)+" м³/с.";
        } else{
            speedProjectResultValue.textContent = " данные введены не корректно!"
        }
    }
})
speedBtnCircle.addEventListener('click', function(){
    speedCircle.style.display = "block";
    for (let i = 0; i < speedSquare.length; i++){
        speedSquare[i].style.display = "none";
    }
    speedBtnResult.onclick = function(){
        if(Number(speedOneCircle.value)){
            let result =Number(speed.value)*(3.14*3600*(Math.pow((Number(speedOneCircle.value)/2000), 2)));
            speedProjectResultValue.textContent = "L = "+ result.toFixed(2)+" м³/с.";
        } else{
            speedProjectResultValue.textContent = " данные введены не корректно!"
        }
    }
})