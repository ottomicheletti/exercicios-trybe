// Exercício 1
const sum = (a, b) => {
  if (typeof a === 'number' && typeof b === 'number') {
    return a + b;
  } else {
    throw 'parameters must be numbers';
  }
};

// Exercício 2
const removeitem = (arr, item) => {
  let result = [];
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] !== item) {
      result.push(arr[i]);
    }
  }
  return result;
};

// Exercício 3
const fizzbuzz = (num) => {
  if (typeof num !== 'number') {
    return false;
  } else if (num % 3 === 0 && num % 5 === 0) {
    return 'fizzbuzz';
  } else if (num % 3 === 0) {
    return 'fizz';
  } else if (num % 5 === 0) {
    return 'buzz';
  } else if (num % 3 !== 0 && num % 5 !== 0) {
    return false;
  }
};

// Exercício 4
const encode = (string) => {
  let fraseCodificada = [];
  for (let index = 0; index < string.length; index++) {
    switch (true) {
      case string[index] === 'a':
        fraseCodificada.push(1);
        break;
      case string[index] === 'e':
        fraseCodificada.push(2);
        break;
      case string[index] === 'i':
        fraseCodificada.push(3);
        break;
      case string[index] === 'o':
        fraseCodificada.push(4);
        break;
      case string[index] === 'u':
        fraseCodificada.push(5);
        break;
      default:
        fraseCodificada.push(string[index]);
        break;
    }
  }
  return fraseCodificada.join('');
};

const decode = (string) => {
  let fraseDecodificada = [];
  for (let index = 0; index < string.length; index++) {
    switch (true) {
      case string[index] === '1':
        fraseDecodificada.push('a');
        break;
      case string[index] === '2':
        fraseDecodificada.push('e');
        break;
      case string[index] === '3':
        fraseDecodificada.push('i');
        break;
      case string[index] === '4':
        fraseDecodificada.push('o');
        break;
      case string[index] === '5':
        fraseDecodificada.push('u');
        break;
      default:
        fraseDecodificada.push(string[index]);
        break;
    }
  }
  return fraseDecodificada.join('');
};

// Exercício 5
const techlist = (arr, nome) => {
  if (typeof arr[0] === 'undefined') {
    return 'Vazio!';
  } else {
    let result = [];
    for (let index = 0; index < [...arr].length; index += 1) {
      result.push({ tech: [...arr][index], name: nome });
    }
    return result;
  }
};

// Exercício 6
const hydrate = (string) => {
  const numerosArray = string.match(/\d+/g).map(Number);
  let coposDeAgua = 0;
  let pluralOuNao = '';
  for (let index = 0; index < numerosArray.length; index++) {
    if (typeof numerosArray[index] == 'number') {
      coposDeAgua += numerosArray[index];
    }
  }
  coposDeAgua > 1 ? (pluralOuNao = 'copos de água') : (pluralOuNao = 'copo de água');
  return `${coposDeAgua} ${pluralOuNao}`;
};

// Bônus
const professionalBoard = [
  {
    id: '8579-6',
    firstName: 'Ana',
    lastName: 'Gates',
    specialities: ['UX', 'Design'],
  },
  {
    id: '5569-4',
    firstName: 'George',
    lastName: 'Jobs',
    specialities: ['Frontend', 'Redux', 'React', 'CSS'],
  },
  {
    id: '4456-4',
    firstName: 'Leila',
    lastName: 'Zuckerberg',
    specialities: ['Context API', 'RTL', 'Bootstrap'],
  },
  {
    id: '1256-4',
    firstName: 'Linda',
    lastName: 'Bezos',
    specialities: ['Hooks', 'Context API', 'Tailwind CSS'],
  },
  {
    id: '9852-2-2',
    firstName: 'Jeff',
    lastName: 'Cook',
    specialities: ['Ruby', 'SQL'],
  },
  {
    id: '4678-2',
    firstName: 'Paul',
    lastName: 'Dodds',
    specialities: ['Backend'],
  },
];

const searchEmployee = (id, key) => {
  let employee = '';

  for (const pessoa in professionalBoard) {
    const currentEmployee = professionalBoard[pessoa];
    if (currentEmployee.id === id) {
      employee = currentEmployee;
    }
  }
  if (!employee) {
    throw 'ID não identificada';
  }
  if (!employee[key]) {
    throw 'Informação indisponível';
  }
  return `ID: ${employee.id}
Nome completo: ${employee.firstName} ${employee.lastName}
Especialidades: ${employee.specialities.join(', ')}`;
};

module.exports = {
  sum,
  removeitem,
  fizzbuzz,
  encode,
  decode,
  techlist,
  hydrate,
  searchEmployee,
};
