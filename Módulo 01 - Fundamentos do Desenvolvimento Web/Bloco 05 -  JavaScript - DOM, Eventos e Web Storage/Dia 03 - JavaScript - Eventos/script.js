function createDaysOfTheWeek() {
  const weekDays = [
    'Domingo',
    'Segunda',
    'Terça',
    'Quarta',
    'Quinta',
    'Sexta',
    'Sábado',
  ];
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  }
}

createDaysOfTheWeek();

// Escreva seu código abaixo.

// Exercício 01:

const dezDaysList = [
  29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
];

function criaDiasMes() {
  const listaDias = document.querySelector('#days');

  for (let index = 0; index < dezDaysList.length; index += 1) {
    let dia = dezDaysList[index];
    let elementoDia = document.createElement('li');

    switch (true) {
      case dia === 24 || dia === 31:
        elementoDia.className = 'day holiday';
        elementoDia.innerHTML = dia;
        listaDias.appendChild(elementoDia);
        break;
      case dia === 4 || dia === 11 || dia === 18:
        elementoDia.className = 'day friday';
        elementoDia.innerHTML = dia;
        listaDias.appendChild(elementoDia);
        break;
      case dia === 25:
        elementoDia.className = 'day holiday friday';
        elementoDia.innerHTML = dia;
        listaDias.appendChild(elementoDia);
        break;
      default:
        elementoDia.className = 'day';
        elementoDia.innerHTML = dia;
        listaDias.appendChild(elementoDia);
        break;
    }
  }
}
criaDiasMes();

// Exercicio 02

function holidays(buttonName) {
  let buttonsDiv = document.querySelector('.buttons-container');
  let holidaysButton = document.createElement('button');
  holidaysButton.id = 'btn-holiday';
  holidaysButton.innerHTML = buttonName;
  buttonsDiv.appendChild(holidaysButton);
}

holidays('Feriados');

// Exercicio 03

function holidaysButtonEvent() {
  let holidaysButton = document.getElementById('btn-holiday');
  let holidays = document.querySelectorAll('.holiday');
  let returnToColor = 'rgb(238, 238, 238)';
  let colorOnClick = 'white';

  holidaysButton.addEventListener('click', function () {
    for (let index = 0; index < holidays.length; index += 1) {
      holidays[index].style.backgroundColor === colorOnClick
        ? (holidays[index].style.backgroundColor = returnToColor)
        : (holidays[index].style.backgroundColor = colorOnClick);
    }
  });
}

holidaysButtonEvent();

// Exercicio 04

function createFridayButton(param) {
  let divButtons = document.querySelector('.buttons-container');
  let createButton = document.createElement('button');
  createButton.id = 'btn-friday';
  createButton.innerHTML = param;
  divButtons.appendChild(createButton);
}

createFridayButton('Sexta-feira');

// Exercicio 05

function showFridays(arrayFridays) {
  let fridaysButton = document.querySelector('#btn-friday');
  let fridays = document.getElementsByClassName('friday');

  fridaysButton.addEventListener('click', function () {
    for (let index = 0; index < fridays.length; index += 1) {
      fridays[index].innerHTML !== 'Sextou!!!'
        ? (fridays[index].innerHTML = 'Sextou!!!')
        : (fridays[index].innerHTML = arrayFridays[index]);
    }
  });
}

let decFridays = [4, 11, 18, 25];
showFridays(decFridays);

// Exercicio 06

function mouseZoomIn() {
  let monthDays = document.querySelector('#days');

  monthDays.addEventListener('mouseover', function (event) {
    event.target.style.fontSize = '30px';
    event.target.style.fontWeight = '500';
  });
}

function mouseZoomOut() {
  let monthDays = document.querySelector('#days');

  monthDays.addEventListener('mouseout', function (event) {
    event.target.style.fontSize = '20px';
    event.target.style.fontWeight = '200';
  });
}

mouseZoomIn();
mouseZoomOut();

// Exercicio 07

function createTask(task) {
  let tasksDiv = document.querySelector('.my-tasks');
  let newTask = document.createElement('span');

  newTask.innerHTML = task;
  tasksDiv.appendChild(newTask);
}

createTask('Aula de inglês');

// Exercicio 08

function addColorToTask(color) {
  let allTasks = document.querySelector('.my-tasks');
  let createDiv = document.createElement('div');
  createDiv.className = 'task';
  createDiv.style.backgroundColor = color;

  allTasks.appendChild(createDiv);
}

addColorToTask('cyan');

// Exercicio 09

function setTaskClass() {
  let selectedTask = document.getElementsByClassName('task selected');
  let createdTasks = document.querySelector('.task');

  createdTasks.addEventListener('click', function (event) {
    selectedTask.length === 0
      ? (event.target.className = 'task selected')
      : (event.target.className = 'task');
  });
}

setTaskClass();

// Exercicio 10

function setDayColor() {
  let selectedTask = document.getElementsByClassName('task selected');
  let days = document.querySelector('#days');
  let taskDiv = document.querySelector('.task');
  let taskColor = taskDiv.style.backgroundColor;

  days.addEventListener('click', function (event) {
    let eventTargetColor = event.target.style.color;
    if (selectedTask.length > 0 && eventTargetColor !== taskColor) {
      let color = selectedTask[0].style.backgroundColor;
      event.target.style.color = color;
    } else if (eventTargetColor === taskColor && selectedTask.length !== 0) {
      event.target.style.color = 'rgb(119,119,119)';
    }
  });
}

setDayColor();

// Bônus

function createNewTask() {
  let inputText = document.querySelector('#task-input');
  let addInputButton = document.querySelector('#btn-add');
  let getTaskList = document.querySelector('.task-list');

  addInputButton.addEventListener('click', function () {
    if (inputText.value.length > 0) {
      let newLi = document.createElement('li');
      newLi.innerText = inputText.value;

      getTaskList.appendChild(newLi);
      inputText.value = '';
    } else {
      alert('Error: Digite ao menos 1 caractere.');
    }
  });

  inputText.addEventListener('keyup', function (event) {
    if (event.key === 'Enter' && inputText.value.length > 0) {
      let newLi = document.createElement('li');
      newLi.innerText = inputText.value;

      getTaskList.appendChild(newLi);
      inputText.value = '';
    }
  });
}

createNewTask();
