document.querySelector('#container').style.backgroundColor = '#F3F3F3';

document.querySelector('#header-container').style.backgroundColor = '#00B069';

document.querySelector('#footer-container').style.backgroundColor = '#003533';

// Section das Tarefas Urgentes
document.querySelector('section.emergency-tasks').style.backgroundColor =
  '#FF9F84';

document.querySelectorAll(
  'section.emergency-tasks div h3'
)[0].style.backgroundColor = '#A500F3';

document.querySelectorAll(
  'section.emergency-tasks div h3'
)[1].style.backgroundColor = '#A500F3';

// Section das Tarefas Não-Urgentes
document.querySelector('section.no-emergency-tasks').style.backgroundColor =
  '#F9DB5E';

document.querySelectorAll(
  'section.no-emergency-tasks div h3'
)[0].style.backgroundColor = '#232525';

document.querySelectorAll(
  'section.no-emergency-tasks div h3'
)[1].style.backgroundColor = '#232525';
