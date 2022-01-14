const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

// 1.
const addTurno = (obj, key, value) => {
  obj[key] = value;
};
addTurno(lesson2, 'turno', 'noite');
console.table(lesson2);

// 2.
const listaKeys = (obj) => {
  console.log(`As chaves do objeto são: ${Object.keys(obj).join(', ')}`);
};
listaKeys(lesson2);

// 3.
const tamanhoObj = (obj) => {
  console.log(`O tamanho do objeto é: ${Object.keys(obj).length}`);
};
tamanhoObj(lesson2);

// 4.
const valoresObj = (obj) => {
  console.log(
    `Os valores do objeto em questão são: ${Object.values(obj).join(', ')}`
  );
};
valoresObj(lesson2);

// 5.
const allLessons = Object.assign({}, { lesson1, lesson2, lesson3 });
console.log(allLessons);

// 6.
const totalAlunos = (obj) => {
  let resultado = 0;
  const array = Object.keys(obj);
  for (const index in array) {
    resultado += obj[array[index]].numeroEstudantes;
  }
  return console.log(`No total são ${resultado} estudantes em todas as aulas`);
};
totalAlunos(allLessons);

// 7.
const descobreValor = (obj, n) => {
  const array = Object.values(obj);
  console.log(`O valor encontrado foi: ${array[n]}`);
};
descobreValor(lesson2, 2);

// 8.
const verificaValor = (obj, key, value) => {
  obj[key] === value
    ? console.log(
        `O valor '${value}' pesquisado na chave '${key}' do objeto em questão é: verdadeiro`
      )
    : console.log(
        `O valor '${value}' pesquisado na chave '${key}' do objeto em questão é: falso`
      );
};
verificaValor(lesson3, 'turno', 'noite');

// Bônus 1.
const verificaMateria = (obj, sbj) => {
  let resultado = 0;
  const array = Object.keys(obj);
  for (const index in array) {
    if (obj[array[index]].materia === sbj) {
      resultado += parseInt(obj[array[index]].numeroEstudantes);
    }
  }
  return console.log(
    `O total de alunos que assistiram às aulas de ${sbj} é: ${resultado}`
  );
};
verificaMateria(allLessons, 'História');
