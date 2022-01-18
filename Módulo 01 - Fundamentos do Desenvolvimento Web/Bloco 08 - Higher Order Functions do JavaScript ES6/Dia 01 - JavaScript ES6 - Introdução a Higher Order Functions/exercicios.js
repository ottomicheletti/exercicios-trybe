// 1 - Crie uma função que retorne um objeto no formato { nomeCompleto, email } representando uma nova pessoa contratada. Passe sua função como parâmetro da HOF newEmployees para criar cada pessoa contratada em seu respectivo id . A sua função deve receber como parâmetro o nome completo da pessoa funcionária e a partir dele gerar automaticamente um email no formato nome_da_pessoa@trybe.com .
const generateEmail = (fullname) => ({ nome: fullname, email: `${Array.from(fullname.split(' '))[0].toLowerCase()}@trybe.com` });

const newEmployees = () => {
  const employees = {
    id1: generateEmail('Pedro Guerra'),
    id2: generateEmail('Luiza Drumond'),
    id3: generateEmail('Carla Paiva'),
  };
  return employees;
};

console.log(newEmployees());

// 2 - Desenvolva uma HOF que retorna o resultado de um sorteio. Esta HOF irá gerar um número aleatório entre 1 e 5 recebendo como parâmetros o número apostado e uma função que checa se o número apostado é igual ao número sorteado. O retorno da sua HOF deve ser uma string (Ex: "Tente novamente" ou "Parabéns você ganhou").
const sorteio = (n) => {
  const randomNumber = Math.ceil(Math.random() * 5);
  n === randomNumber ? console.log('Parabéns você ganhou') : console.log('Tente novamente');
};

sorteio(2);

// 3 - Crie uma HOF que receberá três parâmetros. O primeiro será um array de respostas corretas (Gabarito), o segundo será um array de respostas a serem verificadas (respostas da pessoa estudante) e o terceiro é uma função que checa se as respostas estão corretas e faz a contagem da pontuação final recebida pela pessoa estudante. Ao final a HOF deve retornar o total da contagem de respostas certas.
const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];
const pontuacao = (gabarito, respostas) => {
  let nota = 0;
  for (let index = 0; index < gabarito.length; index += 1) {
    if (respostas[index] === gabarito[index]) {
      nota += 1;
    } else if (respostas[index] === 'N.A') {
      nota += 0;
    } else {
      nota -= 0.5;
    }
  }
  return console.log(nota);
};

pontuacao(RIGHT_ANSWERS, STUDENT_ANSWERS);
