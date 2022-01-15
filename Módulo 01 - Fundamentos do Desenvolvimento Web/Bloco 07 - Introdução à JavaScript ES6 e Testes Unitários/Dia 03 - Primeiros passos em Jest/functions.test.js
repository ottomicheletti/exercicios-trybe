const sum = require('./sum');
const myRemove = require('./myRemove');
const { test, expect } = require('@jest/globals');

describe('Exercício 1', () => {
  test('1.1 - Verifica se 4 + 5 é igual a 9', () => {
    expect(sum(4, 5)).toEqual(9);
  });
  test('1.2 - Verifica se 0 + 0 é igual a 0', () => {
    expect(sum(0, 0)).toEqual(0);
  });
  test('1.3 - Verifica se a função "sum" lança um erro quando os parâmetros são 4 e "5"', () => {
    expect(() => {
      sum(4, '5');
    }).toThrowError();
  });
  test('1.4 - Verifica se a mensagem de erro é "parameters must be numbers', () => {
    expect(() => {
      sum(4, '5');
    }).toThrow('parameters must be numbers');
  });
});

describe('Exercício 2', () => {
  test('2.1 - Verifica se a chamada "myRemove([1, 2, 3, 4], 3)" retorna o array esperado', () => {
    expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
  });
  test('2.2 - Verifica se a chamada "myRemove([1, 2, 3, 4], 3)" não retorna o array "[1, 2, 3, 4]"', () => {
    expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
  });
  test('2.3 - Verifica se a chamada "myRemove([1, 2, 3, 4], 5)" retorna o array esperado', () => {
    expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
  });
});
