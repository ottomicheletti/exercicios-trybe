function verificaSeEndingEhFinaldeWord(word, ending) {
  let ehFinal = 0;
  let palavra = word;
  let final = ending;
  let diffTamanho = palavra.length - final.length;

  for (let index = 0; index < final.length; index++) {
    if (final[index] === palavra[index + diffTamanho]) {
      ehFinal += 1;
    }
  }
  if (ehFinal === final.length) {
    return true;
  } else {
    return false;
  }
}

console.log(verificaSeEndingEhFinaldeWord('trybe', 'be'));
