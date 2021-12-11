'use strict';

// Задание 1
// Создать объект, описывающий автомобиль 
// (производитель, модель, год выпуска, средняя скорость), 
// и следующие функции для работы с этим объектом.
// 1. Функция для вывода на экран информации об автомобиле.
// 2. Функция для подсчета необходимого времени для преодоления 
// переданного расстояния со средней скоростью.
// Учтите, что через каждые 4 часа дороги 
// водителю необходимо делать перерыв на 1 час.

let car = {
  maker: 'volvo',
  model: 'XC60',
  year: 2000,
  speed: 100,
  info() {
    alert(this.maker + ': ' + this.model + ', ' + this.year + ' года, ' + this.speed + ' км/ч');
  },
  howLong(range) {
    let time = range / this.speed;
    let rest = 0;
    console.log(time);
    if (time > 4) {
      rest += Math.floor(time / 4);
      time += rest;
    }
    console.log(time);
    alert('Данное расстояние автомобиль пройдёт за ' + time + ' часа(ов),' + ' с учётом отдыха: ' + rest + ' часа(ов)');
  },
}

// Задание 2
// Создать объект, описывающий время (часы, минуты, секунды), 
// и следующие функции для работы с этим объектом.
// 1. Функция вывода времени на экран.
// 2. Функция изменения времени на переданное количество секунд.
// 3. Функция изменения времени на переданное количество минут.
// 4. Функция изменения времени на переданное количество часов.
// Учтите, что в последних 3-х функциях, при изменении одной части времени, 
// может измениться и другая. Например: если ко времени «20:30:45» добавить 30 секунд, 
// то должно получиться «20:31:15», а не «20:30:75».

let time = {
  hour: '00',
  minute: '00',
  second: '00',
  whatTime() {
    this.hour = this.hour.toString();
    this.minute = this.minute.toString();
    this.second = this.second.toString();
    if (this.hour.length == 1) {
      this.hour = '0' + this.hour;
    }
    if (this.minute.length == 1) {
      this.minute = '0' + this.minute;
    }
    if (this.second.length == 1) {
      this.second = '0' + this.second;
    }
    alert('Время: ' + this.hour + ':' + this.minute + ':' + this.second);
  },
  secondsAdd(input) {
    let hour = parseInt(input / 3600);
    this.hour = Number(this.hour) + hour;
    input = input - (hour * 3600);

    let minute = parseInt(input / 60);
    this.minute = Number(this.minute) + minute;
    input = input - (minute * 60);

    let second = input;
    this.second = Number(this.second) + second;
    
    this.checkFormat();
  },
  minutesAdd(input) {
    let hour = parseInt(input / 60);
    this.hour = Number(this.hour) + hour;
    input = input - (hour * 60);

    let minute = parseInt(input);
    this.minute = Number(this.minute) + minute;
    
    this.checkFormat();
  },
  hoursAdd(input) {
    this.hour = Number(this.hour) + input;
    
    this.checkFormat();
  },
  checkFormat() {
    let minuteStack = parseInt(this.minute / 60);
    this.minute -= minuteStack * 60;
    this.hour += minuteStack;

    this.hour -= parseInt(this.hour / 24) * 24;
  }
}