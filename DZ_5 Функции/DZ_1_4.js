'use strict';

do {
  var x = +prompt('Введите номер задачи, которую хотите запустить (от 1 до 10). Для выхода введите "0"');
  switch (x) {
    case 1:
      alert(first);
      alert(first(+prompt('Введите первое число'), +prompt('Введите второе число')));
      break;
    case 2:
      alert(factorail)
      alert('Ответ: ' + factorail(+prompt('Введите число')));
      break;
    case 3:
      alert(word)
      alert('Ответ: ' + word(+prompt('Введите первое число'), prompt('Введите второе число'), +prompt('Введите третье число')));
      break;
    case 4:
      alert(square)
      alert('Площадь равна: ' + square(+prompt('Введите длину (см)'), +prompt('Введите ширину (см)')) + ' см в квадрате');
      break;
    case 5:
      alert(isPerfect)
      alert(isPerfect(+prompt('Введите совершенное число')));
      break;
    case 6:
      alert(getArrPerfect)
      alert(...[getArrPerfect(+prompt('Введите min (натуральное число)'), +prompt('Введите max (натуральное число)'))]);
      break;
    case 7:
      alert(getTime)
      alert('Время: ' + getTime(prompt('Введите часы'), prompt('Введите минуты'), prompt('Введите секунды')));
      break;
    case 8:
      alert(timeToSeconds)
      alert('Итого секунд: ' + timeToSeconds(+prompt('Введите часы'), +prompt('Введите минуты'), +prompt('Введите секунды')));
      break;
    case 9:
      alert(secondsToTime)
      alert('Время ' + secondsToTime(+prompt('Введите кол-во секунд')));
      break;
    case 10:
      alert(diffTime)
      alert('Разница по времени равна: ' + diffTime(+prompt('Введите часы первого дня'), +prompt('Введите минуты первого дня'), +prompt('Введите секунды первого дня'), +prompt('Введите часы второго дня'), +prompt('Введите минуты второго дня'), +prompt('Введите секунды второго дня')))
      break;
  }
} while (x != 0);

//Task 1
//Написать функцию, 
//которая принимает 2 числа и возвращает -1, если первое меньше, 
//чем второе; 1 – если первое больше, чем второе; 
//и 0 – если числа равны.

function first(arg1,arg2) {
  if (arg1 < arg2) {
    return -1;
  } else if (arg1 > arg2) {
    return 1;
  } else if (arg1 == arg2) {
    return 0;
  } else {
    return 'Числа введены некорректно'
  }
}

// alert(first(+prompt('Введите первое число'), +prompt('Введите второе число')));

// ---------------------------------------------------

//Task 2
//Написать функцию, которая вычисляет факториал пере-данного ей числа.

function factorail(arg) {
  let rez = 1;
  if (arg < 0) {
    return 'Введённое число должно быть натуральным';
  }
  if (arg == 0) {
    return 1;
  }
  for (let i = 0; i < arg; i++) {
    rez = (arg - i) * rez;
  }
  return rez;
}

// alert('Ответ: ' + factorail(+prompt('Введите число')));

// ---------------------------------------------------

//Task 3
//Написать функцию, 
//которая принимает три отдельные цифры и превращает их в одно число. 
//Например: цифры 1, 4, 9 превратятся в число 149.

function word(arg1, arg2, arg3) {
  return Number(arg1 + arg2 + arg3);
}

// alert('Ответ: ' + word(+prompt('Введите первое число'), prompt('Введите второе число'), +prompt('Введите третье число')));

//Task 4
//Написать функцию, 
//которая принимает длину и ширину прямоугольника 
//и вычисляет его площадь. Если в функцию передали 1 параметр, 
//то она вычисляет площадь квадрата.

function square(arg1, arg2) {
  if (arg2 == 0 || arg2 == undefined) {
    arg2 = arg1;
  }
  return arg1 * arg2;
}

// alert('Площадь равна: ' + square(+prompt('Введите длину (см)'), +prompt('Введите ширину (см)')) + ' см в квадрате');

// ---------------------------------------------------

//Task 5
//Написать функцию, 
//которая проверяет, является ли пере-данное ей число совершенным. 
//Совершенное число – это число, равное сумме всех своих собственных делителей.

function isPerfect(arg) {
  let sum = null;
  if (isNaN(NaN) || arg == undefined || arg < 1) {
    alert('Число введено неверно');
    return
  }
  for (let i = arg / 2; i >= 1; i--) {
    if (arg % i == 0) {
      sum += i;
    }
  }
  if (sum == arg) {
    return true
  } else {
    return false
  }
}

// alert(isPerfect(+prompt('Введите совершенное число')));

// ---------------------------------------------------

//Task 6
//Написать функцию, 
//которая принимает минимальное и максимальное значения для диапазона, 
//и выводит только те числа из диапазона, которые являются совершенными. 
//Используйте написанную ранее функцию, чтобы узнавать, совершенное число или нет.

function getArrPerfect (min, max) {
  if (isNaN(min) || isNaN(max) || min < 1 || max <= 1) {
    return 'Диапозон введён неверно'
  }
  if (max < 6) {
    return 'В указанном диапозоне нет совершенных чисел'
  }
  let arr = [];
  for (let i = min; i <= max; i++) {
    if (isPerfect(i)) {
      arr.push(i);
    }
  }
  return arr;
}

// alert(...[getArrPerfect(+prompt('Введите min (натуральное число)'), +prompt('Введите max (натуральное число)'))]);

// ---------------------------------------------------

// Task 7
// Написать функцию, 
// которая принимает время (часы, мину-ты, секунды) 
// и выводит его на экран в формате «чч:мм:сс».
// Если при вызове функции минуты и/или секунды не были переданы, 
// то выводить их как 00.

function getTime(hour, minute, second) {
  if ((hour.length || minute.length || second.length) > 2) {
    return 'При вводе должно быть не более двух цифр в значении'
  }
  if (hour > 23 || minute > 59 || second > 59) {
    return 'Неккоректно введено время'
  }
  if (hour.length == 1) {
    hour = '0' + hour;
  }
  if (minute.length == 1) {
    minute = '0' + minute;
  }
  if (second.length == 1) {
    second = '0' + second;
  }
  return hour + ':' + minute + ':' + second
}
// TODO: Если при вызове функции минуты и/или секунды не были переданы, то выводить их как 00.

// alert('Время: ' + getTime(prompt('Введите часы'), prompt('Введите минуты'), prompt('Введите секунды')));

// ---------------------------------------------------

//Task 8
//Написать функцию, 
//которая принимает часы, минуты и секунды 
//и возвращает это время в секундах.

function timeToSeconds(hour, minute, second) {
  return (hour * 3600) + (minute * 60) + second;
}

// alert('Итого секунд: ' + timeToSeconds(+prompt('Введите часы'), +prompt('Введите минуты'), +prompt('Введите секунды')));

// ---------------------------------------------------

//Task 9
//Написать функцию, 
//которая принимает количество секунд, 
//переводит их в часы, минуты и секунды 
//и возвращает в виде строки «чч:мм:сс».

function secondsToTime(input) {
  if (input > 86399) {
    alert('Вы ввели больше секунд чем может быть в сутках');
    return 'не подсчитано'
  }
  let hour = String(parseInt(input / 3600));
  input = input - (hour * 3600);
  let minute = String(parseInt(input / 60));
  input = input - (minute * 60);
  let second = String(input);
  return getTime(hour, minute, second)
}

// alert('Время ' + secondsToTime(+prompt('Введите кол-во секунд')));

// ---------------------------------------------------

//Task 10
//Написать функцию, 
//которая считает разницу между датами. 
//Функция принимает 6 параметров, которые описывают 2 даты, 
//и возвращает результат в виде строки «чч:мм:сс». 
//При выполнении задания используйте функции из предыду-щих 2-х заданий: 
//сначала обе даты переведите в секунды, узнайте разницу в секундах, 
//а потом разницу переведите обратно в «чч:мм:сс».Домашнее задание No4

function diffTime(hour1, minute1, second1, hour2, minute2, second2) {
  let seconds1 = timeToSeconds(hour1, minute1, second1);
  let seconds2 = timeToSeconds(hour2, minute2, second2);
  if (seconds1 > seconds2) {
    return secondsToTime(seconds1 - seconds2)
  } else {
    return secondsToTime(seconds2 - seconds1)
  }
}

// alert('Разница по времени равна: ' + diffTime(+prompt('Введите часы первого дня'), +prompt('Введите минуты первого дня'), +prompt('Введите секунды первого дня'), +prompt('Введите часы второго дня'), +prompt('Введите минуты второго дня'), +prompt('Введите секунды второго дня')))