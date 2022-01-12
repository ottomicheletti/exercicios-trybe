// Requisito 3
const btnLogin = document.querySelector('#btn-login');
const email = document.querySelector('#email');
const senha = document.querySelector('#senha');

btnLogin.addEventListener('click', () => {
  if (email.value === 'tryber@teste.com' && senha.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
});

// Requisito 18
const agreement = document.querySelector('#agreement');
const btnSubmit = document.getElementById('submit-btn');

function check() {
  if (agreement.checked !== true) {
    btnSubmit.disabled = true;
    btnSubmit.style.cursor = 'not-allowed';
    btnSubmit.style.backgroundColor = 'rgb(60, 64, 74)';
  } else {
    btnSubmit.disabled = false;
    btnSubmit.style.cursor = 'pointer';
    btnSubmit.style.backgroundColor = 'rgb(78, 44, 131)';
  }
}

agreement.addEventListener('change', check);

// Requisito 20
const text = document.getElementById('textarea');
const counter = document.querySelector('#counter');

function caracteres(event) {
  if (text.value.length > 0 && event.key !== 'backspace') {
    counter.innerHTML = 500 - text.value.length;
  } else {
    counter.innerHTML = 500;
  }
}

text.addEventListener('keyup', caracteres);

// Requisito 21
const form = document.querySelector('#evaluation-form');
const nome = document.querySelector('#input-name');
const sobrenome = document.querySelector('#input-lastname');
const emailForm = document.querySelector('#input-email');
const casa = document.querySelector('#house');
const familia = document.querySelectorAll('.family');
let familiaEscolhida = '';
const materias = document.querySelectorAll('.subject');
let materiasEscolhidas = '';
const notas = document.querySelectorAll('.nota');
let notaEscolhida = '';
const obervacoes = document.querySelector('textarea');

// functions family(), checked() e satisfaction() inspiradas em https://stackoverflow.com/a/45875948
function family() {
  return [...familia].filter((radio) => radio.checked).map((radio) => radio.value);
}

function checked() {
  return [...materias].filter((checkbox) => checkbox.checked).map((checkbox) => checkbox.value);
}

function satisfaction() {
  return [...notas].filter((radio) => radio.checked).map((radio) => radio.value);
}

btnSubmit.addEventListener('click', () => {
  familiaEscolhida = family();
  materiasEscolhidas = checked();
  notaEscolhida = satisfaction();
  form.innerHTML = `
  <p> Nome: ${nome.value} ${sobrenome.value} </p>
  <p> Email: ${emailForm.value}</p>
  <p> Casa: ${casa.value}</p>
  <p> Família: ${familiaEscolhida}</p>
  <p> Matérias: ${materiasEscolhidas.join(', ')}</p>
  <p> Avaliação: ${notaEscolhida}</p>
  <p> Observações: ${obervacoes.value}`;
});
