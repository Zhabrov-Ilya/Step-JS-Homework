'use strict';

// Задание 1
// Создать html-страницу для ввода имени пользователя. 
// Необходимо проверять каждый символ, который вводит пользователь. 
// Если он ввел цифру, то не отображать ее в input.

document.querySelector('#input').oninput = function() {
  if(this.value.match(/\d/)) {
    this.value = this.value.replace(/\d/, '');
  };
}

// Задание 2
// Создать html-страницу с кнопкой Открыть и модальным окном. 
// На модальном окне должен быть текст и кнопка Закрыть. 
// Изначально модальное окно не отображается. 
// При клике на кнопку Открыть появляется модальное окно, 
// на кнопку Закрыть – исчезает.

document.querySelector('#modalIn').onclick = function() {
  document.querySelector('#modal').style.display = 'flex';
}
document.querySelector('#modalOut').onclick = function() {
  document.querySelector('#modal').style.display = 'none';
}

// Задание 3
// Создать html-страницу со светофором и кнопкой, которая
// переключает светофор на следующий цвет.

let lightIndex = 0;
document.querySelector('#lights').onclick = function() {
  let lightsArr = document.querySelectorAll('.light');
  if (lightIndex == lightsArr.length-1) {
    lightsArr[lightIndex].classList.toggle("inactive"); 
    lightIndex = 0;
    lightsArr[lightIndex].classList.toggle("inactive");  
  } else {
    lightsArr[lightIndex].classList.toggle("inactive"); 
    lightsArr[lightIndex+1].classList.toggle("inactive");
    lightIndex += 1;
  }
}