const { test, expect } = require('@jest/globals');
const functions = require('./functions');

describe('Exercício 1', () => {
  test('1.1 - Verifica se 4 + 5 é igual a 9', () => {
    expect(functions.sum(4, 5)).toEqual(9);
  });
  test('1.2 - Verifica se 0 + 0 é igual a 0', () => {
    expect(functions.sum(0, 0)).toEqual(0);
  });
  test('1.3 - Verifica se a função "sum" lança um erro quando os parâmetros são 4 e "5"', () => {
    expect(() => {
      functions.sum(4, '5');
    }).toThrowError();
  });
  test('1.4 - Verifica se a mensagem de erro é "parameters must be numbers', () => {
    expect(() => {
      functions.sum(4, '5');
    }).toThrow('parameters must be numbers');
  });
});

describe('Exercício 2', () => {
  test('2.1 - Verifica se a chamada "myRemove([1, 2, 3, 4], 3)" retorna o array esperado', () => {
    expect(functions.removeitem([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
  });
  test('2.2 - Verifica se a chamada "myRemove([1, 2, 3, 4], 3)" não retorna o array "[1, 2, 3, 4]"', () => {
    expect(functions.removeitem([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
  });
  test('2.3 - Verifica se a chamada "myRemove([1, 2, 3, 4], 5)" retorna o array esperado', () => {
    expect(functions.removeitem([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
  });
});

describe('Exercício 3', () => {
  test('3.1 - Verifica se o número "15" retorna "fizzbuzz"', () => {
    expect(functions.fizzbuzz(15)).toBe('fizzbuzz');
  });
  test('3.2 - Verifica se o número "6" retorna "fizz"', () => {
    expect(functions.fizzbuzz(6)).toBe('fizz');
  });
  test('3.3 - Verifica se o número "10" retorna "buzz"', () => {
    expect(functions.fizzbuzz(10)).toBe('buzz');
  });
  test('3.4 - Verifica se o número "13" retorna "false"', () => {
    expect(functions.fizzbuzz(13)).toBe(false);
  });
  test('3.5 - Verifica se o argumento passado for diferente de um número, retorna "false"', () => {
    expect(functions.fizzbuzz('a')).toBe(false);
  });
});

describe('Exercício 4', () => {
  test('4.1 - Testa se "encode" e "decode" são funções', () => {
    expect(typeof functions.encode).toBe('function');
    expect(typeof functions.decode).toBe('function');
  });
  test('4.2 - Testa se as vogais "a, e, i, o, u" são convertidas para "1, 2, 3, 4, 5" respectivamente', () => {
    expect(functions.encode('a, e, i, o, u')).toBe('1, 2, 3, 4, 5');
  });
  test('4.3 - Testa se os números "1, 2, 3, 4, 5" são convertidos para "a, e, i, o, u" respectivamente', () => {
    expect(functions.decode('1, 2, 3, 4, 5')).toBe('a, e, i, o, u');
  });
  test('4.4 - Testa se as consoantes "bcdfghjklmnpqrstvwxyz" permanecem imutáveis', () => {
    expect(functions.encode('bcdfghjklmnpqrstvwxyz')).toBe('bcdfghjklmnpqrstvwxyz');
    expect(functions.decode('bcdfghjklmnpqrstvwxyz')).toBe('bcdfghjklmnpqrstvwxyz');
  });
  test('4.5 - Testa se a string "Teste número cinco" tem a mesma quantidade de caracteres em encode/decode', () => {
    expect(functions.encode('Teste número cinco').length).toBe('Teste número cinco'.length);
    expect(functions.decode('T2st2 núm2r4 c3nc4').length).toBe('Teste número cinco'.length);
  });
});

describe('Exercício 5', () => {
  test('5.1 - Testa se a função "techlist" é definida', () => {
    expect(functions.techlist).toBeDefined();
  });
  test('5.2 - Testa se "techlist" é uma função', () => {
    expect(typeof functions.techlist).toBe('function');
  });
  test('5.3 - Testa se uma lista com 5 tecnologias deve retornar uma lista de objetos ordenados', () => {
    expect(functions.techlist(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Lucas')).toEqual([
      { tech: 'React', name: 'Lucas' },
      { tech: 'Jest', name: 'Lucas' },
      { tech: 'HTML', name: 'Lucas' },
      { tech: 'CSS', name: 'Lucas' },
      { tech: 'JavaScript', name: 'Lucas' },
    ]);
  });
  test('5.4 - Lista com 0 tecnologias deve retornar uma mensagem de erro "Vazio!"', () => {
    expect(functions.techlist([], 'Lucas')).toBe('Vazio!');
  });
});

describe('Exercício 6', () => {
  test('Testa se a função "hydrate" é definida', () => {
    expect(functions.hydrate).toBeDefined();
  });
  test('Testa se "hydrate" é uma função', () => {
    expect(typeof functions.hydrate).toBe('function');
  });
  test('Testa se ao receber uma string, retorna a sugestão de quantos copos de água deve-se beber', () => {
    expect(functions.hydrate('1 cerveja')).toBe('1 copo de água');
    expect(functions.hydrate('1 cachaça, 5 cervejas e 1 copo de vinho')).toBe('7 copos de água');
    expect(functions.hydrate('2 shots de tequila, 2 cervejas e 1 corote')).toBe('5 copos de água');
    expect(functions.hydrate('1 copo de catuaba, 1 cervejas e 1 copo de vinho')).toBe('3 copos de água');
    expect(functions.hydrate('4 caipirinhas e 2 cervejas')).toBe('6 copos de água');
  });
});
