'use strict';

// Создать массив студенты группы ( по аналогии с примером на уроке).
// Столбцы – фамилия, имя, возраст и средний балл 
// (количество не менее 10 студентов).
// Данные заполнить.

let studentsArr = [
  ['Илья', 'Жабров', 22, 8, 'man'],
  ['Анна', 'Разуваева', 21, 11, 'woman'],
  ['Александр', 'Чуркин', 23, 10, 'man'],
  ['Татьяна', 'Дьячук', 50, 9, 'woman'],
  ['Вадим', 'Платонов', 16, 12, 'man'],
  ['Мария', 'Богучарская', 19, 5, 'woman'],
  ['Андрей', 'Семёнов', 20, 6, 'man'],
  ['Анна', 'Норкина', 15, 1, 'woman'],
  ['Антон', 'Липович', 85, 12, 'man'],
  ['Владимир', 'Рыков', 22, 7, 'man'],
]

// 1. Вывод на экран всех студентов.

for(let i = 0; i < studentsArr.length; i++) {
  students.insertAdjacentHTML('beforeend', studentsArr[i][0] + ' ' + studentsArr[i][1] + '<br \/>')
}

// 2. Вывод на экран студентов, возраст которых превышает 20 лет.

for(let i = 0; i < studentsArr.length; i++) {
  if(studentsArr[i][2] > 20) {
    studentsOld.insertAdjacentHTML('beforeend', studentsArr[i][0] + ' ' + studentsArr[i][1] + '<br \/>')
  }
}

// 3. Вывод на экран только тех студентов,  
// средний балл которых меньше 7 и количество таких студентов.

let counter = 0;
for(let i = 0; i < studentsArr.length; i++) {
  if(studentsArr[i][3] < 7) {
    studentsBad.insertAdjacentHTML('beforeend', studentsArr[i][0] + ' ' + studentsArr[i][1] + '<br \/>')
    counter++;
  }
}
studentsBad.insertAdjacentHTML('beforeend', 'Кол-во студентов, средний балл которых меньше 7: ' + counter + '<br \/>');

// 4. Подсчитать и вывести на экран сколько женщин и мужчин в группе.

let counterMan = 0;
let counterWoman = 0;
for(let i = 0; i < studentsArr.length; i++) {
  if(studentsArr[i][4] == 'man') {
    counterMan++;
  }
  if(studentsArr[i][4] == 'woman') {
    counterWoman++;
  }
}
studentsSex.insertAdjacentHTML('beforeend', 'Кол-во мужчин в группе: ' + counterMan + '<br \/>');
studentsSex.insertAdjacentHTML('beforeend', 'Кол-во женщин в группе: ' + counterWoman + '<br \/>');

// 5. Подсчитать средний балл в группе.

let middle = 0;
for(let i = 0; i < studentsArr.length; i++) {
  middle += studentsArr[i][3];
}
middle /= studentsArr.length - 1;
studentsMiddle.insertAdjacentHTML('beforeend', 'Средний балл в группе: ' + middle + '<br \/>');

