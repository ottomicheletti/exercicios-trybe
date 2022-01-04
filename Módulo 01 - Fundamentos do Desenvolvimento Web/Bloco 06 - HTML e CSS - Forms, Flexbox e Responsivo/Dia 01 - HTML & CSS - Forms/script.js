// CONSTANTES

const estadosBrasileiros = [
  'Acre',
  'Alagoas',
  'Amapá',
  'Amazonas',
  'Bahia',
  'Ceará',
  'Espírito Santo',
  'Goiás',
  'Maranhão',
  'Mato Grosso',
  'Mato Grosso do Sul',
  'Minas Gerais',
  'Pará',
  'Paraíba',
  'Paraná',
  'Pernambuco',
  'Piauí',
  'Rio de Janeiro',
  'Rio Grande do Norte',
  'Rio Grande do Sul',
  'Rondônia',
  'Roraima',
  'Santa Catarina',
  'São Paulo',
  'Sergipe',
  'Tocantins',
  'Distrito Federal',
];

function geraEstados() {
  const estados = document.getElementById('estados');
  for (let index = 0; index < estadosBrasileiros.length; index += 1) {
    let option = document.createElement('option');
    option.value = estadosBrasileiros[index];
    option.innerText = estadosBrasileiros[index];
    estados.appendChild(option);
  }
  estados.value = '';
}

geraEstados();

function confirmaData() {
  const dataInicio = document.getElementById('inicio').value;
  const dia = parseInt(dataInicio.slice(0, 2), 10);
  const divisor1 = dataInicio.slice(2, 3);
  const mes = parseInt(dataInicio.slice(3, 5), 10);
  const divisor2 = dataInicio.slice(5, 6);
  const ano = parseInt(dataInicio.slice(6, 10), 10);

  if (dataInicio.length < 10) {
    alert('Data incompleta');
  } else if (divisor1 !== '/' && divisor2 !== '/') {
    alert('Formate a data corretamente');
  } else if (dia < 1 || dia > 31) {
    alert('Verifique se o dia é menor que 01 ou maior que 31');
  } else if (mes < 1 || mes > 12) {
    alert('Verifique se o mês é menor que 01 ou maior que 12');
  } else if (ano < 1900 || ano > 2022) {
    alert('Verifique se o ano é menor que 1900 ou maior que 2022');
  }
}

function geraCurriculo() {
  const nome = document.getElementById('nome').value;
  const email = document.getElementById('email').value;
  const cpf = document.getElementById('cpf').value;
  const endereco = document.getElementById('endereco').value;
  const cidade = document.getElementById('cidade').value;
  const estado = document.getElementById('estados').value;
  const resumo = document.getElementById('resumo').value;
  const cargo = document.getElementById('cargo').value;
  const descricao = document.getElementById('descricao').value;
  let curriculo = document.getElementById('curriculo');

  curriculo.innerHTML = `<h1>${nome}</h1>
  <h3>${email}</h3>
  <h3>CPF: <span>${cpf.slice(0, 3)}.${cpf.slice(3, 6)}.${cpf.slice(
    6,
    9
  )}-${cpf.slice(9, 11)}</span></h3>
  <br/>
  <h4>Endereço: ${endereco}, ${cidade} - ${estado}</h4>
  <br/>
  <p>${resumo}</p>
  <br/>
  <h3>${cargo}</h3>
  <br/>
  <p>${descricao}</p>                    
  `;
}

const gerarCurriculo = document.getElementById('gerar');
gerarCurriculo.addEventListener('click', function (event) {
  event.preventDefault();
  confirmaData();
  geraCurriculo();
});

const apagarDados = document.getElementById('apagar');
apagarDados.addEventListener('click', function () {
  let nome = document.getElementById('nome');
  let email = document.getElementById('email');
  let cpf = document.getElementById('cpf');
  let endereco = document.getElementById('endereco');
  let cidade = document.getElementById('cidade');
  let estado = document.getElementById('estados');
  let resumo = document.getElementById('resumo');
  let cargo = document.getElementById('cargo');
  let descricao = document.getElementById('descricao');
  let dataInicio = document.getElementById('inicio');
  let curriculo = document.getElementById('curriculo');

  nome.value = '';
  email.value = '';
  cpf.value = '';
  endereco.value = '';
  cidade.value = '';
  estado.value = '';
  resumo.value = '';
  cargo.value = '';
  descricao.value = '';
  dataInicio.value = '';
  curriculo.innerHTML = '';
});
