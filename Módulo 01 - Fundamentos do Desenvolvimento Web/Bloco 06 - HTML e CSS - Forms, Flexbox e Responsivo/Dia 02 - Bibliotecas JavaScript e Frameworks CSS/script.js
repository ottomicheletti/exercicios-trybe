const unitedStates = {
  al: 'Alabama',
  ak: 'Alaska',
  ar: 'Arkansas',
  az: 'Arizona',
  ca: 'California',
  ks: 'Kansas',
  nc: 'North Carolina',
  sc: 'South Carolina',
  co: 'Colorado',
  ct: 'Connecticut',
  nd: 'North Dakota',
  sd: 'South Dakota',
  de: 'Delaware',
  fl: 'Florida',
  ga: 'Georgia',
  hi: 'Hawaii',
  id: 'Idaho',
  ri: 'Rhode Island',
  il: 'Illinois',
  in: 'Indiana',
  ia: 'Iowa',
  ky: 'Kentucky',
  la: 'Louisiana',
  me: 'Maine',
  md: 'Maryland',
  ma: 'Massachusetts',
  mi: 'Michigan',
  mn: 'Minnesota',
  ms: 'Mississippi',
  mo: 'Missouri',
  mt: 'Montana',
  ne: 'Nebraska',
  nv: 'Nevada',
  nh: 'New Hampshire',
  nj: 'New Jersey',
  ny: 'New York',
  nm: 'New Mexico',
  ok: 'Oklahoma',
  oh: 'Ohio',
  or: 'Oregon',
  pa: 'Pennsylvania',
  tn: 'Tennessee',
  tx: 'Texas',
  ut: 'Utah',
  vt: 'Vermont',
  va: 'Virginia',
  wv: 'West Virginia',
  wa: 'Washington',
  wi: 'Wisconsin',
  wy: 'Wyoming',
};

function generateAmerica() {
  const allStates = $('#estados');
  for (const [key, value] of Object.entries(unitedStates)) {
    let option = $(`<option value='${key}'>${value}</option>`);
    allStates.append(option);
    // console.log(`Estado: ${value} e respectiva sigla: ${key.toUpperCase()}`);
  }
  // $('#estados').val('');
}
generateAmerica();

// DataPickerX
document.getElementById('data').DatePickerX.init({
  format: 'dd/mm/yyyy',
});

function generateResume() {
  const name = $('#nome').val();
  const email = $('#email').val();
  const cpf = $('#cpf').val();
  const address = $('#endereco').val();
  const city = $('#cidade').val();
  const states = $('#estados').val();
  const abstract = $('#resumo').val();
  const position = $('#cargo').val();
  const description = $('#descricao').val();
  const data = $('#data').val();
  const resume = $('#curriculo');

  resume.html(
    `
    <h1>${name}</h1>
    <h3>${email}</h3>
    <h3>CPF: <span>${cpf.slice(0, 3)}.${cpf.slice(3, 6)}.${cpf.slice(
      6,
      9
    )}-${cpf.slice(9, 11)}</span></h3>
    <br/>
    <h4>Address: ${address}, ${city} - ${states.toUpperCase()}</h4>
    <br/>
    <p>${abstract}</p>
    <br/>
    <h3>${position}</h3>
    <br/>
    <p>${description}</p>     
    <br/>
    <p>${data}</p>               
    `
  );
}

$('#gerar').on('click', function (event) {
  event.preventDefault();
  generateResume();
});

$('#apagar').on('click', function () {
  $('#nome').val('');
  $('#email').val('');
  $('#cpf').val('');
  $('#endereco').val('');
  $('#cidade').val('');
  $('#estados').val('');
  $('#resumo').val('');
  $('#cargo').val('');
  $('#descricao').val('');
  $('#data').val('');
  $('#curriculo').html('');
});
