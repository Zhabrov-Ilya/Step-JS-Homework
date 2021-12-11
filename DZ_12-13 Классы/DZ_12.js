"use strict";

// Задание 1
// Разработать базовый класс Геометрическая_Фигура
// с полями ПлощадьФигуры и ПериметрФигуры.
// Разработать классы-наследники:
// Треугольник, Квадрат, Ромб, Прямоугольник, Параллелограмм,
// Трапеция, Круг, Эллипс и реализовать свойства,
// которые однозначно определяют объекты данных классов (любые из трех фигур).
// Переопределить в каждом из этих классов методы нахождения
// площади и периметра этих фигур.
// Предусмотреть варианты невозможности задания фигуры
// (введены отрицательные длины сторон или при создании объекта
// треугольника существует пара сторон, сумма длин которых
// меньше длины третьей стороны и т.п.)
// Выдать результаты на консоль.
// Дополнительное задание:
// на странице нарисовать данные геометрические фигуры
// в соответствии с их значениями полей.
// Можно сделать выбор пользователем, какую фигуру нарисовать.

class Figure {
  constructor() {
    this.perimeter;
    this.square;
  }
}

class Rectangle extends Figure {
  constructor(a, b) {
    super(a, b);
    this.a;
    this.b;
  }
  calcPerimeter() {
    this.perimeter = (this.a + this.b) * 2;
  }
  calcSquare() {
    this.square = this.a * this.b;
  }
}

class Triangle extends Figure {
  constructor(a, b, c) {
    super(a, b, c);
    this.a;
    this.b;
    this.c;
  }
  calcPerimeter() {
    if (
      this.a + this.b < this.c ||
      this.a + this.c < this.b ||
      this.b + this.c < this.a ||
      (this.a || this.b || this.c) <= 0
    ) {
      return alert("Треугольник с такими сторонами невозможен");
    } else {
      this.perimeter = this.a + this.b + this.c;
    }
  }
  calcSquare() {
    this.calcPerimeter();
    let p = this.perimeter / 2;
    this.square = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));
  }
}

class Square extends Figure {
  constructor(a) {
    super(a);
    this.a;
  }
  calcPerimeter() {
    this.perimeter = this.a * 4;
  }
  calcSquare() {
    this.square = Math.pow(this.a, 2);
  }
}

class Circle extends Figure {
  constructor(r) {
    super(r);
    this.r;
  }
  calcPerimeter() {
    this.perimeter = 2 * 3.14 * this.r;
  }
  calcSquare() {
    this.square = Math.pow(this.r, 2) * 3.14;
  }
}

let inputs = document.querySelectorAll("input");
inputs.forEach((e) => {
  e.oninput = printFigure;
});

let squareObj = new Square();
let circleObj = new Circle();
let rectangleObj = new Rectangle();

function printFigure() {
  //Квадрат
  if (this.id == "square") {
    let squarePerimeterEl = document.querySelector("#squarePerimeter");
    let squareSquareEl = document.querySelector("#squareSquare");

    squareObj.a = this.value;
    let squareDiv = document.querySelector("#squareDiv");
    let squareElDiv = `
      <div class='square' id='squareDiv'
        style='
        width: ${squareObj.a + "px"}; 
        height: ${squareObj.a + "px"};'>
      </div>`;

    //Проверка на недопустимый ввод
    if (squareObj.a !== undefined && squareObj.a > 0) {
      squareDiv.insertAdjacentHTML('afterend', squareElDiv);
      squareDiv.remove();

      squareObj.calcPerimeter();
      squareObj.calcSquare();
      squarePerimeterEl.innerText = "Периметр: " + squareObj.perimeter + " px";
      squareSquareEl.innerText = "Площадь: " + squareObj.square + " px^2";
    } else {
      squarePerimeterEl.innerText = "Периметр: 0 px";
      squareSquareEl.innerText = "Площадь: 0 px^2";
    }
  }

  //Круг
  if (this.id == "circle") {
    let circlePerimeterEl = document.querySelector("#circlePerimeter");
    let circleSquareEl = document.querySelector("#circleSquare");

    circleObj.r = this.value;
    let circleDiv = document.querySelector("#circleDiv");
    let circleElDiv = `
      <div class='circle' id='circleDiv'
        style='
        width: ${circleObj.r * 2 + "px"}; 
        height: ${circleObj.r * 2 + "px"}; 
        border-radius: ${circleObj.r + "px"};'>
      </div>`;

    //Проверка на недопустимый ввод
    if (circleObj.r !== undefined && circleObj.r > 0) {
      circleDiv.insertAdjacentHTML('afterend', circleElDiv);
      circleDiv.remove();

      circleObj.calcPerimeter();
      circleObj.calcSquare();
      circlePerimeterEl.innerText = "Периметр: " + circleObj.perimeter + " px";
      circleSquareEl.innerText = "Площадь: " + circleObj.square + " px^2";
    } else {
      circlePerimeterEl.innerText = "Периметр: 0 px";
      circleSquareEl.innerText = "Площадь: 0 px^2";
    }
  }

  //Прямоугольник
  if (this.id == "rectangle_a" || this.id == "rectangle_b") {
    let rectanglePerimeterEl = document.querySelector("#rectanglePerimeter");
    let rectangleSquareEl = document.querySelector("#rectangleSquare");

    if (this.id == "rectangle_a") {
      rectangleObj.a = this.value;
    }
    if (this.id == "rectangle_b") {
      rectangleObj.b = this.value;
    }
    let rectangleDiv = document.querySelector("#rectangleDiv");
    let rectangleElDiv = `
      <div class='rectangle' id='rectangleDiv'
        style='
        width: ${rectangleObj.a + "px"}; 
        height: ${rectangleObj.b + "px"};'>
      </div>`;

    //Проверка на недопустимый ввод
    if (
      rectangleObj.a !== undefined &&
      rectangleObj.a > 0 &&
      rectangleObj.b !== undefined &&
      rectangleObj.b > 0
    ) {
      rectangleDiv.insertAdjacentHTML('afterend', rectangleElDiv);
      rectangleDiv.remove();

      rectangleObj.calcPerimeter();
      rectangleObj.calcSquare();
      rectanglePerimeterEl.innerText = "Периметр: " + rectangleObj.perimeter + " px";
      rectangleSquareEl.innerText = "Площадь: " + rectangleObj.square + " px^2";
    } else {
      rectanglePerimeterEl.innerText = "Периметр: 0 px";
      rectangleSquareEl.innerText = "Площадь: 0 px^2";
    }
  }
}

// Задание 2
// Создать html-страницу с футбольным полем,
// которое занимает всю ширину и высоту экрана,
// и мячом размером 100 на 100 пикселей.
// Сделать так, чтобы при клике мышкой по полю,
// мяч плавно перемещался на место клика.
// Учтите: необходимо, чтобы центр мяча останавливался именно там,
// где был совершен клик мышкой.
// Также предусмотрите, чтобы мяч не выходил за границы поля.
// Дополнительное задание:
// можно организовать подсчет забитых голов для каждой команды.

alert('Задание 2 усовершенствовано, поле можно разместить в любую часть страницы');
let counterLeft = 0;
let counterRight = 0;
document.querySelector(".field").onclick = function (e) {
  let ball = document.querySelector(".ball");
  let ballWidth = 50;
  let positionX = e.offsetX;
  let positionY = e.offsetY;

  function toStartPosition() {
    setTimeout(() => {
      ball.style.left = "calc(50% - 50px)";
      ball.style.top = "calc(50% - 50px)";
    }, 550);
  }

  if (e.target == ball) {
    alert("На мяч кликать нельзя, так как баг");
  } else {

    //В случае гола
    if (
      positionX >= 11 &&
      positionX <= 66 &&
      positionY >= 211 &&
      positionY <= 386
    ) {
      counterLeft += 1;
      toStartPosition();
    }
    if (
      positionX >= 894 &&
      positionX <= 947 &&
      positionY >= 211 &&
      positionY <= 386
    ) {
      counterRight += 1;
      toStartPosition();
    }

    //Проверка на выход за поле
    if (positionX<=62) {
      positionX = 62;
    } else if (positionX>=898) {
        positionX = 898;
    }
    if (positionY<=62) {
        positionY = 62;
    }
    if (positionY>=536) {
        positionY = 536;
    }

    //Перемещение мяча
    ball.style.left = positionX - ballWidth + "px";
    ball.style.top = positionY - ballWidth + "px";

    //счётчик очков
    document.querySelector(".left").innerText = `Левые: ${counterRight}`;
    document.querySelector(".right").innerText = `Правые: ${counterLeft}`;
  }
};