const salarioBruto = 40000;
let aliquotaInss;
let impostoDeRenda;
let salarioBaseCalculo;
let salarioLiquido;

switch (true) {
  case salarioBruto <= 1556.94:
    aliquotaInss = 0.08;
    break;
  case salarioBruto > 1556.94 && salarioBruto <= 2594.92:
    aliquotaInss = 0.09;
    break;
  case salarioBruto > 2594.92 && salarioBruto <= 5189.82:
    aliquotaInss = 0.11;
    break;
  case salarioBruto > 5189.82:
    aliquotaInss = 570.88;
    break;
  default:
    aliquotaInss = undefined;
    break;
}

if (salarioBruto > 5189.82) {
  salarioBaseCalculo = salarioBruto - aliquotaInss;
} else if (salarioBruto <= 5189.82) {
  salarioBaseCalculo = salarioBruto - salarioBruto * aliquotaInss;
}

switch (true) {
  case salarioBaseCalculo <= 1903.98:
    impostoDeRenda = 0;
    break;
  case salarioBaseCalculo > 1903.98 && salarioBaseCalculo <= 2826.65:
    impostoDeRenda = salarioBaseCalculo * 0.075 - 142.8;
    break;
  case salarioBaseCalculo > 2826.65 && salarioBaseCalculo <= 3751.05:
    impostoDeRenda = salarioBaseCalculo * 0.15 - 354.8;
    break;
  case salarioBaseCalculo > 3751.05 && salarioBaseCalculo <= 4664.68:
    impostoDeRenda = salarioBaseCalculo * 0.225 - 636.13;
    break;
  case salarioBaseCalculo > 4664.68:
    impostoDeRenda = salarioBaseCalculo * 0.275 - 869.36;
    break;
  default:
    break;
}

salarioLiquido = salarioBaseCalculo - impostoDeRenda;

console.log('R$' + salarioLiquido.toFixed(2));
