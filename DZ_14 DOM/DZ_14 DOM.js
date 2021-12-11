'use strict';

function selN1() {
  let els = document.getElementsByName('n1');
  for(let el of els) {
    el.style.color = '#' + (Math.random()*0xFFFFFF<<0).toString(16);
  }
}

function selD1() {
  let el = document.getElementById('d1');
  el.style.color = '#' + (Math.random()*0xFFFFFF<<0).toString(16);
}

function selC1() {
  let els = document.getElementsByClassName('c1');
  for(let el of els) {
    el.style.background = '#' + (Math.random()*0xFFFFFF<<0).toString(16);
  }
}