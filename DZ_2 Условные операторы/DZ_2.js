"use strict";

do {
  var x = +prompt(
    'Введите номер задачи, которую хотите запустить (от 1 до 4). Для выхода введите "0"'
  );
  switch (x) {
    case 1:
      // Задание  1:
      // Создать переменную «возраст» человека и определить,
      // является ли он совершеннолетним (>18).

      let age = +prompt("Введите свой возраст");
      if (age > 18) {
        alert("Вы совершеннолетний");
      } else {
        alert("Вы малолетка");
      }

      break;

    case 2:
      // Задание  2:
      // Создать переменную «год» и проверить, високосный он или нет.
      // Високосный год либо кратен 400, либо кратен 4 и при этом не кратен 100.

      let year = +prompt("Введите год");
      if (year % 400 == 0 || (year % 4 == 0 && year % 100 !== 0)) {
        alert("Год високосный");
      } else {
        alert("Год НЕ високосный");
      }

      break;

    case 3:
      // Задание  3:
      // Создать  переменную «сумма покупки» и вывести сумму к оплате со скидкой:
      // более 1000 – скидка 5%.

      let sum = +prompt("Введите сумму к оплате");
      if (sum > 1000) {
        sum *= 0.95;
        alert("С учётом скидки к оплате: " + sum);
      } else {
        alert("Платите!");
      }

      break;

    case 4:
      // Задание  4:
      // Создать две переменные : «длина окружности» и «периметр квадрата».
      // Определить, может ли такая окружность поместиться в указанный квадрат.

      let circle = +prompt("Введите длину окружности в см");
      let square = +prompt("Введите периметр квадрата в см");
      if (square / 4 > circle / 3.14) {
        alert("Круг поместился в квадрат");
      } else {
        alert("Круг НЕ поместился в квадрат");
      }

      break;
  }
} while (x != 0);
