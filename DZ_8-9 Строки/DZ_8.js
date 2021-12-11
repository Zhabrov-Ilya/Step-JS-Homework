"use strict";

// 1. Написать функцию, которая принимает строку и выводит статистику о ней:
// количество букв, количество цифр и количество других знаков.

function calc(string) {
  let symbolsArr = [];
  let letters = 0;
  let nums = 0;
  let gaps = 0;
  let symbols = 0;
  if (string.match(/[A-Za-zА-яё]/)) {
    console.log(string.match(/[A-Za-zА-яё]/g));
    letters = string.match(/[A-Za-zА-яё]/g).length;
  }
  if (string.match(/[0-9]/)) {
    console.log(string.match(/[0-9]/g));
    nums = string.match(/[0-9]/g).length;
  }
  if (string.match(/[\s]/)) {
    console.log(string.match(/[\s]/g));
    gaps = string.match(/[\s]/g).length;
  }
  for (let i = 0; i < string.length; i++) {
    if (
      !string[i].match(/[A-Za-zА-яё]/) &&
      !string[i].match(/[0-9]/) &&
      !string[i].match(/[\s]/)
    ) {
      symbolsArr.push(string[i]);
      symbols++;
    }
  }
  console.log(symbolsArr);
  return (
    "Букв: " +
    letters +
    " Цифр: " +
    nums +
    " Символов: " +
    symbols +
    " Пробелов: " +
    gaps +
    "\nМассивы символов выведены в консоль"
  );
}
// alert(calc(prompt("Введите строку")));

// 2. Написать функцию, которая принимает двузначное число
//  и возвращает его в текстовом виде.
// Например: 35 – тридцать пять, 89 – восемьдесят девять,
//  12 – двенадцать.

function translate(string) {
  let num1;
  let num2;
  let teen;
  if (+string[0] == 1) {
    switch (+string[1]) {
      case 1:
        teen = "одиннадцать";
        break;
      case 2:
        teen = "двенадцать";
        break;
      case 3:
        teen = "тринадцать";
        break;
      case 4:
        teen = "четырнадцать";
        break;
      case 5:
        teen = "пятнадцать";
        break;
      case 6:
        teen = "шестнадцать";
        break;
      case 7:
        teen = "семнадцать";
        break;
      case 8:
        teen = "восемнадцать";
        break;
      case 9:
        teen = "девятнадцать";
        break;
    }
    return teen;
  } else {
    switch (+string[0]) {
      case 2:
        num1 = "двадцать";
        break;
      case 3:
        num1 = "тридцать";
        break;
      case 4:
        num1 = "сорок";
        break;
      case 5:
        num1 = "пятьдесят";
        break;
      case 6:
        num1 = "шестьдесят";
        break;
      case 7:
        num1 = "семьдесят";
        break;
      case 8:
        num1 = "восемьдесят";
        break;
      case 9:
        num1 = "девяносто";
        break;
    }
    switch (+string[1]) {
      case 1:
        num2 = "один";
        break;
      case 2:
        num2 = "два";
        break;
      case 3:
        num2 = "три";
        break;
      case 4:
        num2 = "четыре";
        break;
      case 5:
        num2 = "пять";
        break;
      case 6:
        num2 = "шесть";
        break;
      case 7:
        num2 = "семь";
        break;
      case 8:
        num2 = "восемь";
        break;
      case 9:
        num2 = "девять";
        break;
    }
    return num1 + " " + num2;
  }
}
//Проверку на ввод НЕчисла делать поленился
// alert(translate(prompt("Введите двузначное число")));

// 3. Написать функцию, которая заменяет в полученной строке
//  большие буквы на маленькие, маленькие – на большие,
//  а цифры – на знак нижнего подчеркивания.

function invert(string) {
  let stringArr = string.split('');
  for (let i = 0; i < stringArr.length; i++) {
    if (Number.isInteger(+stringArr[i])) {
      stringArr[i] = '_';
    } else if (stringArr[i].toUpperCase() == stringArr[i]) {
      stringArr[i] = stringArr[i].toLowerCase();
    } else if (stringArr[i].toLowerCase() == stringArr[i]) {
      stringArr[i] = stringArr[i].toUpperCase();
    }
  }
  return stringArr.join('');
}
// alert(invert(prompt("Введите строку")));

// 4. Написать функцию, которая принимает словосочетание
// и превращает его в аббревиатуру.
// Например: cascading style sheets в CSS,
// объектно- ориентированное программирование в ООП.

function ABR(string) {
  let stringArr = string.split(' ');
  let abr = '';
  for (let i = 0; i < stringArr.length; i++) {
    abr += stringArr[i][0].toUpperCase();
  }
  return abr;
}

// alert(ABR(prompt("Введите строку")));


// 5. Написать функцию, которая принимает любое количество строк,
//  объединяет их в одну длинную строку и возвращает ее.

function toText(...strings) {
  return strings.join(' ');
}

// alert(toText(prompt("Введите первую строку"), prompt("Введите вторую строку"), prompt("Введите третью строку")));

// 6. Написать функцию, которая получает url
//  и выводит подробную информацию о нем.
// Например: url “https://itstep.org/ua/about”, информация
//  “протокол: https, домен: itstep.org, путь: /ua/about”.

function urlInfo(url) {
  let arr = url.split('//');
  let protocol = arr[0].substring(0, arr[0].length-1);
  let domen = arr[1].split('/')[0];
  let pathArr = arr[1].split('/');
  pathArr.shift();
  let path = pathArr.join('/');
  return 'Протокол: ' + protocol + ', домен: ' + domen + ', путь: ' + path;
}

// alert(urlInfo(prompt("Введите url")));

do {
  var x = +prompt('Введите номер задачи, которую хотите запустить (от 1 до 6). Для выхода введите "0"');
  switch (x) {
    case 1:
      alert(calc);
      alert(calc(prompt("Введите строку")));
      break;
    case 2:
      alert(translate)
      alert(translate(prompt("Введите двузначное число")));
      break;
    case 3:
      alert(invert)
      alert(invert(prompt("Введите строку")));
      break;
    case 4:
      alert(ABR)
      alert(ABR(prompt("Введите строку")));
      break;
    case 5:
      alert(toText)
      alert(toText(prompt("Введите первую строку"), prompt("Введите вторую строку"), prompt("Введите третью строку")));
      break;
    case 6:
      alert(urlInfo)
      alert(urlInfo(prompt("Введите url")));
      break;
  }
} while (x != 0);