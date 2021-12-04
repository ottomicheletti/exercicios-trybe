function converteRomanos(algarismos) {
  const romanos = {
    i: 1,
    v: 5,
    x: 10,
    l: 50,
    c: 100,
    d: 500,
    m: 1000,
  };
  algarismos = algarismos.toLowerCase();

  let romanoConvertido = romanos[algarismos[algarismos.length - 1]];
  let atual = romanos[algarismos[algarismos.length - 1]];

  for (let indice = 2; indice <= algarismos.length; indice++) {
    const proximoAlgarismo = romanos[algarismos[algarismos.length - indice]];

    if (atual <= proximoAlgarismo) {
      romanoConvertido += proximoAlgarismo;
    } else {
      romanoConvertido -= proximoAlgarismo;
    }
    atual = proximoAlgarismo;
  }

  return romanoConvertido;
}

let algarismoTeste = 'MCMXCII';
console.log(converteRomanos(algarismoTeste));
