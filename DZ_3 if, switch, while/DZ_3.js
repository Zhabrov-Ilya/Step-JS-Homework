"use strict";

// Вам необходимо самостоятельно решить, 
// для какого задания (1 и 2) какой оператор ветвления лучше использовать: 
// if, switch или  тернарный.

// Вам необходимо самостоятельно решить, 
// для какого задания (3  и 4) какой цикл лучше использовать: 
// WHILE, DO WHILE или FOR.


do {
  var x = +prompt('Введите номер задачи, которую хотите запустить (от 1 до 4). Для выхода введите "0"');
  switch (x) {
    case 1:
      // Задание  1:
      // Задать пользователю 3 вопроса, в каждом вопросе по 3 варианта ответа. 
      // За каждый правильный ответ начисляется 2 балла. 
      // После вопросов выведите пользователю количество набранных баллов.
      
      // let result = 0;
      // if(+prompt('Сколько будет 2+2?') == 4) {
      //   result += 2;
      // }
      // if(+prompt('Сколько будет 5+5?') == 10) {
      //   result += 2;
      // }
      // if(+prompt('Сколько будет 5-2?') == 3) {
      //   result += 2;
      // }
      // alert('Кол-во баллов: ' + result);
      
      let result = 0;
      result += +prompt('Сколько будет 2+2?') == 4 ? 2 : 0;
      result += +prompt('Сколько будет 5+5?') == 10 ? 2 : 0;
      result += +prompt('Сколько будет 5-2?') == 3 ? 2 : 0;
      alert('Кол-во баллов: ' + result + ' (Конструкция If нагляднее)');
      
      break;


    case 2:
      // Задание  2:
      
      // Запросить у пользователя его возраст и определить, кем он является: 
      // ребенком (0–2), подростком (12–18), взрослым (18_60) или пенсионером (60– ...).
      
      let answer;
      let age = +prompt('Сколько вам лет? (ответ цифрой)');
      if (age <= 2) {
        answer = 'ребёнок';
      } else if (age > 2 && age < 12) {
        answer = 'отпрыск';
      } else if (age <= 12 && age < 18) {
        answer = 'подросток';
      } else if (age >= 18 && age < 60) {
        answer = 'взрослый';
      } else if (age >= 60) {
        answer = 'пенсионер';
      }
      alert('Вы: ' + answer);
      
    break;


    case 3:
      // Задание  3:
      
      // Зациклить калькулятор. 
      // Запросить у пользователя 2 числа и знак, решить пример, 
      // вывести результат и спросить, хочет ли он решить еще один пример. 
      // И так до тех пор, пока пользователь не откажется.
      
      do {
        let a = +prompt('Введите первое число');
        let o = prompt('Введите знак примера (+,-,/,*)');
        let b = +prompt('Введите второе число');
        
        switch (o) {
          case '+':
            alert(a + b);
            break;
            case '-':
              alert(a - b);
              break;
              case '/':
                alert(a / b);
                break;
                case '*':
            alert(a * b);
            break;
        }
      
        var y = +prompt('Если хотите продолжить, введите "1". Если хотите закончить, введите "0"');
      } while (y != 0);

      break;


    case 4:
      // Задание  4:
      
      // Запросить у пользователя 10 чисел и подсчитать, 
      // сколько он ввел положительных, отрицательных и нулей. 
      // При этом также посчитать, сколько четных и нечетных. 
      // Вывести статистику на экран. Учтите, что достаточно одной переменной (не 10) 
      // для ввода чисел пользователем.
      
      let counterChet = 0;
      let counterNeChet = 0;
      let counterNull = 0;
      let counterPos = 0;
      let counterNeg = 0;
      
      alert('Введите 10 чисел');
      
      for (let i = 0; i < 10; i++) {
        let num = +prompt('Введите число')
        if (num > 0) {
          counterPos++;
        } else if (num < 0) {
          counterNeg++;
        } else if (num == 0) {
          counterNull++;
        }
      
        if (num % 2 == 0) {
          counterChet++;
        } else {
          counterNeChet++;
        }
      }
      
      alert('Кол-во положительных: ' + counterPos + '\n' + 
            'Кол-во отрицательных: ' + counterNeg + '\n' +
            'Кол-во нулей: ' + counterNull + '\n' +
            'Кол-во чётных: ' + counterChet + '\n' +
            'Кол-во нечётных: ' + counterNeChet + '\n');

      break;
  }
} while (x != 0);